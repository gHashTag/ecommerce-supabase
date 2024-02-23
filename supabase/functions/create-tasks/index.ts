import { client } from "../utils/client.ts";
import { tasksFromAiBot, usersFromNotionPage } from "../utils/mock-data.ts";
import { getPreparedForBaseTasks, getPreparedUsers } from "../utils/helpers.ts";

// Получить пользователей с Supabase
// Create array tasks from AI bot
// Get Tasks
// Get Assignee ID
// Create tasks Supabase

Deno.serve(async (req) => {
  const supabaseClient = client(req);

  let { data, error } = await supabaseClient
    .rpc("pg_tables", { schemaname: "public" });

  if (error) {
    console.error("Ошибка при получении списка таблиц:", error);
    return;
  }

  console.log("Список таблиц:", data);

  // const supabaseClient = client(req);
  // const { tasks } = await req.json();
  // const tasks = tasksFromAiBot;
  // const preparedUsersFromNotionPage = getPreparedUsers(usersFromNotionPage);

  // const tasksTitles = tasks.map((title: any) => ({ title }));

  // const preparedForBaseTasks = getPreparedForBaseTasks(tasksTitles);

  // for (const item of tasks) {
  //   const data = await supabaseClient
  //     .from("tasks")
  //     .insert([{ ...item }]);
  //   console.log("🚀 ::: data:", data);
  // }
  // return data;

  return new Response(
    JSON.stringify("ok"),
    { headers: { "Content-Type": "application/json" } },
  );
});

// Deno.serve(async (req) => {
//   const { name } = await req.json();
//   const data = {
//     message: `Hello ${name}!`,
//   };

//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   );
// });

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-tasks' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'


*/
