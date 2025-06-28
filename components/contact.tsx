import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">
                      Calle Principal 123
                      <br />
                      Centro, Ciudad 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@mybakery.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Viernes: 6:00 AM - 8:00 PM</p>
                      <p>Sábados: 7:00 AM - 9:00 PM</p>
                      <p>Domingos: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mapa de ubicación</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Envíanos un Mensaje</h3>
                  <p className="text-gray-600">Te responderemos lo antes posible.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
