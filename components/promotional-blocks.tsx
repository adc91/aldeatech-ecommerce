'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function PromotionalBlocks() {
	return (
		<section className="max-w-6xl mx-auto px-4 py-16">
			<div className="grid md:grid-cols-2 gap-6">
				{/* Smartphones Block */}
				<div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
						style={{
							backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.9)), url('/placeholder-0ft80.png')`,
						}}
					/>
					<div className="relative h-full flex flex-col justify-center items-start p-8 text-white">
						<h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
							Últimos Smartphones
						</h3>
						<p className="font-source text-lg mb-6 opacity-90 max-w-sm">
							Descubre tecnología de punta con nuestra colección
							premium de smartphones
						</p>
						<Button
							variant="secondary"
							size="lg"
							className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1"
						>
							Comprar Ahora
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>

				{/* TVs Block */}
				<div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
						style={{
							backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9)), url('/modern-smart-tv-entertainment-center.png')`,
						}}
					/>
					<div className="relative h-full flex flex-col justify-center items-start p-8 text-white">
						<h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
							Smart TVs y Entretenimiento
						</h3>
						<p className="font-source text-lg mb-6 opacity-90 max-w-sm">
							Transforma tu hogar con nuestros sistemas de
							entretenimiento premium
						</p>
						<Button
							variant="secondary"
							size="lg"
							className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1"
						>
							Explorar TVs
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
