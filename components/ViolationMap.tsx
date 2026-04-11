'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { supabase, CATEGORIES, Report, ViolationCategory } from '@/lib/supabase'

const UB_CENTER: [number, number] = [47.9077, 106.8832]

const ADDRESSES = [
  'Энхтайваны өргөн чөлөө', 'Чингисийн өргөн чөлөө',
  'Их Тойруу', 'Бага Тойруу', 'Нарны зам',
  'Сансарын гудамж', 'Баянгол дүүрэг', 'Хан-Уул дүүрэг',
]

function formatTime(ts: number): string {
  const diff = Math.floor((Date.now() - ts) / 60000)
  if (diff < 1) return 'Дөнгөж сая'
  if (diff < 60) return `${diff} минутын өмнө`
  if (diff < 1440) return `${Math.floor(diff / 60)} цагийн өмнө`
  return new Date(ts).toLocaleDateString('mn-MN')
}

function compressImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const max = 600
        let w = img.width, h = img.height
        if (w > max) { h = Math.round(h * max / w); w = max }
        canvas.width = w; canvas.height = h
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.6))
      }
      img.src = e.target!.result as string
    }
    reader.readAsDataURL(file)
  })
}

// ── Report Modal ──────────────────────────────────────────────────────────────
function ReportModal({ onClose, onSubmitted }: { onClose: () => void; onSubmitted: (r: Report) => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [cat, setCat] = useState<ViolationCategory | null>(null)
  const [photo, setPhoto] = useState<string | null>(null)
  const [coords, setCoords] = useState<[number, number] | null>(null)
  const [gpsStatus, setGpsStatus] = useState<'searching' | 'found' | 'approx'>('searching')
  const [submitting, setSubmitting] = useState(false)

  const startGps = useCallback(() => {
    setGpsStatus('searching')
    setCoords(null)
    if (!navigator.geolocation) { approxGps(); return }
    navigator.geolocation.getCurrentPosition(
      (pos) => { setCoords([pos.coords.latitude, pos.coords.longitude]); setGpsStatus('found') },
      () => approxGps(),
      { timeout: 8000 }
    )
  }, [])

  function approxGps() {
    const s = 0.03
    setCoords([UB_CENTER[0] + (Math.random() - .5) * s, UB_CENTER[1] + (Math.random() - .5) * s])
    setGpsStatus('approx')
  }

  async function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const compressed = await compressImage(file)
    setPhoto(compressed)
  }

  async function submit() {
    if (!cat || !coords) return
    setSubmitting(true)
    const report: Report = {
      id: 'r' + Date.now(),
      cat,
      lat: coords[0],
      lng: coords[1],
      ts: Date.now(),
      photo: photo || null,
      address: ADDRESSES[Math.floor(Math.random() * ADDRESSES.length)],
      upvotes: 0,
    }
    const { error } = await supabase.from('reports').insert(report)
    if (error) { setSubmitting(false); alert('Алдаа гарлаа, дахин оролдоно уу'); return }
    onSubmitted(report)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white dark:bg-zinc-900 rounded-t-2xl w-full max-w-lg p-5 pb-8 max-h-[90vh] overflow-y-auto">
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        {/* Step 1 — Category */}
        {step === 1 && (
          <>
            <h2 className="text-base font-medium mb-4">Зөрчлийн төрлийг сонгоно уу</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {(Object.entries(CATEGORIES) as [ViolationCategory, { emoji: string; label: string }][]).map(([id, c]) => (
                <button
                  key={id}
                  onClick={() => setCat(id)}
                  className={`p-3 rounded-xl border text-center transition-all ${cat === id ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}
                >
                  <div className="text-2xl mb-1">{c.emoji}</div>
                  <div className="text-xs leading-tight">{c.label}</div>
                </button>
              ))}
            </div>
            <button disabled={!cat} onClick={() => setStep(2)} className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium disabled:opacity-40">Үргэлжлүүлэх</button>
            <button onClick={onClose} className="w-full py-3 mt-2 bg-gray-100 rounded-xl text-sm">Болих</button>
          </>
        )}

        {/* Step 2 — Photo */}
        {step === 2 && (
          <>
            <h2 className="text-base font-medium mb-4">Зураг авна уу</h2>
            <label className="block border-2 border-dashed border-gray-200 rounded-xl h-36 flex items-center justify-center cursor-pointer mb-4 overflow-hidden bg-gray-50">
              {photo
                ? <img src={photo} alt="" className="w-full h-full object-cover" />
                : <div className="text-center text-gray-400 text-sm"><div className="text-3xl mb-1">📷</div>Зураг авах эсвэл сонгох</div>
              }
              <input type="file" accept="image/*" capture="environment" className="hidden" onChange={handlePhoto} />
            </label>
            <button disabled={!photo} onClick={() => { setStep(3); startGps() }} className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium disabled:opacity-40">Үргэлжлүүлэх</button>
            <button onClick={() => setStep(1)} className="w-full py-3 mt-2 bg-gray-100 rounded-xl text-sm">Буцах</button>
          </>
        )}

        {/* Step 3 — GPS + Submit */}
        {step === 3 && (
          <>
            <h2 className="text-base font-medium mb-4">Байршил тодорхойлж байна</h2>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-4">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${gpsStatus === 'searching' ? 'bg-gray-300' : 'bg-green-600'}`} />
              <span className="text-sm text-gray-600">
                {gpsStatus === 'searching' && 'GPS байршил хайж байна...'}
                {gpsStatus === 'found' && coords && `Байршил олдлоо: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`}
                {gpsStatus === 'approx' && 'Байршил тодорхойлогдлоо (ойролцоо)'}
              </span>
            </div>
            <button
              disabled={!coords || submitting}
              onClick={submit}
              className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium disabled:opacity-40"
            >
              {submitting ? 'Илгээж байна...' : 'Мэдээлэл илгээх'}
            </button>
            <button onClick={() => setStep(2)} className="w-full py-3 mt-2 bg-gray-100 rounded-xl text-sm">Буцах</button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Feed Panel ────────────────────────────────────────────────────────────────
function FeedPanel({ reports, onUpvote }: { reports: Report[]; onUpvote: (id: string) => void }) {
  const [voted, setVoted] = useState<Set<string>>(new Set())

  async function handleUpvote(r: Report) {
    if (voted.has(r.id)) return
    setVoted(prev => new Set([...prev, r.id]))
    onUpvote(r.id)
    await supabase.from('reports').update({ upvotes: r.upvotes + 1 }).eq('id', r.id)
  }

  if (!reports.length) return (
    <div className="flex-1 flex items-center justify-center text-gray-400 text-sm text-center p-8">
      Одоохондоо мэдээлэл байхгүй байна.<br />Эхний зөрчлийг та мэдээлээрэй!
    </div>
  )

  return (
    <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
      {reports.map(r => {
        const cat = CATEGORIES[r.cat] || CATEGORIES.other
        return (
          <div key={r.id} className="flex gap-0">
            <div className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center text-2xl overflow-hidden">
              {r.photo ? <img src={r.photo} alt="" className="w-full h-full object-cover" /> : cat.emoji}
            </div>
            <div className="flex-1 min-w-0 p-3">
              <div className="text-xs font-medium text-orange-600 mb-0.5">{cat.emoji} {cat.label}</div>
              <div className="text-xs text-gray-700 truncate mb-0.5">📍 {r.address}</div>
              <div className="text-xs text-gray-400 mb-1.5">{formatTime(r.ts)}</div>
              <button
                onClick={() => handleUpvote(r)}
                className={`text-xs px-3 py-1 rounded-full border transition-all ${voted.has(r.id) ? 'bg-orange-50 border-orange-400 text-orange-600' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
              >
                ▲ {r.upvotes + (voted.has(r.id) ? 1 : 0)}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ViolationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [reports, setReports] = useState<Report[]>([])
  const [tab, setTab] = useState<'map' | 'feed'>('map')
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState('')

  const todayCount = reports.filter(r => new Date(r.ts).toDateString() === new Date().toDateString()).length

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  function addMarker(r: Report) {
    if (!leafletMap.current) return
    const L = (window as any).L
    const cat = CATEGORIES[r.cat] || CATEGORIES.other
    const icon = L.divIcon({
      className: '',
      html: `<div style="width:22px;height:22px;background:#E35A1F;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3)"></div>`,
      iconSize: [22, 22], iconAnchor: [11, 22],
    })
    const m = L.marker([r.lat, r.lng], { icon })
      .addTo(leafletMap.current)
      .bindPopup(`<b>${cat.emoji} ${cat.label}</b><br/><small>${formatTime(r.ts)}</small>`)
    markersRef.current.push(m)
  }

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return
    const L = (window as any).L
    leafletMap.current = L.map(mapRef.current).setView(UB_CENTER, 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap', maxZoom: 19,
    }).addTo(leafletMap.current)
  }, [])

  useEffect(() => {
    supabase.from('reports').select('*').order('ts', { ascending: false }).limit(200)
      .then(({ data }) => {
        if (data) {
          setReports(data)
          data.forEach(addMarker)
        }
      })

    const channel = supabase.channel('reports')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'reports' }, (payload) => {
        const r = payload.new as Report
        setReports(prev => [r, ...prev])
        addMarker(r)
        showToast('Шинэ зөрчил мэдээлэгдлээ!')
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  useEffect(() => {
    if (tab === 'map') setTimeout(() => leafletMap.current?.invalidateSize(), 10)
  }, [tab])

  function handleSubmitted(r: Report) {
    setReports(prev => [r, ...prev])
    addMarker(r)
    if (leafletMap.current) leafletMap.current.flyTo([r.lat, r.lng], 15, { duration: 1 })
    showToast('Зөрчил амжилттай мэдээлэгдлээ!')
  }

  function handleUpvote(id: string) {
    setReports(prev => prev.map(r => r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r))
  }

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden border border-gray-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-100">
        <div>
          <div className="font-medium text-sm">Замын Хяналт</div>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full inline-block animate-pulse" />
            Шууд дамжуулалт
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right"><div className="text-sm font-medium text-orange-600">{reports.length}</div><div className="text-xs text-gray-400">Нийт</div></div>
          <div className="text-right"><div className="text-sm font-medium text-orange-600">{todayCount}</div><div className="text-xs text-gray-400">Өнөөдөр</div></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-100">
        {(['map', 'feed'] as const).map((t, i) => (
          <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 text-xs transition-all border-b-2 ${tab === t ? 'border-orange-500 text-orange-600 font-medium' : 'border-transparent text-gray-400'}`}>
            {i === 0 ? 'Газрын зураг' : 'Мэдээллүүд'}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className={`flex-1 relative ${tab === 'map' ? 'flex flex-col' : 'hidden'}`}>
        <div ref={mapRef} className="flex-1" />
        <button
          onClick={() => setShowModal(true)}
          className="absolute bottom-4 right-4 z-[999] bg-orange-600 text-white rounded-full px-4 py-2.5 text-sm font-medium shadow-lg"
        >
          + Зөрчил мэдээлэх
        </button>
      </div>

      {/* Feed */}
      {tab === 'feed' && <FeedPanel reports={reports} onUpvote={handleUpvote} />}

      {/* Modal */}
      {showModal && <ReportModal onClose={() => setShowModal(false)} onSubmitted={handleSubmitted} />}

      {/* Toast */}
      {toast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs px-4 py-2 rounded-full z-50 shadow">
          {toast}
        </div>
      )}
    </div>
  )
}
