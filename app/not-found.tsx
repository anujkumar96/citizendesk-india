import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-slate-50 px-4 text-center dark:bg-slate-950">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The page you are looking for may have moved or is not available yet.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-blue-600 px-4 text-sm font-semibold text-white"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
