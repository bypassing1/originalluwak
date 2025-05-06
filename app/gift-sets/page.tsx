"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import { GoldDivider } from "@/components/ui/gold-divider"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const giftSets = [
  {
    id: 1,
    name: "Premium Gift Box",
    price: 129.99,
    image: "/images/Giftset.png",
    description:
      "Our flagship gift set featuring 250g of premium Luwak coffee beans, a handcrafted wooden box, and a ceramic brewing cup.",
    includes: ["250g Premium Luwak Coffee Beans", "Handcrafted Wooden Box", "Ceramic Brewing Cup", "Brewing Guide"],
  },
  {
    id: 2,
    name: "Luwak Experience Set",
    price: 89.99,
    image: "/images/Artgift.png",
    description:
      "A complete Luwak coffee experience with beans, ground coffee, and single-serve sachets in an elegant gift box.",
    includes: [
      "100g Luwak Coffee Beans",
      "100g Ground Luwak Coffee",
      "5 Single-Serve Sachets",
      "Elegant Gift Box",
      "Brewing Guide",
    ],
  },
  {
    id: 3,
    name: "Artisan Collection",
    price: 149.99,
    image: "/images/AcehCraftGiftSet.png",
    description:
      "Our artisan collection featuring coffee from three different regions of Indonesia, presented in a handwoven traditional basket.",
    includes: [
      "100g Sumatra Luwak Coffee",
      "100g Java Luwak Coffee",
      "100g Bali Luwak Coffee",
      "Handwoven Traditional Basket",
      "Tasting Notes",
    ],
  },
  {
    id: 4,
    name: "Corporate Gift Set",
    price: 199.99,
    image: "/images/StandingPouch.png",
    description:
      "Perfect for business gifts, this premium set includes coffee, branded merchandise, and can be customized with your company logo.",
    includes: [
      "250g Premium Luwak Coffee",
      "Branded Coffee Mug",
      "Leather Coaster Set",
      "Custom Gift Card",
      "Premium Gift Box",
    ],
  },
]

export default function GiftSets() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="Luxury gift sets featuring premium Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">LUXURY GIFT SETS</h1>
            <p className="text-xl md:text-2xl text-gold-200">
              Share the extraordinary taste of Luwak Coffee with our beautifully crafted gift sets, perfect for coffee
              connoisseurs and special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Sets Introduction */}
      <section className="py-32 bg-navy-900">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <Gift className="h-16 w-16 text-gold-400 mx-auto mb-6" />
              <SectionHeading
                title="THE PERFECT GIFT FOR COFFEE LOVERS"
                subtitle="EXQUISITE PRESENTATION, EXTRAORDINARY TASTE"
                center
              />
              <p className="text-gold-200 text-lg mb-10 mt-6 leading-relaxed">
                Our exquisite gift sets combine the world's most exclusive coffee with elegant packaging and premium
                accessories. Each set is thoughtfully curated to provide an unforgettable Luwak Coffee experience,
                making it the perfect gift for special occasions, corporate presents, or to treat yourself to something
                extraordinary.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center bg-navy-800/50 p-6 rounded-lg border border-gold-900/30 shadow-lg">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png"
                    alt="Certificate of Authenticity"
                    width={180}
                    height={120}
                    className="rounded-md border border-gold-900/30"
                  />
                </div>
                <div className="text-left max-w-xl">
                  <h4 className="text-lg font-bold text-gold-100 mb-2">Certificate of Authenticity</h4>
                  <p className="text-base text-gold-200">
                    All our gift sets include a certificate of authenticity from the Association of Indonesian Coffee
                    Exporters and Industries (AEKI), guaranteeing the genuine origin and ethical production of our Luwak
                    Coffee.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gift Sets Showcase */}
      <section className="py-32 bg-navy-950 relative">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <SectionHeading
              title="EXCLUSIVE GIFT COLLECTIONS"
              subtitle="THOUGHTFULLY CURATED FOR COFFEE CONNOISSEURS"
              center
              className="mb-20"
            />
          </ScrollReveal>

          <div className="space-y-32 overflow-hidden">
            {giftSets.map((giftSet, index) => (
              <div
                key={giftSet.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <ScrollReveal
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={`${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gold-900/30">
                    <Image
                      src={giftSet.image || "/placeholder.svg"}
                      alt={giftSet.name}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  direction={index % 2 === 0 ? "right" : "left"}
                  className={`${index % 2 !== 0 ? "md:order-1" : ""}`}
                >
                  <div className="bg-navy-900 p-10 rounded-lg shadow-xl border border-gold-900/30 h-full max-w-full">
                    <h3 className="text-3xl font-bold mb-3 text-gold-100">{giftSet.name}</h3>
                    <p className="text-3xl font-bold text-gold-400 mb-6">${giftSet.price.toFixed(2)}</p>
                    <p className="text-gold-200 text-lg mb-8 break-words">{giftSet.description}</p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-gold-100">What's Included:</h4>
                      <ul className="space-y-3 overflow-hidden">
                        {giftSet.includes.map((item, i) => (
                          <li key={i} className="flex items-start text-gold-200 break-words">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-gold-400 mr-3 flex-shrink-0 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                      <Button variant="gold" className="text-base py-6 flex-1">
                        Add to Cart
                      </Button>
                      <Link href={`/shop/product/${giftSet.id}`} className="flex-1">
                        <Button variant="gold-outline" className="text-base py-6 w-full">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <GoldDivider />
        </div>
      </section>

      {/* Custom Gift Sets */}
      <section className="py-32 bg-navy-900 text-gold-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionHeading title="CUSTOM GIFT SETS" subtitle="TAILORED TO YOUR SPECIFIC REQUIREMENTS" />
                <p className="text-gold-200 text-lg mb-8 leading-relaxed">
                  Looking for something truly special? We offer custom gift sets tailored to your specific requirements.
                  Whether it's for a corporate event, wedding favor, or a personalized gift, we can create a unique
                  Luwak Coffee experience.
                </p>
                <div className="space-y-8 mb-10">
                  <div className="flex items-start">
                    <div className="bg-navy-800/80 p-4 rounded-full mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-gold-400"
                      >
                        <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3z" />
                        <path d="M11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gold-100">Corporate Gifts</h3>
                      <p className="text-gold-200 text-lg">
                        Impress clients and employees with custom-branded gift sets featuring our premium Luwak Coffee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-navy-800/80 p-4 rounded-full mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-gold-400"
                      >
                        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gold-100">Wedding Favors</h3>
                      <p className="text-gold-200 text-lg">
                        Create memorable wedding favors with personalized Luwak Coffee sachets or mini gift sets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-navy-800/80 p-4 rounded-full mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-gold-400"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gold-100">Special Occasions</h3>
                      <p className="text-gold-200 text-lg">
                        Celebrate birthdays, anniversaries, or holidays with custom-themed Luwak Coffee gift sets.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                  Inquire About Custom Orders
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-[600px] rounded-lg overflow-hidden border border-gold-900/30 shadow-2xl">
                <Image
                  src="/images/SingleSachet.png"
                  alt="Custom Luwak Coffee gift sets"
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-navy-950 text-gold-100 relative">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 text-center pt-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">READY TO GIVE THE GIFT OF EXTRAORDINARY COFFEE?</h2>
            <p className="max-w-3xl mx-auto mb-10 text-gold-200 text-xl">
              Browse our collection of premium gift sets or contact us to create a custom gift experience that will
              delight any coffee lover.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                Shop Gift Sets
              </Button>
              <Button variant="gold-outline" size="lg" className="text-lg px-8 py-6">
                Contact for Custom Orders
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
