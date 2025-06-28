import { Coffee, Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">My Bakery</span>
            </div>
            <p className="text-gray-400">
              Horneando felicidad desde 2003. Productos frescos, sabores auténticos y momentos especiales.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Productos</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Pan Artesanal</span>
              </li>
              <li>
                <span className="text-gray-400">Pasteles Caseros</span>
              </li>
              <li>
                <span className="text-gray-400">Café Premium</span>
              </li>
              <li>
                <span className="text-gray-400">Croissants</span>
              </li>
              <li>
                <span className="text-gray-400">Muffins</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                Calle Principal 123
                <br />
                Centro, Ciudad 12345
              </p>
              <p>(555) 123-4567</p>
              <p>info@mybakery.com</p>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Lun - Vie: 6:00 AM - 8:00 PM</p>
              <p>Sáb: 7:00 AM - 9:00 PM</p>
              <p>Dom: 7:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 My Bakery. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
