import { client } from "../utils/client.ts";

Deno.serve(async (req) => {
  const supabaseClient = client(req);

  const {
    first_name,
    last_name,
    username,
    is_bot,
    language_code,
    telegram_id,
    email,
    avatar,
  } = await req.json();
  const usersData = {
    first_name,
    last_name,
    username,
    is_bot,
    language_code,
    telegram_id,
    email,
    avatar,
  };

  const data = await supabaseClient
    .from("users")
    .insert([{ ...usersData }]);

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  );
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-user' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
