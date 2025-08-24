"use client"

import { ECommerceFooter } from "@/components/common/footer"
import { ECommerceHeader } from "@/components/common/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, CreditCard, HelpCircle, Mail, Package, Phone, RotateCcw, Search, Truck, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Configuración de iconos y colores para cada categoría
const categoryConfig = {
	"Envíos": { icon: Truck, iconColor: "text-blue-600", iconBg: "bg-blue-50", headerBg: "bg-blue-600" },
	"Devoluciones": { icon: RotateCcw, iconColor: "text-emerald-600", iconBg: "bg-emerald-50", headerBg: "bg-emerald-600" },
	"Pagos": { icon: CreditCard, iconColor: "text-green-600", iconBg: "bg-green-50", headerBg: "bg-green-600" },
	"Productos": { icon: Package, iconColor: "text-orange-600", iconBg: "bg-orange-50", headerBg: "bg-orange-600" },
	"Cuenta": { icon: User, iconColor: "text-purple-600", iconBg: "bg-purple-50", headerBg: "bg-purple-600" }
}

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
		<div className="min-h-screen bg-background">
			<ECommerceHeader />

			{/* Breadcrumb */}
			<div className="bg-white border-b border-border">
				<div className="max-w-6xl mx-auto px-4 py-4">
					<nav className="text-sm text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							Inicio
						</Link>{" "}
						<span className="mx-2">&gt;</span>{" "}
						<span className="text-foreground font-medium">Preguntas Frecuentes</span>
					</nav>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-4 py-16">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
						<HelpCircle className="h-6 w-6 text-primary" />
						<span className="text-primary font-semibold">Centro de Ayuda</span>
					</div>
					<h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
						Preguntas Frecuentes
					</h1>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
						Encuentra respuestas detalladas a las preguntas más comunes sobre nuestros productos,
						servicios, envíos y políticas. Todo lo que necesitas saber para una experiencia de compra perfecta.
					</p>
				</div>

				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-12">
					<div className="relative group">
						<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors duration-200 group-focus-within:text-primary" />
						<Input
							type="text"
							placeholder="Buscar en preguntas frecuentes..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-12 pr-6 py-4 w-full bg-white/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 placeholder:text-muted-foreground/80"
						/>
					</div>
				</div>

				{/* FAQ Categories */}
				<div className="space-y-8">
					{filteredFAQs.map((category, categoryIndex) => {
						const config = categoryConfig[category.category as keyof typeof categoryConfig]
						const IconComponent = config?.icon || HelpCircle

						return (
							<div key={categoryIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50">
								{/* Category Header */}
								<div className={`${config?.headerBg || 'bg-primary'} text-white px-8 py-6`}>
									<div className="flex items-center gap-4">
										<div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
											<IconComponent className="h-6 w-6" />
										</div>
										<div>
											<h2 className="text-xl font-semibold">{category.category}</h2>
											<p className="text-white/80 text-sm">
												{category.questions.length} pregunta{category.questions.length !== 1 ? 's' : ''}
											</p>
										</div>
									</div>
								</div>

								{/* Questions */}
								<div className="divide-y divide-border/50">
									{category.questions.map((faq, faqIndex) => {
										const itemId = `${categoryIndex}-${faqIndex}`
										const isOpen = openItems.includes(itemId)

										return (
											<div key={faqIndex}>
												<button
													onClick={() => toggleItem(itemId)}
													className="w-full px-8 py-6 text-left flex items-center gap-4 hover:bg-muted/30 focus:outline-none focus:bg-muted/30 transition-all duration-200 group"
												>
													<div className={`flex-shrink-0 p-3 rounded-xl ${config?.iconBg || 'bg-primary/10'} transition-colors duration-200`}>
														<IconComponent className={`w-5 h-5 ${config?.iconColor || 'text-primary'}`} />
													</div>
													<div className="flex-1">
														<h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors duration-200">
															{faq.question}
														</h3>
													</div>
													<ChevronDown
														className={`w-6 h-6 text-muted-foreground transition-all duration-300 ${isOpen
																? 'rotate-180 text-primary'
																: 'group-hover:text-primary'
															}`}
													/>
												</button>

												<div
													className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen
															? 'max-h-96 opacity-100'
															: 'max-h-0 opacity-0'
														}`}
												>
													<div className="px-8 pb-8 ml-16">
														<div className="bg-muted/20 rounded-xl p-6 border-l-4 border-primary/30">
															<p className="text-muted-foreground leading-relaxed text-base">
																{faq.answer}
															</p>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>

				{/* No Results */}
				{filteredFAQs.length === 0 && searchTerm && (
					<div className="text-center py-16">
						<div className="bg-white rounded-2xl shadow-lg p-12 border border-border/50">
							<HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
							<h3 className="text-xl font-semibold text-foreground mb-4">
								No se encontraron preguntas
							</h3>
							<p className="text-muted-foreground text-lg mb-2">
								No hay preguntas que coincidan con tu búsqueda: <strong>"{searchTerm}"</strong>
							</p>
							<p className="text-muted-foreground mb-8">
								Intenta con otros términos o contacta con nuestro equipo de soporte.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									onClick={() => setSearchTerm("")}
									variant="outline"
								>
									Limpiar búsqueda
								</Button>
								<Link href="/contactanos">
									<Button className="bg-primary hover:bg-primary/90">
										Contactar Soporte
									</Button>
								</Link>
							</div>
						</div>
					</div>
				)}

				{/* Contact CTA */}
				<div className="mt-16">
					<div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 text-center border border-border/50">
						<div className="mb-6">
							<div className="flex justify-center gap-4 mb-4">
								<div className="p-3 bg-primary/10 rounded-xl">
									<Phone className="h-6 w-6 text-primary" />
								</div>
								<div className="p-3 bg-primary/10 rounded-xl">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div className="p-3 bg-primary/10 rounded-xl">
									<HelpCircle className="h-6 w-6 text-primary" />
								</div>
							</div>
							<h3 className="text-2xl font-semibold text-foreground mb-4">
								¿Necesitas ayuda personalizada?
							</h3>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
								Nuestro equipo de soporte especializado está disponible para resolver todas tus dudas
								y brindarte la mejor experiencia de compra.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contactanos">
								<Button
									size="lg"
									className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
								>
									<Phone className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									Contactar Soporte
								</Button>
							</Link>
							<Link href="mailto:soporte@aldeatech.co">
								<Button
									variant="outline"
									size="lg"
									className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
								>
									<Mail className="mr-3 h-5 w-5" />
									Enviar Email
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<ECommerceFooter />
		</div>
	)
}
