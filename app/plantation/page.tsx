"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

const plantationContent = [
  {
    id: "intro",
    title: "Where Rare Flavor Meets Real Sustainability",
    content: `Imagine walking through a misty, emerald-green highland as the sun rises over the rolling hills of Aceh, Takengon. The air carries a rich, earthy aroma. Somewhere between the rustling coffee trees and the morning chatter of wildlife, a wild civet has just completed its night's journey—choosing only the ripest, most flavorful cherries to eat. This is where our Kopi Luwak plantation comes to life.

That's where our story begins.

At Originalluwak.com, we don't just produce Kopi Luwak—we protect a tradition rooted in nature, ethics, and excellence. Our 1,200-acre organic-certified plantation is not a factory farm. It's a living, breathing ecosystem where Paradoxurus hermaphroditus, the Asian palm civet, roams freely, selecting coffee cherries through an instinctive selection process that no machine could ever replicate.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bTtLnM90TpxMHkzzDsbSFIn274nO3z.png",
    imageAlt: "Kopi Luwak Plantation",
    imageAfterFirstParagraph: true,
  },
  {
    id: "truly-wild",
    title: "What Makes Our Kopi Luwak Truly Wild and Ethical?",
    content: ``,
    children: [
      {
        id: "wild-sourced",
        title: "100% Wild-Sourced, No Cages. Ever.",
        content: `We are proud to be among the few producers who do not use caged civets. Instead, we preserve their natural habitat. That means:

No battery cages or force-feeding
No stress behaviors or high mortality rates
No exploitation—only coexistence
With rising awareness around animal welfare, many consumers are asking: "Is my luxury coffee causing harm?" At Originalluwak.com, the answer is a confident no.`,
      },
      {
        id: "collection-teams",
        title: "Dedicated Collection Teams With a Human Touch",
        content: `Our beans are collected by three in-house teams, totaling 18 skilled workers who live and work on the land. We never outsource. Why? Because quality control begins with trust. Each bean collected from the civet droppings is sorted with care, maintaining a rigorous standard that respects both nature and craftsmanship.`,
      },
    ],
  },
  {
    id: "science-flavor",
    title: "The Science Behind the Flavor: Nature Does the Work",
    content: ``,
    children: [
      {
        id: "fermentation",
        title: "Fermentation and Digestive Enzymes",
        content: `As the civet digests the cherries, fermentation occurs naturally in its gut. This unique process breaks down bitterness and enhances smoothness, creating the signature flavor profile of Kopi Luwak:

Low acidity
Chocolate notes
Earthy flavor
Aroma that's unforgettable
These transformations are boosted by digestive enzymes that act on the beans, improving mouthfeel and complexity. Then comes the Maillard Reaction during roasting—unlocking even deeper layers of taste.`,
      },
    ],
  },
  {
    id: "quality",
    title: "Quality, Safety, and Authenticity: No Compromise",
    content: `Only about 50% of the beans collected pass our stringent quality checks. We clean, hull, and subject every batch to ultraviolet treatment to ensure zero bacterial contamination. It's more than just hygiene—it's peace of mind in every cup.

And yes, every batch is legally certified and traceable to our own plantation. No fraudulent labeling. No imitations. Just real, verified Kopi Luwak from Aceh.`,
  },
  {
    id: "visit",
    title: "Visit Us: A Plantation Experience Like No Other",
    content: `We invite you to witness this harmony yourself. Stroll through our lush coffee forests, meet the people behind the process, and experience how ethical, luxury coffee is made.

At Originalluwak.com, each cup tells a story of:

Sustainability
Respect for wildlife
A deep-rooted Indonesian heritage`,
  },
  {
    id: "final-sip",
    title: "The Final Sip: Are You Drinking the Real Thing?",
    content: `There's more to Kopi Luwak than just rarity and price. There's integrity. If you value coffee that respects both nature and nuance, then you've found your perfect brew.

Ready to taste the difference that ethics make?

Explore more at Originalluwak.com and join the movement toward a more sustainable, transparent luxury coffee industry.`,
  },
]

export default function Plantation() {
  const [activeSection, setActiveSection] = useState("intro")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({})

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Flatten the content array for tracking
      const flattenedContent = plantationContent.flatMap((section) =>
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

  // Function to render content with image after first paragraph if specified
  const renderContent = (section: (typeof plantationContent)[0]) => {
    if (!section.content) return null

    const paragraphs = section.content.split("\n\n")

    if (section.imageAfterFirstParagraph && section.image && paragraphs.length > 0) {
      return (
        <>
          <p key="first-paragraph" className="mb-6">
            {paragraphs[0]}
          </p>

          <div className="mb-6 relative h-[400px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
            <Image
              src={section.image || "/placeholder.svg"}
              alt={section.imageAlt || section.title}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
          </div>

          {paragraphs.slice(1).map((paragraph, idx) => (
            <p key={idx + 1} className="mb-4">
              {paragraph}
            </p>
          ))}
        </>
      )
    }

    return paragraphs.map((paragraph, idx) => (
      <p key={idx} className="mb-4">
        {paragraph}
      </p>
    ))
  }

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plantation.png"
            alt="Luwak coffee plantation"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR PLANTATION</h1>
            <p className="text-lg md:text-xl text-gold-200">
              Discover the sustainable and ethical practices behind our premium Kopi Luwak coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Plantation Content */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Progress Bar */}
            <div className="md:col-span-3">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gold-100 mb-6">Plantation Journey</h3>
                <div className="space-y-4">
                  {plantationContent.map((section) => (
                    <div key={section.id}>
                      {section.title && (
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
                      )}

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
              {plantationContent.map((section, index) => (
                <div key={section.id}>
                  {section.title && (
                    <div ref={(el) => (sectionRefs.current[section.id] = el)} id={section.id} className="scroll-mt-24">
                      <ScrollReveal>
                        <SectionHeading title={section.title} className="mb-6" />
                        <div className="text-gold-200 text-base leading-relaxed">{renderContent(section)}</div>
                      </ScrollReveal>
                    </div>
                  )}

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
                            <div className="text-gold-200 text-base leading-relaxed">{renderContent(child)}</div>
                          </ScrollReveal>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add a CTA at the end of the last section */}
                  {index === plantationContent.length - 1 && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button variant="gold" size="lg" className="text-sm px-6 py-4">
                        Shop Our Coffee
                      </Button>
                      <Button variant="gold-outline" size="lg" className="text-sm px-6 py-4">
                        Book a Plantation Tour
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
