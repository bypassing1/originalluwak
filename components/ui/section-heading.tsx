import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, center = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 mb-8", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-gold-300 text-lg">{subtitle}</p>}
      <div className={cn("h-1 w-20 bg-gradient-to-r from-gold-600 to-gold-400", center && "mx-auto")}></div>
    </div>
  )
}
