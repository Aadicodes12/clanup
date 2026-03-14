import { createClient } from '@supabase/supabase-js';

// These values are automatically provided by the platform
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gtxyzooqklyazjusobau.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0eHl6b29xa2x5YXpqdXNvYmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjA5OTEsImV4cCI6MjA4ODc5Njk5MX0.rAhdKR-6CvfUqzVr3EXArpmv5nT_W9EyaBfIesCUh1U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);