import { cn } from "@/lib/utils"

interface GoldDividerProps {
  className?: string
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        className={cn("w-full bg-repeat-x")}
        style={{
          backgroundImage: "url('/images/gold-divider.png')",
          backgroundSize: "auto 100%",
          height: "208px",
        }}
      ></div>
    </div>
  )
}
