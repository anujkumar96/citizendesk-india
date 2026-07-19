import { cn } from "@/src/utils/helpers";

export function PremiumCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-xl border border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 dark:hover:border-blue-400/40", className)}>
      {children}
    </div>
  );
}
