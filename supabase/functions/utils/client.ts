import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const client = (req: any) => {
  const ANON_KEY_SUPABASE = Deno.env.get("SUPABASE_ANON_KEY");
  const URL_SUPABASE = Deno.env.get("SUPABASE_URL");

  const authHeader = req.headers.get("Authorization")!;
  const supabaseClient = createClient(
    URL_SUPABASE ?? "",
    ANON_KEY_SUPABASE ??
      "",
    { global: { headers: { Authorization: authHeader } } },
  );
  return supabaseClient;
};
