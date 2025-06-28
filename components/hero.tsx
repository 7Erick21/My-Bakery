import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Phone, Coffee } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Horneado fresco
                <span className="text-amber-600"> todos los días</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre el sabor auténtico de nuestros panes artesanales, pasteles caseros y café recién molido. Cada
                producto está hecho con amor y los mejores ingredientes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Ver Menú
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              >
                Hacer Pedido
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5 text-amber-600" />
                <span className="text-sm">Abierto 6AM - 8PM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-sm">Centro de la ciudad</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Panadería My Bakery con productos frescos"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Más de 50</p>
                  <p className="text-sm text-gray-600">Productos frescos diarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
