"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GoldDivider } from "@/components/ui/gold-divider"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

const storyContent = [
  {
    id: "welcome",
    title: "Welcome to Original Luwak",
    content: `Hey there! Welcome to Original Luwak, where every cup of coffee tells a story. Here, we celebrate the incredible journey of Kopi Luwak, a coffee that's not just a drink but an experience.

Our adventure began in 2008, but the roots of our passion for coffee run deep. We're proud to be part of FNB Coffee, a company that has been in the coffee game since 1999. What makes our coffee so special? It all starts with the wild luwak, or Asian Palm Civet, which plays a vital role in creating this unique brew. Sourced from the stunning mountains of Aceh, our Arabica beans are carefully selected to ensure you get the best of the best.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fTcYDNEonUi1V9OnwIvYGLbjFhl2G5.png",
    imageAlt: "Civet eating coffee cherries",
  },
  {
    id: "roots",
    title: "Our Roots",
    content: `At Original Luwak, our story is deeply intertwined with the rich heritage of Indonesia. Founded in 2008, we set out to share the magic of Kopi Luwak with the world. But our journey doesn't start there; it's rooted in the traditions and culture of coffee that have been cherished for generations.

Being part of FNB Coffee, which has been thriving in the coffee industry since 1999, gives us a unique perspective. We've learned from the best and are committed to upholding the highest standards in everything we do. Kopi Luwak is more than just a coffee; it's a symbol of the artistry and dedication that goes into every bean.

The process begins in the lush mountains of Aceh, where the wild luwak roams freely. These fascinating creatures play a crucial role in our coffee's unique flavor profile. They select the ripest coffee cherries, and as they digest them, the beans undergo a natural fermentation process that enhances their taste. This traditional method not only creates a one-of-a-kind coffee but also supports sustainable practices that benefit local farmers and the environment.

We're proud to carry on this legacy and share the story of Kopi Luwak with you. It's a journey of passion, culture, and a deep respect for nature that we invite you to be a part of.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png",
    imageAlt: "Coffee plantation in Indonesia",
  },
  {
    id: "magic",
    title: "The Magic of Kopi Luwak",
    content: `What makes Kopi Luwak so special? It's all about the unique process that transforms ordinary coffee beans into an extraordinary experience. The journey begins with the wild luwak, or Asian Palm Civet, who plays a vital role in crafting this exceptional brew.

In the lush mountains of Aceh, these clever little creatures roam freely, selecting only the ripest coffee cherries. As they enjoy their feast, the cherries pass through their digestive system, where a natural fermentation process begins. This is where the magic happens! The enzymes in the luwak's stomach break down the proteins in the beans, resulting in a smoother, less acidic flavor profile that coffee lovers crave.

Once the beans are collected from the luwak's droppings, they undergo a meticulous cleaning and roasting process. We take great care to ensure that every batch meets our high standards of quality. The result? A cup of Kopi Luwak that's rich, aromatic, and bursting with flavor—truly a coffee experience like no other.

We're passionate about sharing this unique journey with you, and we believe that every sip of our Kopi Luwak connects you to the heart of Indonesia. It's not just coffee; it's a story of nature, tradition, and the artistry that goes into every cup.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YNVP64vSOQDZmdFMTXfYKMfItIUqht.png",
    imageAlt: "Civet foraging coffee cherries at night",
  },
  {
    id: "resilience",
    title: "A Journey of Resilience",
    content: `Like any great story, ours has had its ups and downs. Since 2018, we faced some challenges that tested our resolve and passion for Kopi Luwak. But instead of giving up, we saw this as an opportunity to reinvent ourselves and reconnect with our roots.

Rebranding Original Luwak under the FNB Coffee umbrella was a pivotal moment for us. With years of experience in the coffee industry, we knew we had the knowledge and passion to bring this unique product back to life. We're not just reviving a brand; we're reigniting a love for Kopi Luwak and sharing its incredible story with coffee enthusiasts around the world.

Our team is dedicated to ensuring that every cup of Kopi Luwak reflects our commitment to quality and sustainability. We've embraced new marketing strategies and innovative approaches to reach coffee lovers who appreciate the finer things in life. It's about more than just coffee; it's about creating a community of people who share our passion for this extraordinary brew.

As we move forward, we're excited to share our journey with you. Together, we can celebrate the resilience of Original Luwak and the rich flavors that make our coffee truly special.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4aoPG6d1rBOpsvrXfrrauSYz2NrKim.png",
    imageAlt: "Luwak coffee beans in hand",
  },
  {
    id: "future",
    title: "Looking Ahead",
    content: `As we look to the future, our vision for Original Luwak is brighter than ever. We're committed to not only delivering the finest Kopi Luwak but also to fostering a deeper connection with our customers and the coffee community.

Quality and sustainability are at the heart of everything we do. We're dedicated to sourcing our beans responsibly and supporting local farmers who share our values. By prioritizing ethical practices, we ensure that every cup of Kopi Luwak you enjoy contributes to a positive impact on the environment and the communities we work with.

We're also excited to explore new horizons. Our goal is to expand our reach and introduce Kopi Luwak to coffee lovers around the globe. Whether you're a seasoned connoisseur or new to the world of specialty coffee, we want you to experience the magic of our brew.

Join us on this exciting journey! We invite you to be part of our story as we continue to innovate and share the rich flavors of Kopi Luwak. Together, let's celebrate the artistry of coffee and the passion that drives us every day.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-61KJYnmD8Fv9bRagg8XFOSPkwud3uB.png",
    imageAlt: "Roasted Luwak coffee beans",
  },
  {
    id: "connect",
    title: "Let's Connect!",
    content: `We're thrilled to have you on this journey with us at Original Luwak! Your love for coffee fuels our passion, and we can't wait to share more of our story with you.

Explore our website to discover the rich flavors of Kopi Luwak and find the perfect brew for your taste. Whether you're looking to indulge in a luxurious cup at home or share it with friends, we've got something special for you.

Don't forget to follow us on social media! Join our community of coffee enthusiasts, where we share behind-the-scenes glimpses, brewing tips, and exciting updates. We'd love to hear your thoughts and experiences with our coffee, so feel free to tag us and share your moments.

And if you want to stay in the loop, subscribe to our newsletter for exclusive offers, new product launches, and stories from the heart of Indonesia.

Thank you for being part of the Original Luwak family. Together, let's celebrate the beauty of coffee and the connections it creates!`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nI5lssOsB76tKQBqdJ1sDcpo1M3ULc.png",
    imageAlt: "Cup of brewed Luwak coffee",
  },
]

export default function OurStory() {
  const [activeSection, setActiveSection] = useState("welcome")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({})

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Calculate which section is currently in view
      let currentSection = storyContent[0].id
      let maxVisibility = 0

      storyContent.forEach((section) => {
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
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="The story of Original Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">OUR STORY</h1>
            <p className="text-xl md:text-2xl text-gold-200">
              Discover the journey behind Original Luwak and our passion for creating the world's most exclusive coffee.
            </p>
          </div>
        </div>
        <div className="w-full">
          <GoldDivider />
        </div>
      </section>

      {/* Story Content */}
      <section className="py-32 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left Progress Bar */}
            <div className="md:col-span-3">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold text-gold-100 mb-8">Our Journey</h3>
                <div className="space-y-6">
                  {storyContent.map((section) => (
                    <div key={section.id} className="relative">
                      <button
                        onClick={() => {
                          const element = sectionRefs.current[section.id]
                          if (element) {
                            window.scrollTo({
                              top: element.offsetTop - 100,
                              behavior: "smooth",
                            })
                          }
                        }}
                        className={cn(
                          "text-left w-full transition-all duration-300 pl-6 border-l-2 py-2",
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
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Continuous Scroll */}
            <div className="md:col-span-9 space-y-32">
              {storyContent.map((section) => (
                <div
                  key={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <ScrollReveal>
                    <SectionHeading title={section.title} className="mb-8" />

                    {/* Image for each section */}
                    <div className="mb-8 relative h-[500px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                    </div>

                    <div className="text-gold-200 text-lg leading-relaxed space-y-6">
                      {section.content.split("\n\n").map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Connect section has special buttons */}
                    {section.id === "connect" && (
                      <div className="mt-8 flex flex-wrap gap-6">
                        <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                          Shop Our Coffee
                        </Button>
                        <Button variant="gold-outline" size="lg" className="text-lg px-8 py-6">
                          Subscribe to Newsletter
                        </Button>
                        <div className="w-full mt-8 flex gap-6">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-14 h-14 rounded-full border-gold-900/30 text-gold-400 hover:text-gold-300 hover:border-gold-300"
                          >
                            <Facebook className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-14 h-14 rounded-full border-gold-900/30 text-gold-400 hover:text-gold-300 hover:border-gold-300"
                          >
                            <Instagram className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-14 h-14 rounded-full border-gold-900/30 text-gold-400 hover:text-gold-300 hover:border-gold-300"
                          >
                            <Twitter className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
