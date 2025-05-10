import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItemProps {
  title: string
  link: string
  image?: string
  bgColor?: string
  className?: string
}

export function NavigationGrid() {
  return (
    <section className="bg-navy-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <NavigationItem title="Shop" link="/shop" image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg" />
          <NavigationItem title="Our Story" link="/our-story" image="/images/our-story-image.png" />
          <NavigationItem
            title="Certifications"
            link="/certifications"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sb41Y5oNHV2Tn1HlK0fPAmEVeBXsXl.png"
          />
          <NavigationItem title="Halal & Hygiene" link="/halal-hygiene" image="/images/plantation.png" />
          <NavigationItem title="Brewing Guides" link="/brewing-guides" image="/images/brewing-guide.png" />
          <NavigationItem title="Plantation" link="/plantation" image="/images/halal-hygiene.png" />
        </div>
      </div>
    </section>
  )
}

function NavigationItem({ title, link, image, bgColor, className }: NavigationItemProps) {
  return (
    <Link
      href={link}
      className={cn(
        "block group relative overflow-hidden rounded-lg h-56 transition-transform hover:scale-[1.02]",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/60 mix-blend-multiply"></div>
        </div>
      ) : (
        <div className={cn("absolute inset-0", bgColor || "bg-navy-800")}></div>
      )}

      <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
        <h3 className="text-lg font-bold text-gold-100">{title}</h3>
        <div className="flex items-center text-gold-400 font-medium text-sm">
          <span>View</span>
          <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
