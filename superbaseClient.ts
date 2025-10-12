/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types for TypeScript
export type Event = {
  id: string
  title: string
  description?: string
  created_at: string
  time_slots: TimeSlot[]
}

export type TimeSlot = {
  id: string
  event_id: string
  start_time: string
  end_time: string
}

export type Availability = {
  id: string
  event_id: string
  user_name: string
  time_slot_id: string
  created_at: string
}