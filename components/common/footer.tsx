import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react';

export function ECommerceFooter() {
	return (
		<footer className="bg-slate-900 text-white">
			{/* Fila de Contacto */}
			<div className="border-b border-slate-700">
				<div className="max-w-6xl mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
						<div className="flex items-center gap-2">
							<Phone className="w-4 h-4" />
							<span>+1 (555) 123-4567</span>
						</div>
						<div className="hidden md:block text-slate-400">|</div>
						<div className="flex items-center gap-2">
							<Mail className="w-4 h-4" />
							<span>soporte@aldeatech.co</span>
						</div>
						<div className="hidden md:block text-slate-400">|</div>
						<div className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span>
								123 Calle Comercio, Ciudad Empresarial, BC 12345
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Contenido Principal del Footer */}
			<div className="max-w-6xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					{/* Sección del Logo */}
					<div>
						<h2 className="font-serif text-2xl font-bold mb-4">
							AldeaTech E-Commerce
						</h2>
						<p className="text-slate-300 text-sm leading-relaxed max-w-md">
							Tu socio de confianza para productos de calidad y un
							servicio excepcional. Estamos comprometidos a
							ofrecer la mejor experiencia de compra.
						</p>
					</div>

					{/* Enlaces de la Empresa */}
					<div className="md:text-right">
						<h3 className="font-semibold text-lg mb-4">Empresa</h3>
						<nav className="space-y-2">
							<a
								href="/nosotros"
								className="block text-slate-300 hover:text-white transition-colors duration-200"
							>
								La Empresa
							</a>
							<a
								href="/contactanos"
								className="block text-slate-300 hover:text-white transition-colors duration-200"
							>
								Contacto
							</a>
							<a
								href="/preguntas-frecuentes"
								className="block text-slate-300 hover:text-white transition-colors duration-200"
							>
								Preguntas Frecuentes
							</a>
						</nav>
					</div>
				</div>

				{/* Iconos de Redes Sociales */}
				<div className="mt-8 pt-8 border-t border-slate-700">
					<div className="flex justify-center space-x-6">
						<a
							href="#"
							className="text-slate-400 hover:text-white transition-colors duration-200"
							aria-label="Instagram"
						>
							<Instagram className="w-6 h-6" />
						</a>
						<a
							href="#"
							className="text-slate-400 hover:text-white transition-colors duration-200"
							aria-label="Facebook"
						>
							<Facebook className="w-6 h-6" />
						</a>
						<a
							href="#"
							className="text-slate-400 hover:text-white transition-colors duration-200"
							aria-label="Twitter"
						>
							<Twitter className="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>

			{/* Fila Inferior */}
			<div className="border-t border-slate-700 bg-slate-950">
				<div className="max-w-6xl mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
						<div>© {new Date().getFullYear()} AldeaTech E-Commerce</div>
						<div className="flex flex-wrap items-center gap-4">
							<a
								href="/terms"
								className="hover:text-white transition-colors duration-200"
							>
								Términos y Condiciones
							</a>
							<span className="hidden md:inline">|</span>
							<a
								href="/privacy"
								className="hover:text-white transition-colors duration-200"
							>
								Política de Privacidad
							</a>
							<span className="hidden md:inline">|</span>
							<a
								href="https://aldeatech.co"
								target="_blank"
								className="hover:text-white transition-colors duration-200"
							>
								Desarrollado por Aldeatech
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
