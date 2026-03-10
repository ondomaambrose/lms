import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// More descriptive error handling
if (!supabaseUrl) {
	console.error(
		'Supabase URL is missing. Check your VITE_SUPABASE_URL in .env'
	)
}
if (!supabaseAnonKey) {
	console.error(
		'Supabase Anon Key is missing. Check your VITE_SUPABASE_ANON_KEY in .env'
	)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
