"use client"

import { useLanguage } from "@/context/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-full border-gold-900/30 text-gold-400 hover:text-gold-300 hover:border-gold-300"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-navy-800 border-gold-900/30 text-gold-100">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === "en" ? "text-gold-400" : "text-gold-200"}`}
        >
          <span className="h-4 w-6 rounded overflow-hidden flex-shrink-0">🇺🇸</span>
          <span>English</span>
          {language === "en" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("id")}
          className={`flex items-center gap-2 ${language === "id" ? "text-gold-400" : "text-gold-200"}`}
        >
          <span className="h-4 w-6 rounded overflow-hidden flex-shrink-0">🇮🇩</span>
          <span>Indonesia</span>
          {language === "id" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
