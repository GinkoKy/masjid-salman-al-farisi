
import { useEffect, useState } from 'react'
import { Clock3 } from 'lucide-react'

const TIME_ZONE = 'Asia/Jakarta'

const prayerList = [
  { name: 'Subuh', key: 'Fajr' },
  { name: 'Dzuhur', key: 'Dhuhr' },
  { name: 'Ashar', key: 'Asr' },
  { name: 'Maghrib', key: 'Maghrib' },
  { name: 'Isya', key: 'Isha' },
]

function getJakartaDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).formatToParts(date)

  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  )

  return `${values.day}-${values.month}-${values.year}`
}

function getJakartaMinutes(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  )

  return Number(values.hour) * 60 + Number(values.minute)
}

function formatClock(date) {
  return new Intl.DateTimeFormat('id-ID', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).format(date)
}

function formatCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

function cleanTime(time) {
  // Menghapus keterangan zona waktu jika disertakan API.
  return time?.split(' ')[0]?.slice(0, 5) ?? '--:--'
}

export default function PrayerSchedule() {
  const [now, setNow] = useState(() => new Date())
  const [timings, setTimings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const dateKey = getJakartaDate(now)

  // Perbarui jam setiap detik.
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Ambil jadwal salat untuk tanggal di Semarang.
  useEffect(() => {
    const controller = new AbortController()

    async function fetchPrayerTimes() {
      setLoading(true)
      setError(false)

      try {
        const url = new URL(
          `https://api.aladhan.com/v1/timingsByCity/${dateKey}`,
        )

        url.searchParams.set('city', 'Semarang')
        url.searchParams.set('country', 'Indonesia')
        url.searchParams.set('method', '20')
        url.searchParams.set('school', '0')

        const response = await fetch(url, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Gagal mengambil jadwal salat.')
        }

        const result = await response.json()

        if (result.code !== 200 || !result.data?.timings) {
          throw new Error('Data jadwal salat tidak tersedia.')
        }

        setTimings(result.data.timings)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchPrayerTimes()

    return () => controller.abort()
  }, [dateKey])

  const currentMinutes = getJakartaMinutes(now)

  const schedule = timings
    ? prayerList.map((prayer) => ({
        ...prayer,
        time: cleanTime(timings[prayer.key]),
      }))
    : []

  const nextPrayerIndex = schedule.findIndex((prayer) => {
    if (prayer.time === '--:--') return false

    const [hour, minute] = prayer.time.split(':').map(Number)

    return hour * 60 + minute > currentMinutes
  })

  const activeIndex =
    nextPrayerIndex === -1
      ? 0
      : nextPrayerIndex

  let countdown = '--:--:--'
  let nextPrayerName = ''

  if (schedule.length > 0 && !error) {
    const nextPrayer =
      nextPrayerIndex === -1
        ? schedule[0]
        : schedule[nextPrayerIndex]

    const [hour, minute] = nextPrayer.time.split(':').map(Number)

    const target = new Date(now)
    const currentTime = target.getTime()

    // Buat waktu tujuan berdasarkan zona waktu Asia/Jakarta.
    const targetMinutes = hour * 60 + minute
    const differenceMinutes =
      targetMinutes - currentMinutes

    if (nextPrayerIndex === -1) {
      // Jika semua salat hari ini lewat, hitung menuju Subuh esok.
      target.setTime(
        currentTime +
          (1440 - currentMinutes + targetMinutes) * 60 * 1000 -
          (now.getSeconds() * 1000 + now.getMilliseconds()),
      )
    } else {
      target.setTime(
        currentTime +
          differenceMinutes * 60 * 1000 -
          (now.getSeconds() * 1000 + now.getMilliseconds()),
      )
    }

    const remainingSeconds = Math.max(
      0,
      Math.floor((target.getTime() - now.getTime()) / 1000),
    )

    countdown = formatCountdown(remainingSeconds)
    nextPrayerName =
      nextPrayerIndex === -1
        ? 'Subuh besok'
        : nextPrayer.name
  }

  return (
    <div className="prayer-widget">
      <div className="prayer-widget-label">
        <Clock3 size={13} />
        JADWAL SHALAT SEMARANG
      </div>

      <div className="prayer-clock mb-2">
        <strong>{formatClock(now)}</strong>
        <span>{" "}Waktu Indonesia Barat (WIB)</span>
      </div>

      {loading && !timings ? (
        <p className="prayer-note">
          Memuat jadwal salat...
        </p>
      ) : error && !timings ? (
        <p className="prayer-note">
          Jadwal gagal dimuat. Periksa koneksi internet, lalu muat ulang halaman.
        </p>
      ) : (
        <>
          <div className="prayer-grid">
            {schedule.map(({ name, time }, index) => (
              <div
                className={`prayer-slot ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                key={name}
              >
                <span>{name}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>

          <div className="prayer-countdown mt-2">
            <span>
              {nextPrayerName
                ? `Menuju ${nextPrayerName}`
                : 'Hitung mundur salat berikutnya'}
            </span>

            <strong>{" "}{countdown}</strong>
          </div>

          {/* <p className="prayer-note">
            Jadwal berdasarkan API AlAdhan dengan metode Kementerian Agama
            Indonesia. Cocokkan dengan jadwal resmi Masjid Salman Al-Farisi
            sebelum digunakan sebagai acuan ibadah.
          </p> */}
        </>
      )}
    </div>
  )
}
