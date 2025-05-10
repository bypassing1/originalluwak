"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Minus, Plus, ShoppingBag, Star, Check, Award, Coffee } from "lucide-react"
import { GoldDivider } from "@/components/ui/gold-divider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedRoasting, setSelectedRoasting] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedPackaging, setSelectedPackaging] = useState("")

  // In a real app, you would fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Premium Luwak Coffee",
    price: {
      min: 50,
      max: 113,
    },
    description:
      "Our Luwak Coffee is sourced from wild luwak and not caged. Genuine wild luwak certified and Halal Certified.",
    longDescription:
      "Indulge in the extraordinary experience of Luwak Coffee, also known as Kopi Luwak, renowned for its unique production process and exceptional flavor profile. This rare and highly sought-after coffee is produced from the excretion of wild Luwak in the lush jungles of Indonesia, resulting in a coffee like no other.\n\nFun fact: Kopi Luwak is the world's most exclusive (and expensive) coffee. The main reason for its high price is the unusual method of production.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Luwak%20Liar%20%28Wild%20Civet%29.JPG-EERl6UAJ8IqW1H4XmsAFvKB4gq6KUH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arabica%20-%20Original%20Luwak%20Coffee%20%28Wild%20Civet%29.JPG-HARUETyhVyvrIV0BjquZdoC0ws8bXK.jpeg",
    ],
    category: "Beans",
    weight: "1kg",
    rating: 5,
    reviews: 24,
    inStock: true,
    options: {
      roasting: ["Green Beans", "Light Roast", "Medium Roast", "Medium to Dark Roast"],
      type: ["Beans", "Ground/Powder"],
      packaging: ["Jute Bag", "Pouch", "Drip"],
    },
    characteristics: {
      fragrance: "Fresh Nutty, vanilla, chocolate, strong and gentle almond",
      flavor: "Herbal, Refreshing, Spicy",
      acidity: "Soft-Medium",
      body: "Soft-Mild",
    },
    specifications: {
      screenSize: "15-18",
      moisture: "Max 13%",
      triage: "Max 6-8%",
      defectValue: "6-8",
    },
    description_details: {
      time: "9 Months",
      production: "800 to 1500",
      temperature: "13 to 28°C",
      rainfall: "100 to 3000 mm",
      altitude: "1200 to 1700 from Sea Level (asl)",
      soilType:
        "Black Soil /Soil Formed of Young Materials are very Fertile Volcanic and Contains Micro Nutrients Important to Plants.",
      origin: "Indonesia",
      areas: "Arabica Plantation Sumatra, Java, Bali",
      caffeine: "0.8 to 1.4%",
      seeds: "Flat with a Clear Midline",
      character: "Balance body, acidity, sweetness, fine Chocolate, Almond",
      harvest: "Collecting Luwak's Secretion",
      processing: "Semi Washed Cleaning, manual dry hulled",
    },
    pricing: {
      greenBeans: "USD 50 per kg (MOQ 50 kg)",
      roastedBeans: "USD 92.4 per kg",
      ground: "USD 94.4 per kg",
      drip: "USD 113 per kg",
    },
    relatedProducts: [
      {
        id: 2,
        name: "Luwak Coffee Gift Set",
        price: 89.99,
        image: "/images/Giftset.png",
      },
      {
        id: 3,
        name: "Aceh Craft Gift Set",
        price: 39.99,
        image: "/images/AcehCraftGiftSet.png",
      },
      {
        id: 4,
        name: "Single Sachet",
        price: 29.99,
        image: "/images/SingleSachet.png",
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
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gold-200 mb-2">Price per 1 KG:</h3>
                    <p className="text-2xl font-bold text-gold-400">
                      ${product.price.min} – ${product.price.max}
                    </p>
                  </div>
                  <p className="text-gold-200 mb-6 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-6 mb-8">
                  <h3 className="text-lg font-medium text-gold-200 mb-4">Select variant:</h3>

                  {/* Roasting Options */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Roasting</label>
                    <Select value={selectedRoasting} onValueChange={setSelectedRoasting}>
                      <SelectTrigger className="w-full bg-navy-900 border-gold-900/30 text-gold-100">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                        {product.options.roasting.map((roast) => (
                          <SelectItem key={roast} value={roast}>
                            {roast}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Type Options */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Type</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="w-full bg-navy-900 border-gold-900/30 text-gold-100">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                        {product.options.type.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Packaging Options */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-200">Packaging</label>
                    <Select value={selectedPackaging} onValueChange={setSelectedPackaging}>
                      <SelectTrigger className="w-full bg-navy-900 border-gold-900/30 text-gold-100">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-gold-900/30 text-gold-100">
                        {product.options.packaging.map((pkg) => (
                          <SelectItem key={pkg} value={pkg}>
                            {pkg}
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
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-gold-400 mr-2" />
                    <p className="text-gold-200">Kopi Luwak Coffee Certifications</p>
                  </div>
                  <p className="text-gold-200 text-sm mb-4">
                    Contact us at <span className="text-gold-400">info@originalluwak.com</span> for bulk purchases and
                    get a wholesale price for Luwak Coffee.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20 bg-navy-950">
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
        <div className="container mx-auto px-4 pt-8">
          <ScrollReveal>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="flex flex-wrap w-full md:w-auto md:inline-flex h-auto bg-navy-800/50 border border-gold-900/30 p-1 rounded-lg">
                <TabsTrigger
                  value="description"
                  className="flex-1 py-3 px-2 text-sm md:text-base data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md mb-1 md:mb-0"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="characteristics"
                  className="flex-1 py-3 px-2 text-sm md:text-base data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md mb-1 md:mb-0"
                >
                  Characteristics
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="flex-1 py-3 px-2 text-sm md:text-base data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md mb-1 md:mb-0"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="flex-1 py-3 px-2 text-sm md:text-base data-[state=active]:bg-gold-600 data-[state=active]:text-navy-950 rounded-md"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              <div className="mt-8 bg-navy-800/30 p-8 rounded-lg shadow-lg border border-gold-900/30">
                <TabsContent value="description" className="mt-0">
                  <div className="prose max-w-none text-gold-200 space-y-6">
                    <h3 className="text-xl font-bold mb-2 text-gold-100">About the Kopi Luwak</h3>
                    <p className="leading-relaxed">{product.longDescription}</p>

                    <h3 className="text-xl font-bold mb-2 text-gold-100">Country of Origin and Production Areas</h3>
                    <p className="mb-4">
                      Our Luwak Coffee is proud of Indonesian – Aceh origin. These regions offer the perfect environment
                      for the growth of coffee plants, resulting in exceptional beans that embody the essence of
                      Indonesian coffee culture.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-gold-100">The Unique Flavors of Luwak Coffee</h3>
                    <p className="mb-4">
                      The remarkable flavor of Luwak Coffee is crafted through the digestive process of the luwak. The
                      beans go through fermentation in the civet's intestine, leading to a distinct and unparalleled
                      taste. With a balanced blend of body, acidity, and sweetness, Luwak Coffee entices the palate with
                      a syrupy, smooth, and rich profile, accentuated by delightful hints of fine chocolate and almond.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-gold-100">Our Luwak Coffee Processing</h3>
                    <p className="mb-4">
                      Produced by our own people on 1,200 acres of our plantation, which has Organic Certification and
                      legal certification by the local government of central Aceh.
                    </p>

                    <p className="mb-4">
                      Three teams with a total of 18 people direct from our company collect the coffee beans from the
                      wild luwak on our own land no contractors or farms are used, and the luwak are free to pick the
                      choicest coffee beans available.
                    </p>

                    <p className="mb-4">
                      After the beans are collected (PARCHMENT), we select only the best coffee beans, or about fifty
                      percent of total coffee collected.
                    </p>

                    <p className="mb-4">
                      The entire harvesting and manufacturing process is controlled and supervised by Indonesia
                      Specialty Coffee.
                    </p>

                    <p className="mb-4">
                      Thus we can maintain the excellent quality of our Kopi Luwak Coffee, producing it under pristine
                      conditions in accordance with internationally recognized quality standards.
                    </p>

                    <p className="mb-4">
                      Our Kopi Luwak Coffee is 100 percent safe and hygienic, thoroughly cleaned, hulled, and treated
                      with ultraviolet to kill any possible bacteria.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-gold-100">Kopi Luwak Coffee Price per Kilogram (kg)</h3>
                    <p className="mb-4">
                      If you are wondering "how much is the price for luwak coffee?", we sell the best quality luwak
                      Coffee at affordable prices below:
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{product.pricing.greenBeans}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{product.pricing.roastedBeans}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{product.pricing.ground}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{product.pricing.drip}</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="characteristics" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-gold-100">Characteristics</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Fragrance/Aroma</span>
                          <span className="w-2/3">{product.characteristics.fragrance}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Flavor</span>
                          <span className="w-2/3">{product.characteristics.flavor}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Acidity</span>
                          <span className="w-2/3">{product.characteristics.acidity}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Body</span>
                          <span className="w-2/3">{product.characteristics.body}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-6 mt-10 text-gold-100">Specification</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Screen Size</span>
                          <span className="w-2/3">{product.specifications.screenSize}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Moisture</span>
                          <span className="w-2/3">{product.specifications.moisture}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Triage</span>
                          <span className="w-2/3">{product.specifications.triage}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/3">Defect Value</span>
                          <span className="w-2/3">{product.specifications.defectValue}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-navy-800/50 p-6 rounded-lg border border-gold-900/30">
                        <div className="flex items-center mb-4">
                          <Coffee className="h-6 w-6 text-gold-400 mr-3" />
                          <h3 className="text-xl font-bold text-gold-100">Premium Quality</h3>
                        </div>
                        <p className="text-gold-200 mb-6">
                          Original Kopi Luwak Coffee is selected from the finest and highest-grade Arabica coffee beans
                          by the luwak (civet cat) itself. Because they only consume the best Arabica coffee cherry,
                          guaranteed!
                        </p>
                        <p className="text-gold-200">
                          We have our own Q-Grader onsite to ensure the cupping quality score is above 81. We serve this
                          most expensive coffee for the premiere customer.
                        </p>
                      </div>

                      <div className="mt-8 bg-navy-800/50 p-6 rounded-lg border border-gold-900/30">
                        <div className="flex items-center mb-4">
                          <Award className="h-6 w-6 text-gold-400 mr-3" />
                          <h3 className="text-xl font-bold text-gold-100">Certifications</h3>
                        </div>
                        <p className="text-gold-200 mb-4">
                          Our Luwak Coffee is certified by multiple organizations to ensure quality and ethical
                          sourcing:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start text-gold-200">
                            <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>Wild Luwak Certified</span>
                          </li>
                          <li className="flex items-start text-gold-200">
                            <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>Halal Certified</span>
                          </li>
                          <li className="flex items-start text-gold-200">
                            <Check className="h-5 w-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>Organic Certified</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-gold-100">Description</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Time from Flowers to Be Berry</span>
                          <span className="w-1/2">{product.description_details.time}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Production (Kg/Ha)</span>
                          <span className="w-1/2">{product.description_details.production}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Optimal Temperature</span>
                          <span className="w-1/2">{product.description_details.temperature}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Optimal Rainfall</span>
                          <span className="w-1/2">{product.description_details.rainfall}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Altitude</span>
                          <span className="w-1/2">{product.description_details.altitude}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Soil Type</span>
                          <span className="w-1/2">{product.description_details.soilType}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Country of Origin</span>
                          <span className="w-1/2">{product.description_details.origin}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Production Areas</span>
                          <span className="w-1/2">{product.description_details.areas}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6 text-gold-100">Additional Information</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Caffeine Content</span>
                          <span className="w-1/2">{product.description_details.caffeine}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Form of Seeds</span>
                          <span className="w-1/2">{product.description_details.seeds}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Character Stew</span>
                          <span className="w-1/2">{product.description_details.character}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Method of Harvest</span>
                          <span className="w-1/2">{product.description_details.harvest}</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Processing Method</span>
                          <span className="w-1/2">{product.description_details.processing}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-6 mt-10 text-gold-100">Weight & Packaging Options</h3>
                      <div className="space-y-4 text-gold-200">
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Weight</span>
                          <span className="w-1/2">1 kg</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Roasting Options</span>
                          <span className="w-1/2">Green Beans, Light Roast, Medium Roast, Medium to Dark Roast</span>
                        </div>
                        <div className="flex border-b border-gold-900/30 py-3">
                          <span className="font-medium w-1/2">Type Options</span>
                          <span className="w-1/2">Beans, Ground/Powder</span>
                        </div>
                        <div className="flex py-3">
                          <span className="font-medium w-1/2">Packaging Options</span>
                          <span className="w-1/2">Jute Bag, Pouch, Drip</span>
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
        <div className="w-full">
          <GoldDivider className="transform rotate-180" />
        </div>
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
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
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
