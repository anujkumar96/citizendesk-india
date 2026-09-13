import { cn } from "@/src/utils/helpers";

export function PremiumCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-lg dark:shadow-black/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
