"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Minus, Plus, ShoppingBag, Star } from "lucide-react"
import { GoldDivider } from "@/components/ui/gold-divider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  // In a real app, you would fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Premium Luwak Coffee Beans",
    price: 49.99,
    description:
      "Experience the world's most exclusive coffee with our premium Luwak coffee beans. Sourced ethically from the heart of Indonesia, these beans offer a uniquely smooth, rich flavor with notes of chocolate, caramel, and a hint of earthiness.",
    longDescription:
      "Luwak Coffee, also known as Wild Civet Coffee, is one of the rarest and most exquisite coffee varieties in the world. This unique coffee is produced by the wild civet, a small mammal native to Southeast Asia. The process starts when the wild civet eats the ripest coffee cherries, which then pass through its digestive system. What makes this process so special is how the cherries are fermented inside the civet's stomach, imparting a unique flavor profile that cannot be replicated elsewhere.\n\nThe beans are then carefully handpicked from the wild civet's droppings, cleaned, and roasted to perfection, ensuring a cup of coffee that is truly extraordinary. Our Luwak coffee beans are ethically sourced from small, family-owned farms in Sumatra, Indonesia, where the perfect climate and rich volcanic soil create the ideal environment for coffee cultivation.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Luwak%20Liar%20%28Wild%20Civet%29.JPG-EERl6UAJ8IqW1H4XmsAFvKB4gq6KUH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/processing_kopi_luwak_hd-1bgEWvwYZWf6u5WtT7vLmE3FWlyKPq.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png",
    ],
    category: "Beans",
    weight: "250g",
    rating: 5,
    reviews: 24,
    inStock: true,
    options: {
      grind: ["Whole Beans", "Coarse", "Medium", "Fine", "Extra Fine"],
      weight: ["100g", "250g", "500g", "1kg"],
    },
    features: [
      "100% Wild Civet Coffee",
      "Ethically sourced from Sumatra, Indonesia",
      "Low acidity, smooth mouthfeel",
      "Notes of chocolate, caramel, and earthy sweetness",
      "Certified by the Association of Indonesian Coffee Exporters",
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Luwak Coffee Gift Set",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png",
      },
      {
        id: 3,
        name: "Ground Luwak Coffee",
        price: 39.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/processing_kopi_luwak_hd-1bgEWvwYZWf6u5WtT7vLmE3FWlyKPq.png",
      },
      {
        id: 4,
        name: "Luwak Coffee Single Sachets",
        price: 29.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
      },
    ],
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="Premium Luwak coffee product"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name.toUpperCase()}</h1>
            <div className="flex items-center text-sm font-montserrat text-gold-300">
              <Link href="/" className="hover:text-gold-400">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/shop" className="hover:text-gold-400">
                Shop
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href={`/shop/category/${product.category.toLowerCase()}`} className="hover:text-gold-400">
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gold-400">{product.name}</span>
            </div>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* Product Details */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gold-900/30 shadow-lg">
                  <Image
                    src={product.images[activeImage] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"></div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative h-24 rounded-md overflow-hidden border transition-all ${
                        activeImage === index
                          ? "border-gold-400 ring-2 ring-gold-400/50"
                          : "border-gold-900/30 hover:border-gold-600"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal direction="right">
              <div className="bg-navy-800/50 p-8 rounded-lg border border-gold-900/30 shadow-lg">
                <div className="mb-6">
                  <span className="inline-block bg-gold-600/20 text-gold-400 text-xs px-3 py-1 rounded font-montserrat mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold mb-3 text-gold-100">{product.name}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gold-300">({product.reviews} reviews)</span>
                  </div>
                  <p className="text-2xl font-bold text-gold-400 mb-4">${product.price.toFixed(2)}</p>
                  <p className="text-gold-200 mb-6 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-6 mb-8">
                  {/* Grind Options */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Grind</label>
                    <Select defaultValue={product.options.grind[0]}>
                      <SelectTrigger className="w-full bg-navy-900 border-gold-900/30 text-gold-100">
                        <SelectValue placeholder="Select grind" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                        {product.options.grind.map((grind) => (
                          <SelectItem key={grind} value={grind}>
                            {grind}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Weight Options */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Weight</label>
                    <Select defaultValue={product.options.weight[1]}>
                      <SelectTrigger className="w-full bg-navy-900 border-gold-900/30 text-gold-100">
                        <SelectValue placeholder="Select weight" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                        {product.options.weight.map((weight) => (
                          <SelectItem key={weight} value={weight}>
                            {weight}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Quantity</label>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-r-none border-r-0 border-gold-900/30 text-gold-400 hover:text-gold-300"
                        onClick={decrementQuantity}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <div className="h-10 px-4 flex items-center justify-center border border-gold-900/30 bg-navy-900 min-w-[40px] text-gold-100">
                        {quantity}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-l-none border-l-0 border-gold-900/30 text-gold-400 hover:text-gold-300"
                        onClick={incrementQuantity}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-gold-600 hover:bg-gold-500 text-navy-950 flex-1 py-6">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold-600 text-gold-400 hover:bg-gold-600/10 flex-1 py-6"
                  >
                    Buy Now
                  </Button>
                </div>

                <div className="border-t border-gold-900/30 pt-6">
                  <h3 className="text-lg font-bold mb-4 text-gold-100">Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gold-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20 bg-navy-950">
        <GoldDivider className="transform rotate-180" />
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 h-auto bg-navy-800/50 border border-gold-900/30 p-1 rounded-lg">
                <TabsTrigger
                  value="description"
                  className="py-3 data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="py-3 data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="py-3 data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              <div className="mt-8 bg-navy-800/30 p-8 rounded-lg shadow-lg border border-gold-900/30">
                <TabsContent value="description" className="mt-0">
                  <div className="prose max-w-none text-gold-200 space-y-6">
                    <p className="leading-relaxed">{product.longDescription}</p>
                    <h3 className="text-xl font-bold mb-2 text-gold-100">Tasting Notes</h3>
                    <p className="mb-4">When you brew a cup of our Luwak Coffee, expect to experience:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>A rich, full-bodied taste</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Notes of chocolate, caramel, and a touch of earthy sweetness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>A remarkably smooth finish, with no bitter aftertaste</span>
                      </li>
                    </ul>
                    <h3 className="text-xl font-bold mb-2 text-gold-100">Brewing Recommendations</h3>
                    <p className="mb-4">To fully appreciate the unique flavor profile of Luwak Coffee, we recommend:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Use freshly filtered water heated to 90-96°C (195-205°F)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>For pour-over methods, use a medium-fine grind</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>For French press, use a coarse grind</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>For espresso, use a fine grind</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-gold-100">Product Specifications</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Origin</span>
                          <span className="w-2/3">Sumatra, Indonesia</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Variety</span>
                          <span className="w-2/3">100% Arabica</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Process</span>
                          <span className="w-2/3">Wild Civet Processed</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Roast Level</span>
                          <span className="w-2/3">Medium</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Tasting Notes</span>
                          <span className="w-2/3">Chocolate, Caramel, Earthy</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Acidity</span>
                          <span className="w-2/3">Low</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Body</span>
                          <span className="w-2/3">Full</span>
                        </div>
                        <div className="flex py-3">
                          <span className="font-medium w-1/3">Certification</span>
                          <span className="w-2/3">AEKI Certified</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-gold-100">Shipping & Returns</h3>
                      <div className="space-y-6 text-gold-200">
                        <p className="leading-relaxed">
                          We ship our coffee worldwide to ensure that everyone can experience the unique taste of Luwak
                          Coffee.
                        </p>
                        <div>
                          <h4 className="font-bold mb-3 text-gold-100">Shipping Information:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span>Free shipping on orders over $100</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span>Standard shipping: 3-5 business days</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span>Express shipping: 1-2 business days</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-2 w-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span>International shipping: 7-14 business days</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 text-gold-100">Return Policy:</h4>
                          <p className="leading-relaxed">
                            If you're not completely satisfied with your purchase, you may return it within 30 days for
                            a full refund. Please note that the product must be unopened and in its original packaging.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-0">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gold-100">Customer Reviews</h3>
                        <div className="flex items-center mt-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gold-300">Based on {product.reviews} reviews</span>
                        </div>
                      </div>
                      <Button className="bg-gold-600 hover:bg-gold-500 text-navy-950">Write a Review</Button>
                    </div>

                    {/* Sample Reviews */}
                    <div className="space-y-8">
                      {/* Review 1 */}
                      <div className="border-b border-gold-900/30 pb-8">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold text-gold-100">John D.</h4>
                          <span className="text-sm text-gold-300">2 weeks ago</span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                          ))}
                        </div>
                        <h5 className="font-bold mb-2 text-gold-100">Exceptional Coffee Experience</h5>
                        <p className="text-gold-200">
                          I've tried many premium coffees over the years, but this Luwak coffee is truly exceptional.
                          The smooth, rich flavor with no bitterness is unlike anything I've experienced before. Yes,
                          it's expensive, but for a special occasion or a true coffee connoisseur, it's worth every
                          penny.
                        </p>
                      </div>

                      {/* Review 2 */}
                      <div className="border-b border-gold-900/30 pb-8">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold text-gold-100">Sarah M.</h4>
                          <span className="text-sm text-gold-300">1 month ago</span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                          ))}
                        </div>
                        <h5 className="font-bold mb-2 text-gold-100">A Luxurious Gift</h5>
                        <p className="text-gold-200">
                          I purchased this as a gift for my husband who is a coffee enthusiast. He was thrilled with the
                          unique story behind the coffee and even more impressed with the taste. The packaging is
                          beautiful and makes for a very special gift. The chocolate and caramel notes are prominent,
                          and there's a lovely earthiness that makes it truly unique.
                        </p>
                      </div>

                      {/* Review 3 */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold text-gold-100">Michael T.</h4>
                          <span className="text-sm text-gold-300">2 months ago</span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                          ))}
                          {[...Array(1)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-navy-700" />
                          ))}
                        </div>
                        <h5 className="font-bold mb-2 text-gold-100">Great Coffee, Fast Shipping</h5>
                        <p className="text-gold-200">
                          The coffee arrived quickly and was packaged well. The taste is excellent - very smooth with a
                          complex flavor profile. I'm deducting one star only because I think the price is a bit steep,
                          but I understand the rarity of the product. Would purchase again for special occasions.
                        </p>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <Button variant="outline" className="border-gold-600 text-gold-400 hover:bg-gold-600/10">
                        Load More Reviews
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-navy-900">
        <GoldDivider className="transform rotate-180" />
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <SectionHeading
              title="YOU MAY ALSO LIKE"
              subtitle="EXPLORE OUR OTHER PREMIUM PRODUCTS"
              center
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedProduct) => (
              <ScrollReveal key={relatedProduct.id}>
                <div className="bg-navy-800/50 rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transition-transform hover:shadow-xl hover:-translate-y-1 group">
                  <Link href={`/shop/product/${relatedProduct.id}`}>
                    <div className="relative h-64">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/shop/product/${relatedProduct.id}`}>
                      <h3 className="text-lg font-bold hover:text-gold-400 transition-colors mb-2 text-gold-100">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-gold-400 font-bold mb-4">${relatedProduct.price.toFixed(2)}</p>
                    <Button className="w-full bg-gold-600 hover:bg-gold-500 text-navy-950">Add to Cart</Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <GoldDivider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-gold-100">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO EXPERIENCE EXTRAORDINARY COFFEE?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gold-200 text-lg">
              Explore our full collection of premium Luwak coffee products and discover the unique taste that has made
              it famous worldwide.
            </p>
            <Link href="/shop">
              <Button variant="gold" size="lg" className="text-lg px-8 py-6">
                Browse All Products
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
