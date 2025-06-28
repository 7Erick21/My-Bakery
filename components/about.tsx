import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada producto está elaborado con pasión y dedicación por nuestros maestros panaderos.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Utilizamos solo los mejores ingredientes locales y técnicas tradicionales de panadería.",
  },
  {
    icon: Users,
    title: "Tradición Familiar",
    description: "Somos una empresa familiar con más de 20 años de experiencia en el arte de la panadería.",
  },
  {
    icon: Clock,
    title: "Fresco Diariamente",
    description: "Todos nuestros productos se hornean frescos cada día para garantizar la mejor calidad.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                My Bakery nació del sueño de compartir el auténtico sabor de la panadería tradicional. Desde 2003, hemos
                estado sirviendo a nuestra comunidad con productos frescos, elaborados con recetas que han pasado de
                generación en generación.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creemos que la buena comida une a las personas, y cada día trabajamos para crear momentos especiales a
                través de nuestros panes, pasteles y café excepcional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">20+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-gray-600">Productos únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">1000+</div>
                <div className="text-gray-600">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">365</div>
                <div className="text-gray-600">Días al año</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
