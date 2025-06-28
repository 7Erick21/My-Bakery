import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Pan Artesanal",
    description: "Pan recién horneado con masa madre tradicional",
    price: "Desde $3.50",
    image: "/placeholder.svg?height=300&width=300",
    badge: "Más Popular",
  },
  {
    name: "Pasteles Caseros",
    description: "Deliciosos pasteles hechos con recetas familiares",
    price: "Desde $15.00",
    image: "/placeholder.svg?height=300&width=300",
    badge: "Especialidad",
  },
  {
    name: "Café Premium",
    description: "Granos seleccionados y tostados en casa",
    price: "Desde $4.00",
    image: "/placeholder.svg?height=300&width=300",
    badge: "Nuevo",
  },
  {
    name: "Croissants",
    description: "Croissants franceses con mantequilla artesanal",
    price: "Desde $2.50",
    image: "/placeholder.svg?height=300&width=300",
    badge: "",
  },
  {
    name: "Muffins",
    description: "Muffins esponjosos con frutas frescas",
    price: "Desde $3.00",
    image: "/placeholder.svg?height=300&width=300",
    badge: "",
  },
  {
    name: "Galletas Gourmet",
    description: "Galletas artesanales con chocolate belga",
    price: "Desde $1.50",
    image: "/placeholder.svg?height=300&width=300",
    badge: "Favorito",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada producto está elaborado con ingredientes frescos y técnicas tradicionales para ofrecerte la mejor
            experiencia gastronómica.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700">{product.badge}</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-lg font-bold text-amber-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
