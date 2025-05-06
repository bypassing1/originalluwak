"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy-950/90 backdrop-blur-md border-b border-gold-900/30" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/original-luwak-logo-gold.png"
              alt="Original Luwak"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gold-100 hover:text-gold-400 font-medium text-sm uppercase tracking-wider">
              Home
            </Link>
            <Link
              href="/our-story"
              className="text-gold-100 hover:text-gold-400 font-medium text-sm uppercase tracking-wider"
            >
              Our Story
            </Link>
            <Link
              href="/shop"
              className="text-gold-100 hover:text-gold-400 font-medium text-sm uppercase tracking-wider"
            >
              Shop
            </Link>
            <Link
              href="/gift-sets"
              className="text-gold-100 hover:text-gold-400 font-medium text-sm uppercase tracking-wider"
            >
              Gift Sets
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-gold-100 hover:text-gold-400">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/cart" className="text-gold-100 hover:text-gold-400 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-gold-600 text-navy-950 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
            <Button variant="gold" size="sm">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="text-gold-100 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-gold-600 text-navy-950 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold-100" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900 border-t border-gold-900/30"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gold-100 py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/our-story"
                  className="text-gold-100 py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  href="/shop"
                  className="text-gold-100 py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/gift-sets"
                  className="text-gold-100 py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Gift Sets
                </Link>
                <div className="pt-4">
                  <Button variant="gold" className="w-full">
                    Shop Now
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
