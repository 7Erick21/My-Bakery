"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en" | "ca"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.about": "Nosotros",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.order": "Hacer Pedido",

    // Hero
    "hero.title": "Horneado fresco",
    "hero.titleHighlight": " todos los días",
    "hero.description":
      "Descubre el sabor auténtico de nuestros panes artesanales, pasteles caseros y café recién molido. Cada producto está hecho con amor y los mejores ingredientes.",
    "hero.viewMenu": "Ver Menú",
    "hero.makeOrder": "Hacer Pedido",
    "hero.openHours": "Abierto 6AM - 8PM",
    "hero.location": "Centro de la ciudad",
    "hero.phone": "(555) 123-4567",
    "hero.statsProducts": "Más de 50",
    "hero.statsDescription": "Productos frescos diarios",

    // Products
    "products.title": "Nuestros Productos",
    "products.description":
      "Cada producto está elaborado con ingredientes frescos y técnicas tradicionales para ofrecerte la mejor experiencia gastronómica.",
    "products.artisanBread": "Pan Artesanal",
    "products.artisanBreadDesc": "Pan recién horneado con masa madre tradicional",
    "products.homemadeCakes": "Pasteles Caseros",
    "products.homemadeCakesDesc": "Deliciosos pasteles hechos con recetas familiares",
    "products.premiumCoffee": "Café Premium",
    "products.premiumCoffeeDesc": "Granos seleccionados y tostados en casa",
    "products.croissants": "Croissants",
    "products.croissantsDesc": "Croissants franceses con mantequilla artesanal",
    "products.muffins": "Muffins",
    "products.muffinsDesc": "Muffins esponjosos con frutas frescas",
    "products.gourmetCookies": "Galletas Gourmet",
    "products.gourmetCookiesDesc": "Galletas artesanales con chocolate belga",
    "products.from": "Desde",
    "products.mostPopular": "Más Popular",
    "products.specialty": "Especialidad",
    "products.new": "Nuevo",
    "products.favorite": "Favorito",

    // About
    "about.title": "Nuestra Historia",
    "about.description1":
      "My Bakery nació del sueño de compartir el auténtico sabor de la panadería tradicional. Desde 2003, hemos estado sirviendo a nuestra comunidad con productos frescos, elaborados con recetas que han pasado de generación en generación.",
    "about.description2":
      "Creemos que la buena comida une a las personas, y cada día trabajamos para crear momentos especiales a través de nuestros panes, pasteles y café excepcional.",
    "about.yearsExperience": "Años de experiencia",
    "about.uniqueProducts": "Productos únicos",
    "about.happyClients": "Clientes felices",
    "about.daysYear": "Días al año",
    "about.madeWithLove": "Hecho con Amor",
    "about.madeWithLoveDesc": "Cada producto está elaborado con pasión y dedicación por nuestros maestros panaderos.",
    "about.premiumQuality": "Calidad Premium",
    "about.premiumQualityDesc":
      "Utilizamos solo los mejores ingredientes locales y técnicas tradicionales de panadería.",
    "about.familyTradition": "Tradición Familiar",
    "about.familyTraditionDesc":
      "Somos una empresa familiar con más de 20 años de experiencia en el arte de la panadería.",
    "about.freshDaily": "Fresco Diariamente",
    "about.freshDailyDesc": "Todos nuestros productos se hornean frescos cada día para garantizar la mejor calidad.",

    // Testimonials
    "testimonials.title": "Lo que Dicen Nuestros Clientes",
    "testimonials.description":
      "La satisfacción de nuestros clientes es nuestra mayor recompensa. Aquí tienes algunas de sus experiencias con nosotros.",
    "testimonials.maria.role": "Cliente Regular",
    "testimonials.maria.content":
      "El mejor pan de la ciudad. Vengo aquí todas las mañanas por mi café y croissant. El servicio es excepcional y la calidad insuperable.",
    "testimonials.carlos.role": "Chef Local",
    "testimonials.carlos.content":
      "Como chef, aprecio la calidad de los ingredientes y la técnica. My Bakery es mi proveedor de confianza para eventos especiales.",
    "testimonials.ana.role": "Madre de Familia",
    "testimonials.ana.content":
      "Mis hijos adoran los muffins y yo el café. Es nuestro lugar favorito para el desayuno de los fines de semana. ¡Altamente recomendado!",

    // Contact
    "contact.title": "Contáctanos",
    "contact.description": "¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos aquí para ayudarte.",
    "contact.info": "Información de Contacto",
    "contact.address": "Dirección",
    "contact.addressValue": "Calle Principal 123\nCentro, Ciudad 12345",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.hours": "Horarios",
    "contact.hoursWeekdays": "Lunes - Viernes: 6:00 AM - 8:00 PM",
    "contact.hoursSaturday": "Sábados: 7:00 AM - 9:00 PM",
    "contact.hoursSunday": "Domingos: 7:00 AM - 6:00 PM",
    "contact.mapLocation": "Mapa de ubicación",
    "contact.sendMessage": "Envíanos un Mensaje",
    "contact.responseTime": "Te responderemos lo antes posible.",
    "contact.firstName": "Nombre",
    "contact.lastName": "Apellido",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos cómo podemos ayudarte...",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.description":
      "Horneando felicidad desde 2003. Productos frescos, sabores auténticos y momentos especiales.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.products": "Productos",
    "footer.contact": "Contacto",
    "footer.copyright": "© 2024 My Bakery. Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.order": "Order Now",

    // Hero
    "hero.title": "Fresh baked",
    "hero.titleHighlight": " every day",
    "hero.description":
      "Discover the authentic taste of our artisan breads, homemade cakes and freshly ground coffee. Each product is made with love and the finest ingredients.",
    "hero.viewMenu": "View Menu",
    "hero.makeOrder": "Order Now",
    "hero.openHours": "Open 6AM - 8PM",
    "hero.location": "Downtown",
    "hero.phone": "(555) 123-4567",
    "hero.statsProducts": "Over 50",
    "hero.statsDescription": "Fresh products daily",

    // Products
    "products.title": "Our Products",
    "products.description":
      "Each product is crafted with fresh ingredients and traditional techniques to offer you the best gastronomic experience.",
    "products.artisanBread": "Artisan Bread",
    "products.artisanBreadDesc": "Freshly baked bread with traditional sourdough",
    "products.homemadeCakes": "Homemade Cakes",
    "products.homemadeCakesDesc": "Delicious cakes made with family recipes",
    "products.premiumCoffee": "Premium Coffee",
    "products.premiumCoffeeDesc": "Selected beans roasted in-house",
    "products.croissants": "Croissants",
    "products.croissantsDesc": "French croissants with artisan butter",
    "products.muffins": "Muffins",
    "products.muffinsDesc": "Fluffy muffins with fresh fruits",
    "products.gourmetCookies": "Gourmet Cookies",
    "products.gourmetCookiesDesc": "Artisan cookies with Belgian chocolate",
    "products.from": "From",
    "products.mostPopular": "Most Popular",
    "products.specialty": "Specialty",
    "products.new": "New",
    "products.favorite": "Favorite",

    // About
    "about.title": "Our Story",
    "about.description1":
      "My Bakery was born from the dream of sharing the authentic taste of traditional baking. Since 2003, we have been serving our community with fresh products, made with recipes passed down from generation to generation.",
    "about.description2":
      "We believe that good food brings people together, and every day we work to create special moments through our exceptional breads, cakes and coffee.",
    "about.yearsExperience": "Years of experience",
    "about.uniqueProducts": "Unique products",
    "about.happyClients": "Happy clients",
    "about.daysYear": "Days a year",
    "about.madeWithLove": "Made with Love",
    "about.madeWithLoveDesc": "Each product is crafted with passion and dedication by our master bakers.",
    "about.premiumQuality": "Premium Quality",
    "about.premiumQualityDesc": "We use only the finest local ingredients and traditional baking techniques.",
    "about.familyTradition": "Family Tradition",
    "about.familyTraditionDesc": "We are a family business with over 20 years of experience in the art of baking.",
    "about.freshDaily": "Fresh Daily",
    "about.freshDailyDesc": "All our products are baked fresh every day to ensure the best quality.",

    // Testimonials
    "testimonials.title": "What Our Customers Say",
    "testimonials.description":
      "Our customers' satisfaction is our greatest reward. Here are some of their experiences with us.",
    "testimonials.maria.role": "Regular Customer",
    "testimonials.maria.content":
      "The best bread in town. I come here every morning for my coffee and croissant. The service is exceptional and the quality unbeatable.",
    "testimonials.carlos.role": "Local Chef",
    "testimonials.carlos.content":
      "As a chef, I appreciate the quality of ingredients and technique. My Bakery is my trusted supplier for special events.",
    "testimonials.ana.role": "Family Mother",
    "testimonials.ana.content":
      "My kids love the muffins and I love the coffee. It's our favorite place for weekend breakfast. Highly recommended!",

    // Contact
    "contact.title": "Contact Us",
    "contact.description": "Have any questions or want to place a special order? We're here to help.",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.addressValue": "Main Street 123\nDowntown, City 12345",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.hoursWeekdays": "Monday - Friday: 6:00 AM - 8:00 PM",
    "contact.hoursSaturday": "Saturday: 7:00 AM - 9:00 PM",
    "contact.hoursSunday": "Sunday: 7:00 AM - 6:00 PM",
    "contact.mapLocation": "Location map",
    "contact.sendMessage": "Send us a Message",
    "contact.responseTime": "We'll get back to you as soon as possible.",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us how we can help you...",
    "contact.send": "Send Message",

    // Footer
    "footer.description": "Baking happiness since 2003. Fresh products, authentic flavors and special moments.",
    "footer.quickLinks": "Quick Links",
    "footer.products": "Products",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 My Bakery. All rights reserved.",
  },
  ca: {
    // Header
    "nav.home": "Inici",
    "nav.products": "Productes",
    "nav.about": "Nosaltres",
    "nav.testimonials": "Testimonis",
    "nav.contact": "Contacte",
    "nav.order": "Fer Comanda",

    // Hero
    "hero.title": "Fornejat fresc",
    "hero.titleHighlight": " cada dia",
    "hero.description":
      "Descobreix el sabor autèntic dels nostres pans artesans, pastissos casolans i cafè acabat de moldre. Cada producte està fet amb amor i els millors ingredients.",
    "hero.viewMenu": "Veure Menú",
    "hero.makeOrder": "Fer Comanda",
    "hero.openHours": "Obert 6AM - 8PM",
    "hero.location": "Centre de la ciutat",
    "hero.phone": "(555) 123-4567",
    "hero.statsProducts": "Més de 50",
    "hero.statsDescription": "Productes frescos diaris",

    // Products
    "products.title": "Els Nostres Productes",
    "products.description":
      "Cada producte està elaborat amb ingredients frescos i tècniques tradicionals per oferir-te la millor experiència gastronòmica.",
    "products.artisanBread": "Pa Artesà",
    "products.artisanBreadDesc": "Pa acabat de fornejar amb massa mare tradicional",
    "products.homemadeCakes": "Pastissos Casolans",
    "products.homemadeCakesDesc": "Deliciosos pastissos fets amb receptes familiars",
    "products.premiumCoffee": "Cafè Premium",
    "products.premiumCoffeeDesc": "Grans seleccionats i torrats a casa",
    "products.croissants": "Croissants",
    "products.croissantsDesc": "Croissants francesos amb mantega artesana",
    "products.muffins": "Muffins",
    "products.muffinsDesc": "Muffins esponjosos amb fruites fresques",
    "products.gourmetCookies": "Galetes Gourmet",
    "products.gourmetCookiesDesc": "Galetes artesanes amb xocolata belga",
    "products.from": "Des de",
    "products.mostPopular": "Més Popular",
    "products.specialty": "Especialitat",
    "products.new": "Nou",
    "products.favorite": "Favorit",

    // About
    "about.title": "La Nostra Història",
    "about.description1":
      "My Bakery va néixer del somni de compartir el sabor autèntic de la fleca tradicional. Des del 2003, hem estat servint la nostra comunitat amb productes frescos, elaborats amb receptes que han passat de generació en generació.",
    "about.description2":
      "Creiem que el bon menjar uneix les persones, i cada dia treballem per crear moments especials a través dels nostres pans, pastissos i cafè excepcional.",
    "about.yearsExperience": "Anys d'experiència",
    "about.uniqueProducts": "Productes únics",
    "about.happyClients": "Clients contents",
    "about.daysYear": "Dies a l'any",
    "about.madeWithLove": "Fet amb Amor",
    "about.madeWithLoveDesc": "Cada producte està elaborat amb passió i dedicació pels nostres mestres flequers.",
    "about.premiumQuality": "Qualitat Premium",
    "about.premiumQualityDesc": "Utilitzem només els millors ingredients locals i tècniques tradicionals de fleca.",
    "about.familyTradition": "Tradició Familiar",
    "about.familyTraditionDesc": "Som una empresa familiar amb més de 20 anys d'experiència en l'art de la fleca.",
    "about.freshDaily": "Fresc Diàriament",
    "about.freshDailyDesc": "Tots els nostres productes es fornejen frescos cada dia per garantir la millor qualitat.",

    // Testimonials
    "testimonials.title": "El que Diuen els Nostres Clients",
    "testimonials.description":
      "La satisfacció dels nostres clients és la nostra major recompensa. Aquí tens algunes de les seves experiències amb nosaltres.",
    "testimonials.maria.role": "Client Habitual",
    "testimonials.maria.content":
      "El millor pa de la ciutat. Vinc aquí cada matí pel meu cafè i croissant. El servei és excepcional i la qualitat insuperable.",
    "testimonials.carlos.role": "Xef Local",
    "testimonials.carlos.content":
      "Com a xef, aprecio la qualitat dels ingredients i la tècnica. My Bakery és el meu proveïdor de confiança per esdeveniments especials.",
    "testimonials.ana.role": "Mare de Família",
    "testimonials.ana.content":
      "Els meus fills adoren els muffins i jo el cafè. És el nostre lloc favorit per esmorzar els caps de setmana. Molt recomanable!",

    // Contact
    "contact.title": "Contacta'ns",
    "contact.description": "Tens alguna pregunta o vols fer una comanda especial? Som aquí per ajudar-te.",
    "contact.info": "Informació de Contacte",
    "contact.address": "Adreça",
    "contact.addressValue": "Carrer Principal 123\nCentre, Ciutat 12345",
    "contact.phone": "Telèfon",
    "contact.email": "Email",
    "contact.hours": "Horaris",
    "contact.hoursWeekdays": "Dilluns - Divendres: 6:00 AM - 8:00 PM",
    "contact.hoursSaturday": "Dissabtes: 7:00 AM - 9:00 PM",
    "contact.hoursSunday": "Diumenges: 7:00 AM - 6:00 PM",
    "contact.mapLocation": "Mapa d'ubicació",
    "contact.sendMessage": "Envia'ns un Missatge",
    "contact.responseTime": "Et respondrem tan aviat com sigui possible.",
    "contact.firstName": "Nom",
    "contact.lastName": "Cognoms",
    "contact.message": "Missatge",
    "contact.messagePlaceholder": "Explica'ns com et podem ajudar...",
    "contact.send": "Enviar Missatge",

    // Footer
    "footer.description": "Fornejant felicitat des del 2003. Productes frescos, sabors autèntics i moments especials.",
    "footer.quickLinks": "Enllaços Ràpids",
    "footer.products": "Productes",
    "footer.contact": "Contacte",
    "footer.copyright": "© 2024 My Bakery. Tots els drets reservats.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "ca")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
