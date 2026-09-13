import { cn } from "@/src/utils/helpers";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: HeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold text-[var(--brand)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
