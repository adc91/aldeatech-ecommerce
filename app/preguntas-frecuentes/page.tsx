"use client"

import { useState } from "react"
import { ECommerceHeader } from "@/components/e-commerce-header"
import { ECommerceFooter } from "@/components/e-commerce-footer"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

const faqData = [
  {
    category: "Envíos",
    questions: [
      {
        question: "¿Cuánto tiempo tarda en llegar mi pedido?",
        answer:
          "Los pedidos dentro de Asunción llegan en 24-48 horas. Para el interior del país, el tiempo de entrega es de 3-5 días hábiles.",
      },
      {
        question: "¿Cuál es el costo de envío?",
        answer:
          "El envío es gratuito para compras superiores a 200.000 Gs. Para compras menores, el costo es de 25.000 Gs dentro de Asunción y 35.000 Gs para el interior.",
      },
      {
        question: "¿Puedo cambiar la dirección de entrega después de realizar el pedido?",
        answer:
          "Sí, puedes cambiar la dirección de entrega contactándonos dentro de las 2 horas posteriores a la compra, siempre que el pedido no haya sido despachado.",
      },
      {
        question: "¿Realizan entregas los fines de semana?",
        answer:
          "Sí, realizamos entregas los sábados de 8:00 a 12:00. Los domingos no hay entregas, excepto para pedidos urgentes con costo adicional.",
      },
    ],
  },
  {
    category: "Devoluciones",
    questions: [
      {
        question: "¿Puedo devolver un producto si no me gusta?",
        answer:
          "Sí, tienes 30 días para devolver cualquier producto en perfecto estado. El producto debe estar en su empaque original y con todos los accesorios.",
      },
      {
        question: "¿Cómo inicio el proceso de devolución?",
        answer:
          "Puedes iniciar una devolución desde tu cuenta en 'Mis Pedidos' o contactándonos directamente. Te enviaremos las instrucciones y la etiqueta de envío.",
      },
      {
        question: "¿Cuándo recibiré mi reembolso?",
        answer:
          "Una vez que recibamos y procesemos tu devolución, el reembolso se realizará en 5-7 días hábiles al mismo método de pago utilizado.",
      },
      {
        question: "¿Puedo cambiar un producto por otro?",
        answer:
          "Sí, ofrecemos cambios por talla, color o modelo diferente. El proceso es similar a una devolución, pero más rápido.",
      },
    ],
  },
  {
    category: "Pagos",
    questions: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Aceptamos tarjetas de crédito y débito (Visa, Mastercard), transferencias bancarias, Tigo Money, Personal Pay y pago contra entrega.",
      },
      {
        question: "¿Es seguro pagar con tarjeta en su sitio?",
        answer:
          "Absolutamente. Utilizamos encriptación SSL de 256 bits y cumplimos con los estándares PCI DSS para garantizar la seguridad de tus datos.",
      },
      {
        question: "¿Puedo pagar en cuotas?",
        answer:
          "Sí, ofrecemos financiamiento en cuotas sin interés con tarjetas de crédito participantes. Las opciones varían según el monto de compra.",
      },
      {
        question: "¿Qué pasa si mi pago es rechazado?",
        answer:
          "Si tu pago es rechazado, verifica los datos de tu tarjeta o contacta a tu banco. También puedes intentar con otro método de pago.",
      },
    ],
  },
  {
    category: "Productos",
    questions: [
      {
        question: "¿Los productos tienen garantía?",
        answer:
          "Sí, todos nuestros productos tienen garantía del fabricante. La duración varía según el producto, desde 6 meses hasta 2 años.",
      },
      {
        question: "¿Cómo sé si un producto está disponible?",
        answer:
          "El stock se actualiza en tiempo real. Si puedes agregar el producto al carrito, está disponible. También mostramos la cantidad disponible.",
      },
      {
        question: "¿Puedo reservar un producto?",
        answer:
          "Sí, puedes reservar productos por hasta 48 horas realizando un pedido. Si no completas la compra, la reserva se libera automáticamente.",
      },
      {
        question: "¿Los precios incluyen IVA?",
        answer: "Sí, todos los precios mostrados en nuestro sitio incluyen IVA. No hay costos ocultos adicionales.",
      },
    ],
  },
  {
    category: "Cuenta",
    questions: [
      {
        question: "¿Necesito crear una cuenta para comprar?",
        answer:
          "No es obligatorio, pero recomendamos crear una cuenta para un seguimiento más fácil de tus pedidos y acceso a ofertas exclusivas.",
      },
      {
        question: "¿Cómo cambio mi contraseña?",
        answer:
          "Puedes cambiar tu contraseña desde 'Mi Cuenta' > 'Configuración' o usando la opción 'Olvidé mi contraseña' en el login.",
      },
      {
        question: "¿Puedo eliminar mi cuenta?",
        answer:
          "Sí, puedes solicitar la eliminación de tu cuenta contactándonos. Ten en cuenta que esto eliminará todo tu historial de compras.",
      },
      {
        question: "¿Cómo actualizo mis datos personales?",
        answer:
          "Puedes actualizar tus datos desde 'Mi Cuenta' > 'Información Personal'. Los cambios se guardan automáticamente.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <ECommerceHeader />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-600">
            <span>Inicio</span> <span className="mx-2">&gt;</span>{" "}
            <span className="text-gray-900">Preguntas Frecuentes</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-lg"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-emerald-600 text-white px-6 py-4">
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron preguntas que coincidan con tu búsqueda.</p>
            <p className="text-gray-400 mt-2">Intenta con otros términos o contacta con nuestro equipo de soporte.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-emerald-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿No encontraste lo que buscabas?</h3>
          <p className="text-gray-600 mb-4">
            Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta adicional.
          </p>
          <a
            href="/contactanos"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contactar Soporte
          </a>
        </div>
      </div>

      <ECommerceFooter />
    </div>
  )
}
