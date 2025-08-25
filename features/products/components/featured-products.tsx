'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/src/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Product {
	id: number
	name: string
	price: string
	image?: string
	description?: string
}

export function FeaturedProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchFeaturedProducts() {
			try {
				const response = await fetch('/api/products?featured=true');
				const data = await response.json();

				if (data.success) {
					// Map API data to the format expected by the component
					const mappedProducts = data.data.map((product: any) => ({
						id: product.id,
						title: product.name, // Keep 'title' for compatibility
						name: product.name,
						price: product.price,
						image: product.image || '/placeholder.svg',
						description: product.description
					}));
					setProducts(mappedProducts);
				}
			} catch (error) {
				console.error('Error fetching featured products:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchFeaturedProducts();
	}, []);

	if (loading) {
		return (
			<section className="w-full">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-foreground mb-4">
						Productos Destacados
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Cargando productos...
					</p>
				</div>
			</section>
		);
	}

	if (products.length === 0) {
		return (
			<section className="w-full">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-foreground mb-4">
						Productos Destacados
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						No hay productos destacados disponibles.
					</p>
				</div>
			</section>
		);
	}
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
				{/* Navigation Buttons */}
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

				{/* Product Container */}
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
												alt={product.name}
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
												{product.name}
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

				{/* Dots Indicator */}
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

			{/* Mobile View - Stacked Cards */}
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
										alt={product.name}
										className="w-24 h-24 object-cover"
									/>
									<div className="p-4 flex-1">
										<h3 className="text-lg font-semibold text-foreground mb-1">
											{product.name}
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

