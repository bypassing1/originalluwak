import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GoldDivider } from "@/components/ui/gold-divider"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gold-100 border-t border-gold-900/30">
      <GoldDivider className="transform rotate-180" />
      <div className="container mx-auto px-3 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <Image
              src="/images/original-luwak-logo-gold.png"
              alt="Original Luwak"
              width={160}
              height={45}
              className="h-8 w-auto"
            />
            <p className="text-xs text-gold-200">
              Experience the world's most exclusive coffee. Ethically sourced from the heart of Indonesia.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/brewing-guides" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Brewing Guides
                </Link>
              </li>
              <li>
                <Link href="/halal-hygiene" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Halal & Hygiene
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/plantation" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Plantation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Information</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/shipping" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gold-200 hover:text-gold-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gold-200 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Newsletter</h3>
            <p className="text-xs mb-3 text-gold-200">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800 border-gold-900/50 text-gold-100 placeholder:text-gold-500/50 h-8 text-xs"
              />
              <Button variant="gold" size="sm" className="h-8 text-xs">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-900/30 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gold-400">
            &copy; {new Date().getFullYear()} Original Luwak. All rights reserved.
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <Mail className="h-3 w-3 mr-1 text-gold-400" />
            <span className="text-xs text-gold-400">info@originalluwak.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
