"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coffee } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b shadow-sm"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-amber-100 dark:border-amber-900/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Coffee className="h-8 w-8 text-amber-600 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-2xl font-bold text-amber-900 dark:text-amber-100 transition-colors duration-300">
              My Bakery
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#inicio", key: "nav.home" },
              { href: "#productos", key: "nav.products" },
              { href: "#nosotros", key: "nav.about" },
              { href: "#testimonios", key: "nav.testimonials" },
              { href: "#contacto", key: "nav.contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-all duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <div className="hidden md:block">
              <Button className="transition-all duration-300 hover:scale-105 hover:shadow-lg">{t("nav.order")}</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            {[
              { href: "#inicio", key: "nav.home" },
              { href: "#productos", key: "nav.products" },
              { href: "#nosotros", key: "nav.about" },
              { href: "#testimonios", key: "nav.testimonials" },
              { href: "#contacto", key: "nav.contact" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-all duration-300 hover:bg-amber-50 dark:hover:bg-amber-950/20 rounded-md"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full transition-all duration-300 hover:scale-105">{t("nav.order")}</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
