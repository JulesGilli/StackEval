import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wuaeyoittsfiehlailge.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1YWV5b2l0dHNmaWVobGFpbGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjMzOTYsImV4cCI6MjA2OTAzOTM5Nn0.r8mG6GJUPdz2iAzVKw5acz0yVbov36tW_Y3MRLsuUA0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
