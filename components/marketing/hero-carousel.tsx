"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const slides = [
	{
		id: 1,
		title: "Tecnología de Vanguardia",
		subtitle: "Descubre lo último en innovación",
		description: "Hasta 40% de descuento en productos seleccionados",
		image: "/modern-tech-banner.png",
		cta: "Comprar Ahora",
		link: '/electronics',
		bgColor: "bg-gradient-to-r from-gray-100 to-gray-200",
	},
	{
		id: 2,
		title: "Mundo Deportivo",
		subtitle: "Equipamiento profesional",
		description: "Todo lo que necesitas para tu rendimiento",
		image: "/summer-fashion-banner.png",
		cta: "Ver Deportes",
		link: '/deportes',
		bgColor: "bg-gradient-to-r from-gray-200 to-gray-300",
	},
	{
		id: 3,
		title: "Servicios AldeaTech",
		subtitle: "Soluciones integrales",
		description: "Consultoría y desarrollo personalizado",
		image: "/modern-home-decor-banner.png",
		cta: "Conocer Más",
		link: "https://aldeatech.co",
		target: "_blank",
		bgColor: "bg-gradient-to-r from-gray-300 to-gray-200",
	},
]

export function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	useEffect(() => {
		if (!isAutoPlaying) return

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [isAutoPlaying])

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
		setIsAutoPlaying(false)
		setTimeout(() => setIsAutoPlaying(true), 10000)
	}

	const goToPrevious = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
		setIsAutoPlaying(false)
		setTimeout(() => setIsAutoPlaying(true), 10000)
	}

	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
		setIsAutoPlaying(false)
		setTimeout(() => setIsAutoPlaying(true), 10000)
	}

	return (
		<div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
			{/* Slides */}
			<div
				className="flex transition-transform duration-500 ease-in-out h-full"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className={`min-w-full h-full relative flex items-center justify-center ${slide.bgColor}`}
					>
						<div className="absolute inset-0">
							<img
								src={slide.image || "/placeholder.svg"}
								alt={slide.title}
								className="w-full h-full object-cover opacity-20"
							/>
						</div>
						<div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
							<h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-2">{slide.title}</h2>
							<p className="text-lg md:text-xl text-muted-foreground mb-2">{slide.subtitle}</p>
							<p className="text-base md:text-lg text-muted-foreground mb-6">{slide.description}</p>
							{slide.link && (
								<Button
									size="lg"
									className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
									asChild
								>
									<a
										href={slide.link}
										target={slide.target || "_self"}
										rel={slide.target === "_blank" ? "noopener noreferrer" : undefined}
									>
										{slide.cta}
									</a>
								</Button>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<Button
				variant="ghost"
				size="sm"
				onClick={goToPrevious}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-800 text-white p-2 rounded-full shadow-md"
			>
				<ChevronLeft className="h-6 w-6" />
				<span className="sr-only">Anterior</span>
			</Button>
			<Button
				variant="ghost"
				size="sm"
				onClick={goToNext}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-800 text-white p-2 rounded-full shadow-md"
			>
				<ChevronRight className="h-6 w-6" />
				<span className="sr-only">Siguiente</span>
			</Button>

			{/* Dot Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-primary shadow-lg" : "bg-gray-400/60 hover:bg-gray-400/80"
							}`}
						aria-label={`Ir a slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
