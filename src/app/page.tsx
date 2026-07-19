import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-lg flex-col items-center gap-8 rounded-2xl bg-white p-12 shadow-sm dark:bg-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Summer
        </h1>

        <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 dark:border-green-800 dark:bg-green-950">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            Supabase 연결 성공
          </p>
        </div>

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          {user
            ? `로그인됨: ${user.email}`
            : "로그인되지 않은 상태입니다"}
        </p>
      </main>
    </div>
  );
}
