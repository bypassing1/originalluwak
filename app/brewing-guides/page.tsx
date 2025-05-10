"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

const brewingContent = [
  {
    id: "why-brewing-matters",
    title: "Why Brewing Matters for Kopi Luwak Coffee",
    content: `Kopi Luwak Coffee isn't just another coffee—it's the most exclusive coffee in the world. Grown in select regions and naturally processed by wild civets, this rare coffee is known for its smooth, low-acid, and complex flavor. But here's the catch: if you don't brew it correctly, you could waste its premium taste and delicate aroma.

Unlike regular beans, Kopi Luwak Coffee undergoes a unique fermentation in the civet's digestive tract, reducing bitterness and enhancing its natural sweetness. That means you'll need the right brewing method to unlock its full potential.

In this guide, we'll cover the best ways to brew Kopi Luwak Coffee, ensuring you experience its true depth of flavor. From French Press to Pour-Over, Espresso to Cold Brew, we'll walk you through step-by-step, so you can brew like a pro.`,
    image: "/images/why-brewing-matters.webp",
    imageAlt: "Various coffee brewing equipment",
  },
  {
    id: "best-brewing-methods",
    title: "The Best Brewing Methods for Kopi Luwak",
    content: `With its unique flavor profile and premium quality, Kopi Luwak deserves to be brewed with care and precision. Each brewing method brings out different characteristics of this exceptional coffee, allowing you to experience its full range of flavors.

Whether you prefer a full-bodied cup, a clean and aromatic brew, an intense espresso shot, or a smooth cold brew, there's a perfect method for enjoying your Kopi Luwak. Let's explore the best brewing techniques to help you make the most of this extraordinary coffee.`,
    children: [
      {
        id: "french-press",
        title: "French Press Method – For a Rich, Full-Bodied Taste",
        content: `French Press is one of the best ways to brew Kopi Luwak Coffee because it allows for full immersion, preserving the natural oils that enhance its body and flavor.

What You'll Need:

Kopi Luwak Coffee beans (coarse grind)
French Press
Fresh filtered water
Kettle (for heating water)
Scale & timer (optional but recommended)

Step-by-Step Instructions:
Heat the Water – Boil fresh water and let it sit for 45 seconds (aim for 93°C/200°F).
Grind Your Coffee – Use a coarse grind (similar to sea salt). Ratio: 1:15 (1g coffee per 15ml water).
Bloom the Coffee – Pour a little hot water (twice the coffee weight) over the grounds and let it sit for 30 seconds to release gases.
Add the Remaining Water – Slowly pour in the rest, then stir gently.
Steep for 4 Minutes – Let it sit undisturbed.
Plunge Slowly & Serve – Press the plunger down steadily, then pour immediately to avoid over-extraction.

Pro Tip: French Press highlights Kopi Luwak Coffee's full-bodied richness and smooth texture with low acidity.`,
        image: "/images/frenchpress-method.webp",
        imageAlt: "French Press brewing method",
      },
      {
        id: "pour-over",
        title: "Pour-Over Method (V60/Chemex) – For a Clean, Aromatic Cup",
        content: `The Pour-Over method is perfect for coffee lovers who appreciate clarity and subtlety in flavor. It's ideal for showcasing Kopi Luwak Coffee's delicate tasting notes.

What You'll Need:

Medium grind Kopi Luwak Coffee beans
V60 or Chemex
Gooseneck kettle
Paper filter
Scale & timer

Step-by-Step Instructions:
Heat Water – Boil fresh water and let it sit for 30 seconds (aim for 93°C/200°F).
Prepare the Filter – Place a paper filter in the dripper and rinse it with hot water (removes papery taste).
Add Coffee & Bloom – Use a medium grind, ratio 1:15, and pour a small amount of water to bloom for 30 seconds.
Slow, Circular Pour – Pour in stages, using a circular motion for even extraction. Brew time: 3–4 minutes.
Enjoy Immediately – Swirl your cup and take in the aroma.

Pro Tip: The Pour-Over method highlights Kopi Luwak Coffee's floral, fruity, and caramel notes.`,
        image: "/images/pourover-method.webp",
        imageAlt: "Pour-Over brewing method",
      },
      {
        id: "espresso",
        title: "Espresso Method – For an Intense, Velvety Shot",
        content: `Espresso is a challenging but rewarding way to brew Kopi Luwak Coffee. The pressure-based extraction intensifies its aroma while keeping its smooth character.

What You'll Need:

Fine grind Kopi Luwak Coffee beans
Espresso machine
Tamper
Scale & timer

Step-by-Step Instructions:
Preheat Your Machine & Portafilter
Grind & Tamp – Use 18–20g of coffee and tamp firmly.
Extract the Shot – Aim for 25–30 seconds at 9 bars of pressure.
Check the Crema – A perfect shot has a golden crema with syrupy texture.

Pro Tip: Kopi Luwak Coffee espresso has a naturally sweet, chocolatey finish with zero bitterness.`,
        image: "/images/espresso-method.webp",
        imageAlt: "Espresso brewing method",
      },
      {
        id: "cold-brew",
        title: "Cold Brew Method – For a Silky, Low-Acid Drink",
        content: `If you love smooth, refreshing coffee, Cold Brew is a great way to enjoy Kopi Luwak.

What You'll Need:

Coarse grind Kopi Luwak beans
Large jar or cold brew maker
Filtered water
Fine mesh strainer or cheesecloth

Step-by-Step Instructions:
Combine Coffee & Water – Use a 1:8 ratio (e.g., 1 cup coffee to 8 cups water).
Steep for 12–24 Hours – Let it sit in the fridge overnight.
Strain & Serve Over Ice – Filter out the grounds and dilute if needed.

Pro Tip: Cold Brew enhances Kopi Luwak's natural sweetness and creates a silky, chocolatey, refreshing drink.`,
        image: "/images/coldbrew-method.webp",
        imageAlt: "Cold Brew method",
      },
    ],
  },
  {
    id: "expert-tips",
    title: "Expert Brewing Tips for the Best Kopi Luwak",
    content: `No matter how you brew, follow these golden rules for the perfect cup:

Use Fresh, Filtered Water – Coffee is 98% water; bad water = bad coffee.
Measure Coffee & Water Correctly – Stick to 1:15 to 1:16 ratios.
Grind Just Before Brewing – Prevents flavor loss.
Control Water Temperature – Stay within 90–96°C (195–205°F).
Allow Coffee to Bloom – Essential for even extraction.

Frequently Asked Questions (FAQ)
Q: What's the best grind size for Kopi Luwak?
A: It depends on the method! Coarse for French Press & Cold Brew, Medium for Pour-Over, Fine for Espresso.

Q: Can I use Kopi Luwak in a regular coffee maker?
A: Yes! Use a medium grind and follow a 1:15 coffee-to-water ratio.

Q: How should I store Kopi Luwak beans?
A: Keep them in an airtight container, away from light & moisture. Never freeze!

Final Thoughts: Brew Kopi Luwak Like a Pro
Brewing Kopi Luwak is an art and a science. Whether you prefer a rich French Press, a crisp Pour-Over, a bold Espresso, or a smooth Cold Brew, each method brings out unique aspects of its flavor.

Want the best results? Use high-quality, freshly roasted Kopi Luwak (like ours!). Check out our premium Kopi Luwak beans and start your perfect brew today!`,
    image: "/images/brewing-guide.png",
    imageAlt: "Expert brewing tips",
  },
]

export default function BrewingGuides() {
  const [activeSection, setActiveSection] = useState("why-brewing-matters")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({})

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Flatten the content array for tracking
      const flattenedContent = brewingContent.flatMap((section) =>
        section.children ? [section, ...section.children] : [section],
      )

      // Calculate which section is currently in view
      let currentSection = flattenedContent[0].id
      let maxVisibility = 0

      flattenedContent.forEach((section) => {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { top, bottom, height } = element.getBoundingClientRect()
          const visibleTop = Math.max(0, top < 0 ? 0 : top)
          const visibleBottom = Math.min(window.innerHeight, bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibilityPercentage = visibleHeight / height

          // Update progress for this section
          setScrollProgress((prev) => ({
            ...prev,
            [section.id]: Math.min(1, Math.max(0, (scrollPosition - element.offsetTop) / element.offsetHeight)),
          }))

          if (visibilityPercentage > maxVisibility) {
            maxVisibility = visibilityPercentage
            currentSection = section.id
          }
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pourover-method.webp"
            alt="Brewing guides for Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BREWING GUIDES</h1>
            <p className="text-lg md:text-xl text-gold-200">
              Master the art of brewing Kopi Luwak coffee with our expert guides and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Brewing Content */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Progress Bar */}
            <div className="md:col-span-3">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gold-100 mb-6">Brewing Methods</h3>
                <div className="space-y-4">
                  {brewingContent.map((section) => (
                    <div key={section.id}>
                      <div className="relative">
                        <button
                          onClick={() => {
                            const element = sectionRefs.current[section.id]
                            if (element) {
                              window.scrollTo({
                                top: element.offsetTop - 80,
                                behavior: "smooth",
                              })
                            }
                          }}
                          className={cn(
                            "text-left w-full transition-all duration-300 pl-4 border-l-2 py-2 text-sm",
                            activeSection === section.id
                              ? "text-gold-400 border-gold-400 font-medium"
                              : "text-gold-200 border-gold-900/30 hover:text-gold-300 hover:border-gold-300",
                          )}
                        >
                          {section.title}
                          {/* Progress bar for each section */}
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400"
                            style={{
                              height: `${(scrollProgress[section.id] || 0) * 100}%`,
                              opacity: activeSection === section.id ? 1 : 0.3,
                            }}
                          ></div>
                        </button>
                      </div>

                      {/* Child sections */}
                      {section.children &&
                        section.children.map((child) => (
                          <div key={child.id} className="relative ml-4 mt-2">
                            <button
                              onClick={() => {
                                const element = sectionRefs.current[child.id]
                                if (element) {
                                  window.scrollTo({
                                    top: element.offsetTop - 80,
                                    behavior: "smooth",
                                  })
                                }
                              }}
                              className={cn(
                                "text-left w-full transition-all duration-300 pl-4 border-l-2 py-1.5 text-sm",
                                activeSection === child.id
                                  ? "text-gold-400 border-gold-400 font-medium"
                                  : "text-gold-200 border-gold-900/30 hover:text-gold-300 hover:border-gold-300",
                              )}
                            >
                              {child.title}
                              {/* Progress bar for each section */}
                              <div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400"
                                style={{
                                  height: `${(scrollProgress[child.id] || 0) * 100}%`,
                                  opacity: activeSection === child.id ? 1 : 0.3,
                                }}
                              ></div>
                            </button>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/shop">
                    <Button variant="gold" size="sm" className="w-full text-sm">
                      Shop Kopi Luwak
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Continuous Scroll */}
            <div className="md:col-span-9 space-y-24">
              {brewingContent.map((section, index) => (
                <div key={section.id}>
                  <div ref={(el) => (sectionRefs.current[section.id] = el)} id={section.id} className="scroll-mt-24">
                    <ScrollReveal>
                      <SectionHeading title={section.title} className="mb-6" />

                      {/* Image for each section */}
                      {section.image && (
                        <div className="mb-6 relative h-[400px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                          <Image
                            src={section.image || "/placeholder.svg"}
                            alt={section.imageAlt}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                        </div>
                      )}

                      <div className="text-gold-200 text-base leading-relaxed space-y-4">
                        {section.content.split("\n\n").map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Render child sections */}
                  {section.children && (
                    <div className="space-y-16 mt-16 pl-4 border-l-2 border-gold-900/20">
                      {section.children.map((child) => (
                        <div
                          key={child.id}
                          ref={(el) => (sectionRefs.current[child.id] = el)}
                          id={child.id}
                          className="scroll-mt-24"
                        >
                          <ScrollReveal>
                            <SectionHeading title={child.title} className="mb-6" />

                            {/* Image for child section */}
                            {child.image && (
                              <div className="mb-6 relative h-[400px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                                <Image
                                  src={child.image || "/placeholder.svg"}
                                  alt={child.imageAlt}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                              </div>
                            )}

                            <div className="text-gold-200 text-base leading-relaxed space-y-4">
                              {child.content.split("\n\n").map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                              ))}
                            </div>
                          </ScrollReveal>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add a CTA at the end of the last section */}
                  {index === brewingContent.length - 1 && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button variant="gold" size="lg" className="text-sm px-6 py-4">
                        Shop Premium Kopi Luwak
                      </Button>
                      <Button variant="gold-outline" size="lg" className="text-sm px-6 py-4">
                        View Brewing Equipment
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
