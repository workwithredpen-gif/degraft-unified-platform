import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-brand/10 text-brand",
        variant === "accent" && "bg-accent-gold/10 text-accent-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
