'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
	{
		id: 1,
		title: 'Auriculares inalámbricos',
		price: '$199.99',
		image: '/placeholder-z6vnr.png',
	},
	{
		id: 2,
		title: 'Reloj inteligente',
		price: '$299.99',
		image: '/placeholder-3jbw8.png',
	},
	{
		id: 3,
		title: 'Soporte para laptop',
		price: '$79.99',
		image: '/aluminum-laptop-stand.png',
	},
	{
		id: 4,
		title: 'Cafetera',
		price: '$149.99',
		image: '/sleek-coffee-maker-kitchen.png',
	},
	{
		id: 5,
		title: 'Lámpara de escritorio',
		price: '$89.99',
		image: '/modern-led-desk-lamp.png',
	},
	{
		id: 6,
		title: 'Altavoz Bluetooth',
		price: '$129.99',
		image: '/placeholder-8gfyn.png',
	},
];

export function FeaturedProducts() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerView = 3;
	const maxIndex = Math.max(0, products.length - itemsPerView);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	return (
		<section className="w-full">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-foreground mb-4">
					Productos Destacados
				</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					Descubre nuestra selección cuidadosamente elegida de
					productos en tendencia con las mejores ofertas
				</p>
			</div>

			<div className="relative">
				{/* Botones de Navegación */}
				<Button
					variant="outline"
					size="icon"
					className={cn(
						'absolute left-0 top-1/2 -translate-y-1/2 z-10',
						'bg-card/80 backdrop-blur-sm border-border',
						'hover:bg-primary hover:text-primary-foreground',
						'transition-all duration-300'
					)}
					onClick={prevSlide}
					disabled={currentIndex === 0}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				<Button
					variant="outline"
					size="icon"
					className={cn(
						'absolute right-0 top-1/2 -translate-y-1/2 z-10',
						'bg-card/80 backdrop-blur-sm border-border',
						'hover:bg-primary hover:text-primary-foreground',
						'transition-all duration-300'
					)}
					onClick={nextSlide}
					disabled={currentIndex >= maxIndex}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>

				{/* Contenedor de Productos */}
				<div className="overflow-hidden mx-12">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							transform: `translateX(-${currentIndex * (100 / itemsPerView)
								}%)`,
						}}
					>
						{products.map((product) => (
							<div
								key={product.id}
								className="w-1/3 flex-shrink-0 px-3"
							>
								<Card
									className={cn(
										'group cursor-pointer overflow-hidden border-border',
										'transition-all duration-300 ease-in-out',
										'hover:scale-105 hover:shadow-lg hover:shadow-primary/10'
									)}
								>
									<CardContent className="p-0">
										<div className="relative overflow-hidden">
											<img
												src={
													product.image ||
													'/placeholder.svg'
												}
												alt={product.title}
												className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
													Vista Rápida
												</Button>
											</div>
										</div>
										<div className="p-6">
											<h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
												{product.title}
											</h3>
											<p className="text-xl font-bold text-accent">
												{product.price}
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>

				{/* Indicador de Puntos */}
				<div className="flex justify-center mt-8 space-x-2">
					{Array.from({ length: maxIndex + 1 }).map((_, index) => (
						<button
							key={index}
							className={cn(
								'w-2 h-2 rounded-full transition-all duration-300',
								currentIndex === index
									? 'bg-primary w-8'
									: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
							)}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			</div>

			{/* Vista Móvil - Tarjetas Apiladas */}
			<div className="md:hidden mt-8">
				<div className="grid grid-cols-1 gap-6">
					{products.slice(0, 3).map((product) => (
						<Card
							key={product.id}
							className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow duration-300"
						>
							<CardContent className="p-0">
								<div className="flex">
									<img
										src={
											product.image || '/placeholder.svg'
										}
										alt={product.title}
										className="w-24 h-24 object-cover"
									/>
									<div className="p-4 flex-1">
										<h3 className="text-lg font-semibold text-foreground mb-1">
											{product.title}
										</h3>
										<p className="text-lg font-bold text-accent">
											{product.price}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
