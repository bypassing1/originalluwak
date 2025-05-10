"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Certifications() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="Certifications for Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CERTIFICATIONS</h1>
            <p className="text-lg md:text-xl text-gold-200">
              Our commitment to authenticity, quality, and ethical sourcing of premium Kopi Luwak coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Content */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Certificates */}
              <div className="md:col-span-4 space-y-8">
                {/* AEKI Certificate */}
                <div className="bg-navy-800/50 p-4 rounded-lg border border-gold-900/30 shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sb41Y5oNHV2Tn1HlK0fPAmEVeBXsXl.png"
                    alt="AEKI Certificate of Guarantee"
                    width={400}
                    height={550}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-gold-300 text-xs mt-3 text-center">
                    Certificate of Guarantee from the Association of Indonesian Coffee Exporters and Industries (AEKI)
                  </p>
                </div>

                {/* MUI Certificate */}
                <div className="bg-navy-800/50 p-4 rounded-lg border border-gold-900/30 shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hN5ZaC05EXx1FdE4idqSWKoY35fOFR.png"
                    alt="MUI Halal Certificate"
                    width={400}
                    height={550}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-gold-300 text-xs mt-3 text-center">
                    Halal Certificate from the Indonesian Ulema Council (MUI)
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:col-span-8">
                <SectionHeading title="The Importance of Certification in the Kopi Luwak Industry" className="mb-8" />

                <div className="text-gold-200 text-base leading-relaxed space-y-6">
                  <p>
                    At Original Luwak, we recognize that authenticity and quality are essential for building trust in
                    the highly specialized world of luxury coffee. That's why we prioritize third-party certification
                    and rigorous authentication processes to ensure that every cup of our kopi luwak reflects ethical
                    sourcing and exceptional standards.
                  </p>

                  <h3 className="text-xl font-bold text-gold-100 mt-8">Wild-Sourced, Never Caged</h3>
                  <p>
                    Our kopi luwak is exclusively wild-sourced from the droppings of Asian Palm Civets (Paradoxurus
                    hermaphroditus) that roam freely in the forests of Sumatra, Java, and Bali. This ethical practice
                    stands in contrast to operations involving caged civets, which raise serious animal welfare and
                    ethical concerns such as force-feeding, stress behaviors, and a high mortality rate.
                  </p>
                  <p>
                    By avoiding battery cages and embracing sustainable collection methods, we help protect civet
                    populations and reduce the overall conservation risk associated with commercial kopi luwak
                    production.
                  </p>

                  <h3 className="text-xl font-bold text-gold-100 mt-8">Verified by Trusted Authorities</h3>
                  <p>
                    To validate our ethical and quality standards, we hold certification from the Indonesian Coffee
                    Exporter Association (AEKI), confirming that our sourcing complies with sustainable and humane
                    practices.
                  </p>
                  <p>
                    In addition, our kopi luwak has received halal certification from the Indonesian Ulema Council
                    (MUI), ensuring that every step of our production process meets strict hygiene and religious
                    guidelines. These certifications reinforce our commitment to transparency and consumer trust, while
                    guarding against fraudulent labeling and imitation products that can undermine market integrity.
                  </p>

                  <h3 className="text-xl font-bold text-gold-100 mt-8">Ethical Luxury in Every Cup</h3>
                  <p>
                    By choosing Original Luwak, you're not only enjoying a rare, low-acidity coffee with a smooth flavor
                    profile enhanced by natural digestive enzymes and post-roast Maillard reactions — you're also
                    supporting an ethical supply chain that respects both the environment and animal life.
                  </p>
                  <p>
                    Savor the richness of true civet coffee, knowing it's crafted with integrity from forest to cup.
                  </p>

                  <div className="mt-10">
                    <Button variant="gold" size="lg" className="text-sm px-6 py-4">
                      Shop Certified Kopi Luwak
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
