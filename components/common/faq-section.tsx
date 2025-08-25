'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, CreditCard, Edit3, Globe, HelpCircle, RotateCcw, Search, Truck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
	{
		icon: RotateCcw,
		iconColor: 'text-emerald-600',
		iconBg: 'bg-emerald-50',
		question: '¿Cuál es su política de devoluciones?',
		answer: 'Ofrecemos una política de devoluciones de 30 días para todos los artículos en su estado original. Simplemente contacte a nuestro equipo de servicio al cliente para iniciar una devolución y recibir una etiqueta de envío prepagada.',
	},
	{
		icon: Truck,
		iconColor: 'text-blue-600',
		iconBg: 'bg-blue-50',
		question: '¿Cuánto tiempo tarda el envío?',
		answer: 'El envío estándar tarda de 3 a 5 días hábiles dentro de Paraguay. Las opciones de envío exprés (1-2 días hábiles) y envío internacional también están disponibles al finalizar la compra.',
	},
	{
		icon: Globe,
		iconColor: 'text-purple-600',
		iconBg: 'bg-purple-50',
		question: '¿Ofrecen envío internacional?',
		answer: 'Sí, enviamos a más de 20 países en Latinoamérica. Los tiempos de envío internacional varían según el destino, típicamente de 7 a 14 días hábiles. Pueden aplicarse tarifas de aduana.',
	},
	{
		icon: Search,
		iconColor: 'text-orange-600',
		iconBg: 'bg-orange-50',
		question: '¿Cómo puedo rastrear mi pedido?',
		answer: 'Una vez que su pedido sea enviado, recibirá un número de seguimiento por correo electrónico. También puede rastrear su pedido iniciando sesión en su cuenta y viendo el historial de pedidos.',
	},
	{
		icon: CreditCard,
		iconColor: 'text-green-600',
		iconBg: 'bg-green-50',
		question: '¿Qué métodos de pago aceptan?',
		answer: 'Aceptamos todas las principales tarjetas de crédito (Visa, MasterCard, American Express), transferencias bancarias, efectivo contra entrega y los principales sistemas de pago digital de Paraguay.',
	},
	{
		icon: Edit3,
		iconColor: 'text-red-600',
		iconBg: 'bg-red-50',
		question: '¿Puedo modificar o cancelar mi pedido?',
		answer: 'Los pedidos pueden ser modificados o cancelados dentro de 1 hora después de realizarse. Después de eso, por favor contacte al servicio al cliente lo antes posible; haremos nuestro mejor esfuerzo para realizar cambios antes del envío.',
	},
];

export function FAQSection() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	return (
		<section className="py-16 bg-background">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
						<HelpCircle className="h-6 w-6 text-primary" />
						<span className="text-primary font-semibold">Resolvemos tus dudas</span>
					</div>
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
						Preguntas Frecuentes
					</h2>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
						Encuentre respuestas rápidas a las preguntas más comunes sobre nuestros
						productos, envíos, pagos y políticas de servicio.
					</p>
				</div>

				<div className="max-w-4xl mx-auto space-y-6">
					{faqData.map((faq, index) => {
						const IconComponent = faq.icon;
						return (
							<div
								key={index}
								className="border border-border rounded-xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] overflow-hidden"
							>
								<button
									onClick={() => toggleItem(index)}
									className="w-full px-8 py-6 text-left flex items-center gap-4 hover:bg-muted/30 transition-colors duration-200"
								>
									<div className={`flex-shrink-0 p-3 rounded-xl ${faq.iconBg} transition-colors duration-200`}>
										<IconComponent className={`w-6 h-6 ${faq.iconColor}`} />
									</div>
									<div className="flex-1">
										<h3 className="font-semibold text-foreground text-lg leading-tight">
											{faq.question}
										</h3>
									</div>
									<ChevronDown
										className={`w-6 h-6 text-muted-foreground transition-all duration-300 ${openItems.includes(index)
											? 'rotate-180 text-primary'
											: 'hover:text-primary'
											}`}
									/>
								</button>

								<div
									className={`transition-all duration-300 ease-in-out ${openItems.includes(index)
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
										}`}
								>
									<div className="px-8 pb-8 ml-2">
										<div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary/30">
											<p className="text-muted-foreground leading-relaxed text-base">
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Button to view all FAQs */}
				<div className="text-center mt-16">
					<div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 mb-8">
						<p className="text-muted-foreground mb-6 text-lg">
							¿No encontraste lo que buscabas? Tenemos muchas más respuestas para ti.
						</p>
						<Link href="/preguntas-frecuentes">
							<Button
								size="lg"
								className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
							>
								<HelpCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
								Ir a FAQs
								<ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
