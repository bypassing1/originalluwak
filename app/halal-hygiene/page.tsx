"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

const halalHygieneContent = [
  {
    id: "intro",
    title: "The Halal and Hygiene Status of Kopi Luwak",
    content: `Picture yourself enjoying a cup of Kopi Luwak, the world's most expensive coffee, known for its unique flavor and intriguing production process. As you take that first sip, the rich, smooth taste envelops your senses, and you can't help but feel a sense of luxury.

But as you savor this exclusive brew, a question lingers in the back of your mind: is kopi luwak halal? For many coffee enthusiasts, understanding the ethical implications of their favorite drink is just as important as the taste itself.

With its growing popularity, Kopi Luwak has become a topic of discussion not only for its flavor but also for its production methods. Let's delve into the fascinating world of Kopi Luwak to uncover the truth behind its halal or haram status and hygiene practices.`,
  },
  {
    id: "what-is-kopi-luwak",
    title: "What is Kopi Luwak?",
    content: `Kopi Luwak, often referred to as civet coffee, originates from the lush coffee plantations of Indonesia. This unique coffee is celebrated not just for its taste but also for its extraordinary production process. The journey of Kopi Luwak begins with the Asian palm civet, a small, nocturnal mammal known for its discerning palate. These civets roam the plantations, selecting only the ripest coffee cherries to eat.

As the cherries pass through the civet's digestive system, a fascinating transformation occurs. The beans undergo a natural fermentation process, which is believed to enhance their flavor profile. Once the civet has digested the cherries, the beans are excreted, collected, and meticulously cleaned. This labor-intensive process is what makes Kopi Luwak one of the rarest and most expensive coffees in the world.

When brewed, Kopi Luwak offers a smooth, rich flavor with a hint of earthiness and a delightful aroma that captivates coffee lovers. Imagine the first time you take a sip—it's like a warm hug on a chilly morning, enveloping you in comfort and indulgence. But while the taste is undeniably intriguing, the method of production raises important questions about its halal status and hygiene, which we will explore further.

As you consider trying Kopi Luwak, you might wonder: what makes this coffee so special, and is it worth the price? Let's dive deeper into the halal status of Kopi Luwak and what it means for your coffee experience.`,
  },
  {
    id: "halal-status",
    title: "What Experts Say About the Halal Status of Kopi Luwak",
    content: `The question of whether Kopi Luwak is halal has sparked considerable debate among coffee enthusiasts and religious scholars alike. In Islam, the term halal refers to what is permissible or lawful, extending to food and drink. Given the unique production process of Kopi Luwak, which involves the digestion and excretion of coffee cherries by the Asian palm civet, many people are understandably concerned about its halal status.

From a religious perspective, opinions vary widely. Some scholars argue that since the coffee beans are thoroughly cleaned and no longer retain any impurities after processing, they can be considered halal. They emphasize that the beans undergo rigorous cleaning and quality control, ensuring that any potential contaminants are removed. This viewpoint suggests that the end product is safe and permissible for consumption.

However, other scholars maintain that the involvement of an animal in the production process raises significant concerns. They argue that the very nature of how Kopi Luwak is produced could render it non-halal, as it involves an animal's digestive system. This divergence in opinion highlights the complexity of interpreting religious guidelines in modern contexts.

Yet, the debate continues, leaving many to ponder: Can a coffee processed through an animal truly be considered halal? As with many religious matters, the answer often depends on individual beliefs and interpretations.

Kopi Luwak is made from coffee beans that are eaten and then excreted by the civet. The Majelis Ulama Indonesia (MUI) issued a halal fatwa for Kopi Luwak (Fatwa No. 07 Year 2010) on July 20, 2010. Key points supporting its halal status include:

Quranic References: The Quran emphasizes consuming what is halal and good, urging believers to eat from what is lawful and to be grateful to Allah (Q.S. Al-Baqarah [2]: 168, 172; Q.S. Al-Maidah [5]: 88).
Hadith Guidance: The Prophet Muhammad (peace be upon him) stated that what is halal is what Allah has permitted in His Book, and what is haram is what He has forbidden (H.R. At-Turmudzi and Ibn Majah).
Fiqh Principles: The general rule is that something beneficial is permissible, while something harmful is forbidden. If the coffee beans remain intact and can grow if planted, they are considered pure after proper cleaning.
Kopi Luwak, derived from beans that can still grow when planted, is classified as mutanajjis (contaminated but not impure) and is halal after purification. Thus, consuming, producing, and selling Kopi Luwak is permissible.

It's important to note that while the MUI fatwa serves as a guideline, no Kopi Luwak producer has yet obtained a Halal Certificate, as this requires meeting specific criteria.

At OriginalLuwak.com, we ensure that our Kopi Luwak meets these halal standards, providing you with a product that is both ethically sourced and delicious.`,
  },
  {
    id: "hygiene-concerns",
    title: "Hygiene Concerns: Is Your Kopi Luwak Clean?",
    content: `When it comes to Kopi Luwak, hygiene is a critical factor that cannot be overlooked. The unique production process, which involves the digestion of coffee cherries by the Asian palm civet, raises legitimate concerns about cleanliness. After all, the idea of consuming coffee beans that have passed through an animal's digestive system can be unsettling for many.`,
    children: [
      {
        id: "production-process",
        title: "Production Process and Hygiene Practices",
        content: `The journey of Kopi Luwak from cherry to cup involves several steps, each of which plays a vital role in ensuring the final product is safe for consumption. After the civet eats the cherries, the beans are excreted and collected. Here's where hygiene practices come into play:

Thorough Cleaning: Once collected, the beans undergo a rigorous cleaning process. They are washed multiple times to remove any residual impurities, dirt, or contaminants. This step is crucial in ensuring that the beans are hygienic before they are processed further.
Quality Control: Reputable producers implement strict quality control measures. This includes inspecting the beans for any signs of spoilage or contamination. Only the highest quality beans make it to the roasting stage.
Roasting: The roasting process itself also contributes to hygiene. High temperatures during roasting help eliminate any remaining bacteria or pathogens, making the coffee safe to drink.`,
      },
      {
        id: "key-hygiene-practices",
        title: "Key Hygiene Practices to Look For",
        content: `When purchasing Kopi Luwak, it's essential to choose brands that prioritize hygiene. Here are some key practices to look for:

Certification: Look for certifications from health and safety organizations that verify the cleanliness of the production process.
Transparency: Reputable brands should provide information about their sourcing and cleaning methods. Don't hesitate to ask questions about how the coffee is produced.
Reputable Sources: Purchase Kopi Luwak from well-known, trusted suppliers who have a track record of ethical and hygienic practices.`,
      },
      {
        id: "quality-assurance",
        title: "The Importance of Quality Assurance",
        content: `While the unique production method of Kopi Luwak can raise eyebrows, many producers are committed to maintaining high hygiene standards. By choosing brands that emphasize cleanliness and ethical practices, you can enjoy your cup of Kopi Luwak with peace of mind.

As you consider indulging in this luxurious coffee, remember that understanding the hygiene practices behind it is just as important as savoring its rich flavor. After all, a great cup of coffee should not only taste good but also be safe and ethically produced.`,
      },
    ],
  },
  {
    id: "ethical-considerations",
    title: "Ethical Considerations: The Bigger Picture",
    content: `As you explore the world of Kopi Luwak, it's essential to consider the ethical implications surrounding its production. While the unique flavor and luxurious reputation of this coffee may entice you, the methods used to produce it can raise significant concerns about animal welfare and sustainability.`,
    children: [
      {
        id: "animal-welfare",
        title: "Animal Welfare Concerns",
        content: `The production of Kopi Luwak has faced criticism due to the treatment of the civets involved in the process. In some cases, civets are kept in captivity under poor conditions, where they are fed a diet solely of coffee cherries. This not only affects their health and well-being but also raises ethical questions about the exploitation of animals for profit.

Caged Civets: Many producers keep civets in small cages, depriving them of their natural behaviors and habitats. This confinement can lead to stress and health issues for the animals.
Natural Foraging: In contrast, ethical producers allow civets to roam freely in their natural environment, where they can choose the ripest cherries. This not only benefits the animals but also enhances the quality of the coffee.`,
      },
      {
        id: "sustainable-practices",
        title: "Sustainable Practices",
        content: `In response to growing concerns about animal welfare, some producers have adopted more sustainable and ethical practices. These practices not only benefit the civets but also contribute to the overall quality of Kopi Luwak. Here are some key aspects of sustainable Kopi Luwak production:

Wild Harvesting: Ethical producers focus on sourcing beans from wild civets rather than those kept in captivity. This approach ensures that the civets can forage naturally, leading to healthier animals and better-quality coffee.
Organic Farming: Many sustainable Kopi Luwak producers use organic farming methods, avoiding harmful pesticides and chemicals. This not only protects the environment but also results in a cleaner, more flavorful cup of coffee.
Community Support: Some brands invest in local communities, providing fair wages and supporting sustainable farming practices. This creates a positive impact on both the environment and the people involved in the coffee production process.`,
      },
      {
        id: "responsible-producer",
        title: "OriginalLuwak.com: A Responsible Producer",
        content: `Original Luwak sources the beans from wild civets in the forests of Sumatra – Aceh. We prioritizes animal welfare by ensuring that the civets are free to roam and forage naturally. Also engage in sustainable farming practices, promoting biodiversity and protecting the local ecosystem. By choosing us, you can enjoy Kopi Luwak with the knowledge that we are supporting ethical practices.

As you consider indulging in Kopi Luwak, it's crucial to reflect on the ethical implications of your coffee choices. By supporting brands that prioritize animal welfare and sustainable practices, you can enjoy this luxurious coffee while contributing to a more ethical and responsible coffee industry.

Ultimately, the journey of Kopi Luwak is not just about savoring a unique flavor; it's about making informed decisions that align with your values. As you sip your cup of Kopi Luwak, think about the impact of your choices on the environment and the animals involved in its production.`,
      },
    ],
  },
  {
    id: "before-purchasing",
    title: "Before Purchasing Kopi Luwak",
    content: `As you consider indulging in Kopi Luwak, it's crucial to reflect on the ethical implications of your coffee choices. By choosing to buy Kopi Luwak Coffee from OriginalLuwak.com, you support a brand that prioritizes animal welfare and sustainable practices. This allows you to enjoy this luxurious coffee while contributing to a more ethical and responsible coffee industry.

We have originalluwak.com have the Halal Certificate for kopi luwak coffee, also we have the certification from Asosiasi Eksportir dan Industri Kopi Indonesia (AEKI) Indonesia Coffee Association that our Luwak Coffee are from Wild Civet or Wild Luwak.

Ultimately, the journey of Kopi Luwak is not just about savoring a unique flavor; it's about making informed decisions that align with your values. As you sip your cup of Kopi Luwak from OriginalLuwak.com, think about the positive impact of your choices on the environment and the animals involved in its production.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png",
    imageAlt: "Kopi Luwak Wild Certificate",
  },
]

export default function HalalHygiene() {
  const [activeSection, setActiveSection] = useState("intro")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({})

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Flatten the content array for tracking
      const flattenedContent = halalHygieneContent.flatMap((section) =>
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
            src="/images/halal-hygiene.png"
            alt="Halal and hygiene practices for Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">HALAL & HYGIENE</h1>
            <p className="text-lg md:text-xl text-gold-200">
              Understanding the halal status, hygiene practices, and ethical considerations of Kopi Luwak coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Halal & Hygiene Content */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Progress Bar */}
            <div className="md:col-span-3">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gold-100 mb-6">Halal & Hygiene Topics</h3>
                <div className="space-y-4">
                  {halalHygieneContent.map((section) => (
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
              {halalHygieneContent.map((section, index) => (
                <div key={section.id}>
                  <div ref={(el) => (sectionRefs.current[section.id] = el)} id={section.id} className="scroll-mt-24">
                    <ScrollReveal>
                      <SectionHeading title={section.title} className="mb-6" />

                      {/* Image only for the last section */}
                      {section.image && (
                        <div className="mb-6 relative h-[400px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                          <Image
                            src={section.image || "/placeholder.svg"}
                            alt={section.imageAlt || section.title}
                            fill
                            className="object-contain"
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
                  {index === halalHygieneContent.length - 1 && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button variant="gold" size="lg" className="text-sm px-6 py-4">
                        Shop Certified Kopi Luwak
                      </Button>
                      <Button variant="gold-outline" size="lg" className="text-sm px-6 py-4">
                        Learn More About Our Practices
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
