import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-brand/5 border border-brand/20 p-6 text-center",
        className
      )}
    >
      <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted">{label}</div>
    </div>
  );
}
