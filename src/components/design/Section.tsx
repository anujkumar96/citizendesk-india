import { cn } from "@/src/utils/helpers";

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return <section id={id} className={cn("relative overflow-hidden py-20 sm:py-24", className)}>{children}</section>;
}
