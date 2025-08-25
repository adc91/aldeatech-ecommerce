import { ECommerceFooter } from "@/components/common/footer"
import { ECommerceHeader } from "@/components/common/header"
import { Clock, Heart, Shield, Target, ThumbsUp, Truck } from "lucide-react"

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<ECommerceHeader />

			{/* Breadcrumb */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<nav className="text-sm text-gray-600">
						<span>Inicio</span> <span className="mx-2">&gt;</span>{" "}
						<span className="text-gray-900">Sobre AldeaTech</span>
					</nav>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre AldeaTech</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Somos una empresa comprometida con brindar la mejor experiencia de compra online, ofreciendo productos de
						calidad y un servicio excepcional.
					</p>
				</div>

				{/* Company Story */}
				<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
					<h2 className="text-3xl font-semibold text-gray-900 mb-6">Nuestra Historia</h2>
					<div className="prose prose-lg max-w-none text-gray-700">
						<p className="mb-4">
							AldeaTech nació en 2020 con la visión de democratizar el acceso a la tecnología y productos de calidad en
							Paraguay. Comenzamos como una pequeña tienda online y hemos crecido hasta convertirnos en una de las
							plataformas de e-commerce más confiables del país.
						</p>
						<p>
							Nuestro compromiso siempre ha sido ofrecer productos auténticos, precios justos y un servicio al cliente
							excepcional. Creemos que la tecnología debe estar al alcance de todos, y trabajamos cada día para hacer
							realidad esa visión.
						</p>
					</div>
				</div>

				{/* Mission, Vision, Values */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<div className="bg-white rounded-lg shadow-lg p-8 text-center">
						<Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Misión</h3>
						<p className="text-gray-600">
							Facilitar el acceso a productos de calidad a través de una plataforma confiable, segura y fácil de usar.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-lg p-8 text-center">
						<Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Visión</h3>
						<p className="text-gray-600">
							Ser la plataforma de e-commerce líder en Paraguay, reconocida por nuestra excelencia en servicio y
							calidad.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-lg p-8 text-center">
						<Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Valores</h3>
						<p className="text-gray-600">
							Integridad, transparencia, innovación y compromiso con la satisfacción de nuestros clientes.
						</p>
					</div>
				</div>

				{/* Team Section */}
				<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
					<h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
							<h3 className="text-xl font-semibold text-gray-900">María González</h3>
							<p className="text-emerald-600 mb-2">CEO & Fundadora</p>
							<p className="text-gray-600 text-sm">Líder visionaria con más de 10 años de experiencia en e-commerce.</p>
						</div>
						<div className="text-center">
							<div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
							<h3 className="text-xl font-semibold text-gray-900">Carlos Rodríguez</h3>
							<p className="text-emerald-600 mb-2">CTO</p>
							<p className="text-gray-600 text-sm">
								Experto en tecnología, responsable de nuestra plataforma innovadora.
							</p>
						</div>
						<div className="text-center">
							<div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
							<h3 className="text-xl font-semibold text-gray-900">Ana Martínez</h3>
							<p className="text-emerald-600 mb-2">Directora de Operaciones</p>
							<p className="text-gray-600 text-sm">
								Garantiza que cada pedido llegue perfectamente a nuestros clientes.
							</p>
						</div>
					</div>
				</div>

				{/* Timeline */}
				<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
					<h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Nuestros Hitos</h2>
					<div className="space-y-8">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900">2020 - Fundación</h3>
								<p className="text-gray-600">Lanzamiento de AldeaTech con 100 productos iniciales.</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900">2021 - Expansión</h3>
								<p className="text-gray-600">Alcanzamos 1,000 productos y 10,000 clientes satisfechos.</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900">2022 - Reconocimiento</h3>
								<p className="text-gray-600">Premio a la mejor plataforma de e-commerce del año.</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900">2023 - Innovación</h3>
								<p className="text-gray-600">Lanzamiento de nuestra app móvil y nuevas categorías.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Why Choose Us */}
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">¿Por qué elegirnos?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<Truck className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Envío Rápido</h3>
							<p className="text-gray-600 text-sm">Entrega en 24-48 horas en todo el país</p>
						</div>
						<div className="text-center">
							<Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Compra Segura</h3>
							<p className="text-gray-600 text-sm">Transacciones protegidas y datos seguros</p>
						</div>
						<div className="text-center">
							<Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
							<p className="text-gray-600 text-sm">Atención al cliente siempre disponible</p>
						</div>
						<div className="text-center">
							<ThumbsUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Garantía</h3>
							<p className="text-gray-600 text-sm">Productos con garantía y devoluciones fáciles</p>
						</div>
					</div>
				</div>
			</div>

			<ECommerceFooter />
		</div>
	)
}