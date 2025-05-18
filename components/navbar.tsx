"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

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
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/original-luwak-logo-gold.png"
              alt="Original Luwak"
              width={160}
              height={45}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gold-100 hover:text-gold-400 font-medium text-xs uppercase tracking-wider">
              {t("nav.home")}
            </Link>
            <Link
              href="/our-story"
              className="text-gold-100 hover:text-gold-400 font-medium text-xs uppercase tracking-wider"
            >
              {t("nav.our_story")}
            </Link>
            <Link
              href="/shop"
              className="text-gold-100 hover:text-gold-400 font-medium text-xs uppercase tracking-wider"
            >
              {t("nav.shop")}
            </Link>
            <Link
              href="/gift-sets"
              className="text-gold-100 hover:text-gold-400 font-medium text-xs uppercase tracking-wider"
            >
              {t("nav.gift_sets")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <button aria-label="Search" className="text-gold-100 hover:text-gold-400">
              <Search className="h-4 w-4" />
            </button>
            <Link href="/cart" className="text-gold-100 hover:text-gold-400 relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1.5 -right-1.5 bg-gold-600 text-navy-950 text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
            <Button variant="gold" size="sm" className="text-xs h-7 px-3">
              {t("nav.shop_now")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link href="/cart" className="text-gold-100 relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1.5 -right-1.5 bg-gold-600 text-navy-950 text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold-100" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            <div className="container mx-auto px-3 py-3">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-gold-100 py-1.5 text-xs uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/our-story"
                  className="text-gold-100 py-1.5 text-xs uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.our_story")}
                </Link>
                <Link
                  href="/shop"
                  className="text-gold-100 py-1.5 text-xs uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.shop")}
                </Link>
                <Link
                  href="/gift-sets"
                  className="text-gold-100 py-1.5 text-xs uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.gift_sets")}
                </Link>
                <div className="pt-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gold-100 text-xs uppercase tracking-wider">{t("nav.language")}</span>
                    <LanguageSwitcher />
                  </div>
                  <Button variant="gold" size="sm" className="w-full text-xs">
                    {t("nav.shop_now")}
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
