"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GoldDivider } from "@/components/ui/gold-divider"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight, Award, Coffee, Leaf, Star } from "lucide-react"
import { motion } from "framer-motion"
import { VideoModal } from "@/components/ui/video-modal"

export default function Home() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean
    title: string
    url: string
  }>({
    isOpen: false,
    title: "",
    url: "",
  })

  const openVideoModal = (title: string, url: string) => {
    setVideoModal({
      isOpen: true,
      title,
      url,
    })
  }

  const closeVideoModal = () => {
    setVideoModal({
      ...videoModal,
      isOpen: false,
    })
  }

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="Lush Indonesian coffee plantation"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gold-100">
                DISCOVER THE RICH TASTE OF INDONESIA
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl mb-10 text-gold-200 leading-relaxed">
                Welcome to Original Luwak, where the ancient tradition of Luwak Coffee meets modern-day passion for the
                finest coffee in the world. Grown in the lush landscapes of Indonesia, our premium Civet Coffee offers
                an unparalleled taste that's rich, smooth, and unforgettable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/shop">
                <Button variant="gold" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Shop Now
                </Button>
              </Link>
              <Link href="/our-story">
                <Button variant="gold-outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full">
          <GoldDivider />
        </div>
      </section>

      {/* What is Luwak Coffee Section */}
      <section className="py-32 bg-navy-900 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-400 text-lg uppercase tracking-wider">LUWAK COFFEE</span>
              <SectionHeading
                title="WHAT IS LUWAK COFFEE?"
                subtitle="WORLD'S RAREST & MOST EXPENSIVE COFFEE"
                center
                className="mt-4"
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold-200 mb-8 leading-relaxed text-lg">
                  Luwak Coffee, also known as Wild Civet Coffee, is one of the rarest and most exquisite coffee
                  varieties in the world. This unique coffee is produced by the wild civet, a small mammal native to
                  Southeast Asia. The process starts when the wild civet eats the ripest coffee cherries, which then
                  pass through its digestive system. What makes this process so special is how the cherries are
                  fermented inside the civet's stomach, imparting a unique flavor profile that cannot be replicated
                  elsewhere.
                </p>
                <p className="text-gold-200 mb-10 leading-relaxed text-lg">
                  The beans are then carefully handpicked from the wild civet's droppings, cleaned, and roasted to
                  perfection, ensuring a cup of coffee that is truly extraordinary.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    variant="gold"
                    className="text-base px-6 py-5"
                    onClick={() =>
                      openVideoModal(
                        "Wild Luwak Coffee",
                        "https://drive.google.com/file/d/1Vc2vd2uGE3m6APPXqchoFMtpj9G9iY2X/preview",
                      )
                    }
                  >
                    Watch Wild Luwak Video
                  </Button>
                  <Button
                    variant="gold-outline"
                    className="text-base px-6 py-5"
                    onClick={() =>
                      openVideoModal(
                        "Luwak Foraging",
                        "https://drive.google.com/file/d/1ViEgA2xeB0PK5p56IFsuYIM3BHoFhUN2/preview",
                      )
                    }
                  >
                    Watch Foraging Video
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fTcYDNEonUi1V9OnwIvYGLbjFhl2G5.png"
                  alt="Civet eating coffee cherries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-32 bg-navy-950 relative">
        <GoldDivider className="transform rotate-180" />
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <SectionHeading
              title="THE ART OF LUWAK COFFEE PRODUCTION"
              subtitle="A TRADITION PASSED DOWN THROUGH GENERATIONS"
              center
              className="mb-20"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Step 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-900 p-10 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-16 h-16 flex items-center justify-center mb-8 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gold-100">NATURE'S PERFECT START — THE COFFEE CHERRY</h3>
                <p className="text-gold-300 flex-grow text-lg">
                  Our story begins with the coffee cherry. Grown in the rich volcanic soils of Sumatra, these cherries
                  are carefully nurtured by small, family-owned farms. The climate of Indonesia, with its year-round
                  warmth and rainfall, provides the perfect environment for the coffee trees to thrive.
                </p>
                <div className="mt-8 h-64 relative rounded-md overflow-hidden border border-gold-900/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
                    alt="Coffee plantation in Indonesia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-navy-900 p-10 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-16 h-16 flex items-center justify-center mb-8 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gold-100">
                  THE CIVET'S TOUCH — NATURE'S SECRET INGREDIENT
                </h3>
                <p className="text-gold-300 flex-grow text-lg">
                  Here's where the magic happens. Unlike traditional coffee, Luwak Coffee begins its journey not in a
                  coffee plantation but in the stomach of the civet. The civet, a small, cat-like creature, forages for
                  the most succulent, ripe cherries during its nightly adventures. The cherries pass through the civet's
                  digestive system, where the natural fermentation process begins.
                </p>
                <div className="mt-8 h-64 relative rounded-md overflow-hidden border border-gold-900/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YNVP64vSOQDZmdFMTXfYKMfItIUqht.png"
                    alt="Luwak coffee collection process"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-navy-900 p-10 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-16 h-16 flex items-center justify-center mb-8 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gold-100">THE COLLECTION — NATURE'S BOUNTY</h3>
                <p className="text-gold-300 flex-grow text-lg">
                  After the cherries have passed through the civet's digestive system, the beans are retrieved from the
                  droppings. Though the process may sound unusual, the beans are carefully handpicked by skilled
                  workers. It is at this stage that the magic of Luwak Coffee truly reveals itself.
                </p>
                <div className="mt-8 h-64 relative rounded-md overflow-hidden border border-gold-900/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4aoPG6d1rBOpsvrXfrrauSYz2NrKim.png"
                    alt="Processing Luwak coffee beans"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-navy-900 text-gold-100 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="WHY CHOOSE OUR LUWAK COFFEE?"
              subtitle="UNPARALLELED QUALITY AND TASTE"
              center
              className="mb-20"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-800/50 p-8 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Coffee className="h-14 w-14 mb-6 text-gold-400" />
                <h3 className="text-2xl font-bold mb-4 text-gold-100">Authentic Indonesian Flavor</h3>
                <p className="text-gold-300 text-lg">
                  Experience the true essence of Indonesian coffee with every sip. Our Civet Coffee offers a rich,
                  velvety flavor with notes of chocolate, caramel, and a hint of spice.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy-800/50 p-8 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Leaf className="h-14 w-14 mb-6 text-gold-400" />
                <h3 className="text-2xl font-bold mb-4 text-gold-100">Eco-Friendly and Sustainable</h3>
                <p className="text-gold-300 text-lg">
                  We work with local farmers who practice sustainable farming methods, ensuring that the production of
                  Luwak Coffee benefits both the environment and the communities that rely on it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-navy-800/50 p-8 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Award className="h-14 w-14 mb-6 text-gold-400" />
                <h3 className="text-2xl font-bold mb-4 text-gold-100">Rare and Exclusive</h3>
                <p className="text-gold-300 text-lg">
                  Due to its labor-intensive production process, Luwak Coffee is a rare treasure. Each cup is an
                  indulgence that connects you with Indonesia's rich coffee heritage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-navy-800/50 p-8 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <div className="h-14 w-14 mb-6 text-gold-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-gift"
                  >
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold-100">Perfect for Gifting</h3>
                <p className="text-gold-300 text-lg">
                  Our beautifully packaged Luwak Coffee makes a perfect gift for coffee connoisseurs or anyone who
                  appreciates high-quality, unique coffee.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Taste Section */}
      <section className="py-32 bg-navy-950 relative">
        <GoldDivider className="transform rotate-180" />
        <div className="container mx-auto px-4 pt-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[600px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg"
                  alt="Cup of Luwak coffee"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <SectionHeading title="HOW LUWAK COFFEE TASTES:" subtitle="AN EXTRAORDINARY SENSORY EXPERIENCE" />
                <p className="text-gold-200 mb-8 leading-relaxed text-lg">
                  Luwak Coffee is unlike any other coffee you've tasted. It has a smooth, mellow body with an incredible
                  depth of flavor. The natural fermentation process inside the civet imparts a low acidity and smooth
                  mouthfeel, making it easy to drink and perfect for any time of day.
                </p>
                <p className="text-gold-200 mb-8 leading-relaxed text-lg">
                  When you brew a cup of Luwak Coffee, expect to experience:
                </p>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-center text-gold-200 text-lg">
                    <Star className="h-6 w-6 mr-4 text-gold-400 flex-shrink-0" />A rich, full-bodied taste
                  </li>
                  <li className="flex items-center text-gold-200 text-lg">
                    <Star className="h-6 w-6 mr-4 text-gold-400 flex-shrink-0" />
                    Notes of chocolate, caramel, and a touch of earthy sweetness
                  </li>
                  <li className="flex items-center text-gold-200 text-lg">
                    <Star className="h-6 w-6 mr-4 text-gold-400 flex-shrink-0" />A remarkably smooth finish, with no
                    bitter aftertaste
                  </li>
                </ul>
                <p className="text-gold-200 leading-relaxed text-lg">
                  Whether you enjoy it black or with milk, every sip of our Luwak Coffee is a reminder of the
                  dedication, care, and craftsmanship that go into creating this one-of-a-kind brew.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* Product Showcase */}
      <section className="py-32 bg-navy-950 relative">
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <SectionHeading
              title="OUR PREMIUM PRODUCTS"
              subtitle="CRAFTED WITH PASSION AND EXPERTISE"
              center
              className="mb-20"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-900 rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-transform duration-300 hover:translate-y-[-5px] group">
                <div className="relative h-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Luwak%20Liar%20%28Wild%20Civet%29.JPG-EERl6UAJ8IqW1H4XmsAFvKB4gq6KUH.jpeg"
                    alt="Artgift Standing Pouch"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gold-100">Artgift Standing Pouch</h3>
                  <p className="text-gold-400 font-bold mb-6 text-2xl">$49.99</p>
                  <Link href="/shop/product/1">
                    <Button variant="gold" className="w-full py-5 text-base">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Product 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-navy-900 rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-transform duration-300 hover:translate-y-[-5px] group">
                <div className="relative h-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png"
                    alt="Gift Set"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gold-100">Gift Set</h3>
                  <p className="text-gold-400 font-bold mb-6 text-2xl">$89.99</p>
                  <Link href="/shop/product/2">
                    <Button variant="gold" className="w-full py-5 text-base">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Product 3 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-navy-900 rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-transform duration-300 hover:translate-y-[-5px] group">
                <div className="relative h-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/processing_kopi_luwak_hd-1bgEWvwYZWf6u5WtT7vLmE3FWlyKPq.png"
                    alt="Aceh Craft Gift Set"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gold-100">Aceh Craft Gift Set</h3>
                  <p className="text-gold-400 font-bold mb-6 text-2xl">$79.99</p>
                  <Link href="/shop/product/3">
                    <Button variant="gold" className="w-full py-5 text-base">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 text-center">
            <ScrollReveal>
              <Link href="/shop">
                <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-navy-900 text-gold-100">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">TASTE THE LEGACY OF LUWAK COFFEE</h2>
            <p className="max-w-3xl mx-auto mb-10 text-gold-200 text-xl">
              Ready to experience coffee like never before? Taste the rich, unique flavor of Indonesia's most exclusive
              coffee — Luwak Coffee.
            </p>
            <Link href="/shop">
              <Button variant="gold" size="lg" className="text-lg px-10 py-6">
                ORDER NOW
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        title={videoModal.title}
        videoUrl={videoModal.url}
      />
    </div>
  )
}
