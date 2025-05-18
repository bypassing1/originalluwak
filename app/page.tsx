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
import { NavigationGrid } from "@/components/navigation-grid"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gold-100">{t("home.hero.title")}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl mb-8 text-gold-200 leading-relaxed">{t("home.hero.subtitle")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/shop">
                <Button variant="gold" size="lg" className="text-base px-6 py-5 w-full sm:w-auto">
                  {t("home.hero.shop_now")}
                </Button>
              </Link>
              <Link href="/our-story">
                <Button variant="gold-outline" size="lg" className="text-base px-6 py-5 w-full sm:w-auto">
                  {t("home.hero.our_story")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <NavigationGrid />

      {/* What is Luwak Coffee Section */}
      <section className="py-24 bg-navy-900 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-400 text-base uppercase tracking-wider">{t("home.what_is.pre_title")}</span>
              <SectionHeading
                title={t("home.what_is.title")}
                subtitle={t("home.what_is.subtitle")}
                center
                className="mt-3"
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold-200 mb-6 leading-relaxed text-base">{t("home.what_is.description1")}</p>
                <p className="text-gold-200 mb-8 leading-relaxed text-base">{t("home.what_is.description2")}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="gold"
                    className="text-sm px-5 py-4"
                    onClick={() =>
                      openVideoModal(
                        "Wild Luwak Coffee",
                        "https://drive.google.com/file/d/1Vc2vd2uGE3m6APPXqchoFMtpj9G9iY2X/preview",
                      )
                    }
                  >
                    {t("home.what_is.watch_wild")}
                  </Button>
                  <Button
                    variant="gold-outline"
                    className="text-sm px-5 py-4"
                    onClick={() =>
                      openVideoModal(
                        "Luwak Foraging",
                        "https://drive.google.com/file/d/1ViEgA2xeB0PK5p56IFsuYIM3BHoFhUN2/preview",
                      )
                    }
                  >
                    {t("home.what_is.watch_foraging")}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-[450px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
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
      <section className="py-24 bg-navy-950 relative">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 pt-6">
          <ScrollReveal>
            <SectionHeading
              title={t("home.production.title")}
              subtitle={t("home.production.subtitle")}
              center
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-900 p-8 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gold-100">NATURE'S PERFECT START — THE COFFEE CHERRY</h3>
                <p className="text-gold-300 flex-grow text-base">
                  Our story begins with the coffee cherry. Grown in the rich volcanic soils of Sumatra, these cherries
                  are carefully nurtured by small, family-owned farms. The climate of Indonesia, with its year-round
                  warmth and rainfall, provides the perfect environment for the coffee trees to thrive.
                </p>
                <div className="mt-6 h-56 relative rounded-md overflow-hidden border border-gold-900/30">
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
              <div className="bg-navy-900 p-8 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gold-100">THE CIVET'S TOUCH — NATURE'S SECRET INGREDIENT</h3>
                <p className="text-gold-300 flex-grow text-base">
                  Here's where the magic happens. Unlike traditional coffee, Luwak Coffee begins its journey not in a
                  coffee plantation but in the stomach of the civet. The civet, a small, cat-like creature, forages for
                  the most succulent, ripe cherries during its nightly adventures. The cherries pass through the civet's
                  digestive system, where the natural fermentation process begins.
                </p>
                <div className="mt-6 h-56 relative rounded-md overflow-hidden border border-gold-900/30">
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
              <div className="bg-navy-900 p-8 rounded-lg shadow-lg border border-gold-900/30 flex flex-col h-full transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-gold-900/10">
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-md shadow-gold-900/20">
                  <span className="text-navy-950 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gold-100">THE COLLECTION — NATURE'S BOUNTY</h3>
                <p className="text-gold-300 flex-grow text-base">
                  After the cherries have passed through the civet's digestive system, the beans are retrieved from the
                  droppings. Though the process may sound unusual, the beans are carefully handpicked by skilled
                  workers. It is at this stage that the magic of Luwak Coffee truly reveals itself.
                </p>
                <div className="mt-6 h-56 relative rounded-md overflow-hidden border border-gold-900/30">
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
        <div className="w-full">
          <GoldDivider />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-navy-900 text-gold-100 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title={t("home.why_choose.title")}
              subtitle={t("home.why_choose.subtitle")}
              center
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Coffee className="h-12 w-12 mb-5 text-gold-400" />
                <h3 className="text-xl font-bold mb-3 text-gold-100">{t("home.why_choose.flavor.title")}</h3>
                <p className="text-gold-300 text-base">{t("home.why_choose.flavor.desc")}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Leaf className="h-12 w-12 mb-5 text-gold-400" />
                <h3 className="text-xl font-bold mb-3 text-gold-100">{t("home.why_choose.eco.title")}</h3>
                <p className="text-gold-300 text-base">{t("home.why_choose.eco.desc")}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <Award className="h-12 w-12 mb-5 text-gold-400" />
                <h3 className="text-xl font-bold mb-3 text-gold-100">{t("home.why_choose.rare.title")}</h3>
                <p className="text-gold-300 text-base">{t("home.why_choose.rare.desc")}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-900/30 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] h-full">
                <div className="h-12 w-12 mb-5 text-gold-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                <h3 className="text-xl font-bold mb-3 text-gold-100">{t("home.why_choose.gift.title")}</h3>
                <p className="text-gold-300 text-base">{t("home.why_choose.gift.desc")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Taste Section */}
      <section className="py-24 bg-navy-950 relative">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 pt-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-gold-900/30 shadow-xl shadow-navy-950/50">
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
                <p className="text-gold-200 mb-6 leading-relaxed text-base">
                  Luwak Coffee is unlike any other coffee you've tasted. It has a smooth, mellow body with an incredible
                  depth of flavor. The natural fermentation process inside the civet imparts a low acidity and smooth
                  mouthfeel, making it easy to drink and perfect for any time of day.
                </p>
                <p className="text-gold-200 mb-6 leading-relaxed text-base">
                  When you brew a cup of Luwak Coffee, expect to experience:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gold-200 text-base">
                    <Star className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />A rich, full-bodied taste
                  </li>
                  <li className="flex items-center text-gold-200 text-base">
                    <Star className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />
                    Notes of chocolate, caramel, and a touch of earthy sweetness
                  </li>
                  <li className="flex items-center text-gold-200 text-base">
                    <Star className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />A remarkably smooth finish, with no
                    bitter aftertaste
                  </li>
                </ul>
                <p className="text-gold-200 leading-relaxed text-base">
                  Whether you enjoy it black or with milk, every sip of our Luwak Coffee is a reminder of the
                  dedication, care, and craftsmanship that go into creating this one-of-a-kind brew.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-navy-950 relative">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 pt-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-400 text-sm uppercase tracking-widest font-medium">
                {t("home.products.luxury")}
              </span>
              <SectionHeading
                title={t("home.products.title")}
                subtitle={t("home.products.subtitle")}
                center
                className="mt-3"
              />
            </div>
          </ScrollReveal>

          {/* Featured Product */}
          <ScrollReveal>
            <div className="bg-navy-900/60 rounded-xl overflow-hidden border border-gold-900/30 shadow-2xl mb-16 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto overflow-hidden">
                  <Image
                    src="/images/Giftset.png"
                    alt="Premium Gift Set"
                    fill
                    className="object-contain p-8 scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/90 hidden md:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/90 md:hidden"></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-gold-600/20 text-gold-400 text-xs px-3 py-1 rounded-full mb-4">
                    {t("home.products.featured")}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gold-100">Premium Gift Set</h3>
                  <p className="text-gold-200 mb-6 leading-relaxed">
                    Experience the epitome of luxury with our signature gift set, featuring our finest wild-sourced Kopi
                    Luwak. Each set is meticulously crafted to showcase the authentic flavor that has made this coffee
                    legendary.
                  </p>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <p className="text-gold-400 font-bold text-3xl">$89.99</p>
                      <p className="text-sm text-gold-300">{t("home.products.limited")}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                  <Link href="/shop/product/2">
                    <Button variant="gold" size="lg" className="w-full py-6 text-base group">
                      {t("home.products.discover")}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-gold-900/20 group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 to-transparent z-10"></div>
                  <Image
                    src="/images/StandingPouch.png"
                    alt="Standing Pouch"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t border-gold-900/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gold-100">Standing Pouch</h3>
                    <span className="bg-gold-600/20 text-gold-400 text-xs px-2 py-1 rounded-full">250g</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gold-400 font-bold text-xl">$49.99</p>
                    <Link href="/shop/product/1">
                      <Button variant="gold" size="sm" className="rounded-full w-10 h-10 p-0 group">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Product 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-navy-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-gold-900/20 group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 to-transparent z-10"></div>
                  <Image
                    src="/images/Artgift.png"
                    alt="Artgift"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t border-gold-900/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gold-100">Artgift</h3>
                    <span className="bg-gold-600/20 text-gold-400 text-xs px-2 py-1 rounded-full">Premium</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gold-400 font-bold text-xl">$129.99</p>
                    <Link href="/shop/product/4">
                      <Button variant="gold" size="sm" className="rounded-full w-10 h-10 p-0 group">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Product 3 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-navy-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-gold-900/20 group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 to-transparent z-10"></div>
                  <Image
                    src="/images/AcehCraftGiftSet.png"
                    alt="Aceh Craft Gift Set"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t border-gold-900/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gold-100">Aceh Craft Set</h3>
                    <span className="bg-gold-600/20 text-gold-400 text-xs px-2 py-1 rounded-full">Handcrafted</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gold-400 font-bold text-xl">$79.99</p>
                    <Link href="/shop/product/3">
                      <Button variant="gold" size="sm" className="rounded-full w-10 h-10 p-0 group">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Product 4 */}
            <ScrollReveal delay={0.4}>
              <div className="bg-navy-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-gold-900/20 group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 to-transparent z-10"></div>
                  <Image
                    src="/images/SingleSachet.png"
                    alt="Single Sachet"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t border-gold-900/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gold-100">Single Sachet</h3>
                    <span className="bg-gold-600/20 text-gold-400 text-xs px-2 py-1 rounded-full">Travel</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-navy-700" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gold-400 font-bold text-xl">$29.99</p>
                    <Link href="/shop/product/5">
                      <Button variant="gold" size="sm" className="rounded-full w-10 h-10 p-0 group">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 text-center">
            <ScrollReveal>
              <div className="inline-block bg-navy-900/60 backdrop-blur-sm p-1 rounded-full border border-gold-900/30">
                <Link href="/shop">
                  <Button variant="gold" size="lg" className="text-base px-8 py-5 rounded-full">
                    {t("home.products.view_all")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="w-full mt-20">
          <GoldDivider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-gold-100">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gold-200 text-lg">{t("home.cta.subtitle")}</p>
            <Link href="/shop">
              <Button variant="gold" size="lg" className="text-base px-8 py-5">
                {t("home.cta.order")}
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
