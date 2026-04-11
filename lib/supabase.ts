import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type ViolationCategory =
  | 'sidewalk_park'
  | 'moto_sidewalk'
  | 'bus_stop'
  | 'crosswalk'
  | 'traffic_light'
  | 'other'

export interface Report {
  id: string
  cat: ViolationCategory
  lat: number
  lng: number
  ts: number
  address: string
  photo: string | null
  upvotes: number
}

export const CATEGORIES: Record<ViolationCategory, { emoji: string; label: string }> = {
  sidewalk_park:  { emoji: '🚗', label: 'Явган замд зогссон' },
  moto_sidewalk:  { emoji: '🛵', label: 'Мотоцикл явган замд' },
  bus_stop:       { emoji: '🚌', label: 'Автобусны зогсоол хаасан' },
  crosswalk:      { emoji: '🚶', label: 'Гарц дээр зогссон' },
  traffic_light:  { emoji: '🚦', label: 'Гэрэлт дохио зөрчсөн' },
  other:          { emoji: '⚠️', label: 'Бусад зөрчил' },
}
