"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coffee } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-900">My Bakery</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-amber-600 transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-amber-600 transition-colors">
              Nosotros
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-amber-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Hacer Pedido</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#testimonios"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Hacer Pedido</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
