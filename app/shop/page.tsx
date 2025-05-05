"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { GoldDivider } from "@/components/ui/gold-divider"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const products = [
  {
    id: 1,
    name: "Premium Luwak Coffee Beans",
    price: 49.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Luwak%20Liar%20%28Wild%20Civet%29.JPG-EERl6UAJ8IqW1H4XmsAFvKB4gq6KUH.jpeg",
    category: "Beans",
    weight: "250g",
    rating: 5,
  },
  {
    id: 2,
    name: "Luwak Coffee Gift Set",
    price: 89.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Certificate%20from%20AEKI%20%20-%20FnB%20Tech-4vDthqstLKiE9hN2KqE3iRcnG8F8vA.png",
    category: "Gift Sets",
    weight: "500g",
    rating: 5,
  },
  {
    id: 3,
    name: "Ground Luwak Coffee",
    price: 39.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/processing_kopi_luwak_hd-1bgEWvwYZWf6u5WtT7vLmE3FWlyKPq.png",
    category: "Ground",
    weight: "250g",
    rating: 4,
  },
  {
    id: 4,
    name: "Luwak Coffee Single Sachets",
    price: 29.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
    category: "Sachets",
    weight: "100g",
    rating: 4,
  },
  {
    id: 5,
    name: "Luxury Wooden Gift Box",
    price: 129.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fTcYDNEonUi1V9OnwIvYGLbjFhl2G5.png",
    category: "Gift Sets",
    weight: "750g",
    rating: 5,
  },
  {
    id: 6,
    name: "Luwak Coffee Sampler Pack",
    price: 59.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4aoPG6d1rBOpsvrXfrrauSYz2NrKim.png",
    category: "Samplers",
    weight: "300g",
    rating: 4,
  },
]

export default function Shop() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luwak%20Coffee%20Plantation-027s1JZ4gRRE9qjUqkllPfh7rr0HtR.png"
            alt="Shop our premium Luwak coffee"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-gold-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">SHOP OUR COLLECTION</h1>
            <p className="text-xl md:text-2xl text-gold-200">
              Discover the world's most exclusive coffee, ethically sourced from the heart of Indonesia.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <GoldDivider />
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-32 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <ScrollReveal direction="left" className="lg:w-1/4">
              <div className="bg-navy-800 p-8 rounded-lg shadow-lg border border-gold-900/30 sticky top-24">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gold-100">Filters</h2>
                  <SlidersHorizontal className="h-6 w-6 text-gold-400" />
                </div>

                {/* Search */}
                <div className="mb-8">
                  <label className="block text-base font-medium mb-3 text-gold-200">Search</label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      className="pl-10 bg-navy-900 border-gold-900/30 text-gold-100 placeholder:text-gold-500/50 py-6 text-base"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-base font-medium mb-4 text-gold-200">Categories</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="category-all"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="category-all" className="ml-3 text-base text-gold-200">
                        All Products
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="category-beans"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="category-beans" className="ml-3 text-base text-gold-200">
                        Coffee Beans
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="category-ground"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="category-ground" className="ml-3 text-base text-gold-200">
                        Ground Coffee
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="category-gift"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="category-gift" className="ml-3 text-base text-gold-200">
                        Gift Sets
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="category-sachets"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="category-sachets" className="ml-3 text-base text-gold-200">
                        Sachets
                      </label>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="text-base font-medium mb-4 text-gold-200">Price Range</h3>
                  <Slider defaultValue={[0, 100]} max={200} step={1} className="mb-3" />
                  <div className="flex justify-between">
                    <span className="text-sm text-gold-300">$0</span>
                    <span className="text-sm text-gold-300">$200</span>
                  </div>
                </div>

                {/* Weight */}
                <div className="mb-8">
                  <h3 className="text-base font-medium mb-4 text-gold-200">Weight</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="weight-100"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="weight-100" className="ml-3 text-base text-gold-200">
                        100g
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="weight-250"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="weight-250" className="ml-3 text-base text-gold-200">
                        250g
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="weight-500"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="weight-500" className="ml-3 text-base text-gold-200">
                        500g
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="weight-1000"
                        className="border-gold-600 data-[state=checked]:bg-gold-600 data-[state=checked]:text-navy-950 h-5 w-5"
                      />
                      <label htmlFor="weight-1000" className="ml-3 text-base text-gold-200">
                        1000g
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <ScrollReveal>
                <div className="flex justify-between items-center mb-10">
                  <SectionHeading title="All Products" className="mb-0" />
                  <div className="flex items-center gap-6">
                    <div className="hidden sm:block">
                      <Select defaultValue="featured">
                        <SelectTrigger className="w-[200px] bg-navy-800 border-gold-900/30 text-gold-100 py-6 text-base">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                          <SelectItem value="featured">Featured</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="newest">Newest</SelectItem>
                          <SelectItem value="bestselling">Best Selling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="hidden sm:block text-base text-gold-300">Showing 1-6 of 12 products</div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                  <ScrollReveal key={product.id} delay={0.1 * index}>
                    <div className="bg-navy-800 rounded-lg overflow-hidden shadow-lg border border-gold-900/30 transform transition-transform duration-300 hover:translate-y-[-5px] group">
                      <Link href={`/shop/product/${product.id}`}>
                        <div className="relative h-80">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                        </div>
                      </Link>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-3">
                          <Link href={`/shop/product/${product.id}`}>
                            <h3 className="text-xl font-bold hover:text-gold-400 transition-colors text-gold-100">
                              {product.name}
                            </h3>
                          </Link>
                          <span className="bg-gold-600/20 text-gold-400 text-sm px-3 py-1 rounded">
                            {product.category}
                          </span>
                        </div>
                        <div className="flex items-center mb-4">
                          <span className="flex">
                            {[...Array(product.rating)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-gold-400"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                            {[...Array(5 - product.rating)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-navy-700"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </span>
                          <span className="ml-2 text-sm text-gold-300">(24 reviews)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gold-400 font-bold text-2xl">${product.price.toFixed(2)}</p>
                            <p className="text-sm text-gold-300">{product.weight}</p>
                          </div>
                          <Button variant="gold" size="sm" className="py-5 px-4">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination */}
              <ScrollReveal>
                <div className="mt-16 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="w-12 h-12 border-gold-900/30 text-gold-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      <span className="sr-only">Previous Page</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 bg-gold-600 text-navy-950 border-gold-600"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12 border-gold-900/30 text-gold-400">
                      2
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12 border-gold-900/30 text-gold-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="sr-only">Next Page</span>
                    </Button>
                  </nav>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
