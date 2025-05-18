"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "id"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations for both languages
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.our_story": "Our Story",
    "nav.shop": "Shop",
    "nav.gift_sets": "Gift Sets",
    "nav.shop_now": "Shop Now",

    // Footer
    "footer.quick_links": "Quick Links",
    "footer.information": "Information",
    "footer.newsletter": "Newsletter",
    "footer.newsletter_desc": "Subscribe to receive updates, access to exclusive deals, and more.",
    "footer.subscribe": "Subscribe",
    "footer.all_rights_reserved": "All rights reserved.",

    // Home page
    "home.hero.title": "DISCOVER THE RICH TASTE OF INDONESIA",
    "home.hero.subtitle":
      "Welcome to Original Luwak, where the ancient tradition of Luwak Coffee meets modern-day passion for the finest coffee in the world. Grown in the lush landscapes of Indonesia, our premium Civet Coffee offers an unparalleled taste that's rich, smooth, and unforgettable.",
    "home.hero.shop_now": "Shop Now",
    "home.hero.our_story": "Our Story",

    "home.what_is.pre_title": "LUWAK COFFEE",
    "home.what_is.title": "WHAT IS LUWAK COFFEE?",
    "home.what_is.subtitle": "WORLD'S RAREST & MOST EXPENSIVE COFFEE",
    "home.what_is.description1":
      "Luwak Coffee, also known as Wild Civet Coffee, is one of the rarest and most exquisite coffee varieties in the world. This unique coffee is produced by the wild civet, a small mammal native to Southeast Asia. The process starts when the wild civet eats the ripest coffee cherries, which then pass through its digestive system. What makes this process so special is how the cherries are fermented inside the civet's stomach, imparting a unique flavor profile that cannot be replicated elsewhere.",
    "home.what_is.description2":
      "The beans are then carefully handpicked from the wild civet's droppings, cleaned, and roasted to perfection, ensuring a cup of coffee that is truly extraordinary.",
    "home.what_is.watch_wild": "Watch Wild Luwak Video",
    "home.what_is.watch_foraging": "Watch Foraging Video",

    "home.production.title": "THE ART OF LUWAK COFFEE PRODUCTION",
    "home.production.subtitle": "A TRADITION PASSED DOWN THROUGH GENERATIONS",

    "home.why_choose.title": "WHY CHOOSE OUR LUWAK COFFEE?",
    "home.why_choose.subtitle": "UNPARALLELED QUALITY AND TASTE",
    "home.why_choose.flavor.title": "Authentic Indonesian Flavor",
    "home.why_choose.flavor.desc":
      "Experience the true essence of Indonesian coffee with every sip. Our Civet Coffee offers a rich, velvety flavor with notes of chocolate, caramel, and a hint of spice.",
    "home.why_choose.eco.title": "Eco-Friendly and Sustainable",
    "home.why_choose.eco.desc":
      "We work with local farmers who practice sustainable farming methods, ensuring that the production of Luwak Coffee benefits both the environment and the communities that rely on it.",
    "home.why_choose.rare.title": "Rare and Exclusive",
    "home.why_choose.rare.desc":
      "Due to its labor-intensive production process, Luwak Coffee is a rare treasure. Each cup is an indulgence that connects you with Indonesia's rich coffee heritage.",
    "home.why_choose.gift.title": "Perfect for Gifting",
    "home.why_choose.gift.desc":
      "Our beautifully packaged Luwak Coffee makes a perfect gift for coffee connoisseurs or anyone who appreciates high-quality, unique coffee.",

    "home.products.luxury": "Luxury in Every Cup",
    "home.products.title": "OUR PREMIUM PRODUCTS",
    "home.products.subtitle": "CRAFTED WITH PASSION AND EXPERTISE",
    "home.products.featured": "Featured Collection",
    "home.products.limited": "Limited Edition",
    "home.products.discover": "Discover Now",
    "home.products.view_all": "View All Products",

    "home.cta.title": "TASTE THE LEGACY OF LUWAK COFFEE",
    "home.cta.subtitle":
      "Ready to experience coffee like never before? Taste the rich, unique flavor of Indonesia's most exclusive coffee — Luwak Coffee.",
    "home.cta.order": "ORDER NOW",
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.our_story": "Kisah Kami",
    "nav.shop": "Belanja",
    "nav.gift_sets": "Paket Hadiah",
    "nav.shop_now": "Beli Sekarang",

    // Footer
    "footer.quick_links": "Tautan Cepat",
    "footer.information": "Informasi",
    "footer.newsletter": "Langganan Berita",
    "footer.newsletter_desc": "Berlangganan untuk menerima info terbaru, akses ke penawaran eksklusif, dan lainnya.",
    "footer.subscribe": "Berlangganan",
    "footer.all_rights_reserved": "Hak Cipta Dilindungi.",

    // Home page
    "home.hero.title": "RASAKAN NIKMATNYA KOPI INDONESIA",
    "home.hero.subtitle":
      "Selamat datang di Original Luwak, di mana tradisi kuno Kopi Luwak bertemu dengan gairah modern untuk kopi terbaik di dunia. Ditanam di lanskap subur Indonesia, Kopi Luwak premium kami menawarkan rasa yang tak tertandingi - kaya, lembut, dan tak terlupakan.",
    "home.hero.shop_now": "Beli Sekarang",
    "home.hero.our_story": "Kisah Kami",

    "home.what_is.pre_title": "KOPI LUWAK",
    "home.what_is.title": "APA ITU KOPI LUWAK?",
    "home.what_is.subtitle": "KOPI PALING LANGKA & MAHAL DI DUNIA",
    "home.what_is.description1":
      "Kopi Luwak, juga dikenal sebagai Kopi Liar Musang, adalah salah satu varietas kopi paling langka dan istimewa di dunia. Kopi unik ini diproduksi oleh musang liar, mamalia kecil yang asli dari Asia Tenggara. Proses dimulai ketika musang liar memakan buah kopi yang paling matang, yang kemudian melewati sistem pencernaannya. Yang membuat proses ini begitu istimewa adalah bagaimana biji kopi difermentasi di dalam perut musang, memberikan profil rasa unik yang tidak bisa direplikasi di tempat lain.",
    "home.what_is.description2":
      "Biji-biji tersebut kemudian dipilih dengan hati-hati dari kotoran musang liar, dibersihkan, dan dipanggang hingga sempurna, memastikan secangkir kopi yang benar-benar luar biasa.",
    "home.what_is.watch_wild": "Tonton Video Luwak Liar",
    "home.what_is.watch_foraging": "Tonton Video Mencari Makan",

    "home.production.title": "SENI PRODUKSI KOPI LUWAK",
    "home.production.subtitle": "TRADISI YANG DITURUNKAN DARI GENERASI KE GENERASI",

    "home.why_choose.title": "MENGAPA MEMILIH KOPI LUWAK KAMI?",
    "home.why_choose.subtitle": "KUALITAS DAN RASA YANG TAK TERTANDINGI",
    "home.why_choose.flavor.title": "Rasa Autentik Indonesia",
    "home.why_choose.flavor.desc":
      "Rasakan esensi sejati kopi Indonesia dengan setiap tegukan. Kopi Luwak kami menawarkan rasa yang kaya, lembut dengan sentuhan cokelat, karamel, dan sedikit rempah.",
    "home.why_choose.eco.title": "Ramah Lingkungan dan Berkelanjutan",
    "home.why_choose.eco.desc":
      "Kami bekerja dengan petani lokal yang mempraktikkan metode pertanian berkelanjutan, memastikan bahwa produksi Kopi Luwak menguntungkan lingkungan dan masyarakat yang bergantung padanya.",
    "home.why_choose.rare.title": "Langka dan Eksklusif",
    "home.why_choose.rare.desc":
      "Karena proses produksinya yang membutuhkan banyak tenaga kerja, Kopi Luwak adalah harta langka. Setiap cangkir adalah kemewahan yang menghubungkan Anda dengan warisan kopi Indonesia yang kaya.",
    "home.why_choose.gift.title": "Sempurna untuk Hadiah",
    "home.why_choose.gift.desc":
      "Kopi Luwak kami yang dikemas dengan indah menjadi hadiah sempurna bagi penikmat kopi atau siapa pun yang menghargai kopi berkualitas tinggi dan unik.",

    "home.products.luxury": "Kemewahan dalam Setiap Cangkir",
    "home.products.title": "PRODUK PREMIUM KAMI",
    "home.products.subtitle": "DIBUAT DENGAN PASSION DAN KEAHLIAN",
    "home.products.featured": "Koleksi Unggulan",
    "home.products.limited": "Edisi Terbatas",
    "home.products.discover": "Jelajahi Sekarang",
    "home.products.view_all": "Lihat Semua Produk",

    "home.cta.title": "RASAKAN WARISAN KOPI LUWAK",
    "home.cta.subtitle":
      "Siap merasakan kopi seperti belum pernah sebelumnya? Nikmati rasa kaya dan unik dari kopi paling eksklusif Indonesia — Kopi Luwak.",
    "home.cta.order": "PESAN SEKARANG",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
