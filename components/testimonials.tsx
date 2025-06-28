import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Regular",
    content:
      "El mejor pan de la ciudad. Vengo aquí todas las mañanas por mi café y croissant. El servicio es excepcional y la calidad insuperable.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Rodríguez",
    role: "Chef Local",
    content:
      "Como chef, aprecio la calidad de los ingredientes y la técnica. My Bakery es mi proveedor de confianza para eventos especiales.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Martínez",
    role: "Madre de Familia",
    content:
      "Mis hijos adoran los muffins y yo el café. Es nuestro lugar favorito para el desayuno de los fines de semana. ¡Altamente recomendado!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Aquí tienes algunas de sus experiencias
            con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
