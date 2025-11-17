import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // 在開發階段提醒環境變數未設定
  // eslint-disable-next-line no-console
  console.warn("Supabase URL 或 ANON KEY 尚未在環境變數中設定");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
