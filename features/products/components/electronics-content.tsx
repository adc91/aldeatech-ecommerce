"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Filter, Grid } from "lucide-react"
import { useState } from "react"

export function ElectronicsContent() {
	const [openFilters, setOpenFilters] = useState({
		price: true,
		categories: true,
		colors: true,
		brands: true,
		sizes: true,
	})

	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	const toggleFilter = (filter: keyof typeof openFilters) => {
		setOpenFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))
	}

	const categories = [
		{ name: "Smartphones", icon: "📱" },
		{ name: "Laptops", icon: "💻" },
		{ name: "Audio", icon: "🎧" },
		{ name: "Gaming", icon: "🎮" },
		{ name: "Cámaras", icon: "📷" },
		{ name: "Otros", icon: "⚡" },
	]

	const colors = [
		{ name: "Negro", value: "black", color: "bg-black" },
		{ name: "Azul", value: "blue", color: "bg-blue-600" },
		{ name: "Rojo", value: "red", color: "bg-red-600" },
		{ name: "Verde", value: "green", color: "bg-green-600" },
		{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
	]

	const brands = ["Apple", "Samsung", "Sony", "LG", "Xiaomi", "Huawei"]
	const sizes = ["Pequeño", "Mediano", "Grande", "Extra Grande"]

	const products = [
		{
			id: 1,
			name: "iPhone 15 Pro Max",
			price: "$1,299",
			originalPrice: "$1,499",
			image: "/iphone-15-pro-max.png",
			category: "Smartphones",
		},
		{
			id: 2,
			name: "Samsung Galaxy S24",
			price: "$899",
			originalPrice: "$1,099",
			image: "/samsung-galaxy-s24.png",
			category: "Smartphones",
		},
		{
			id: 3,
			name: 'MacBook Pro 16"',
			price: "$2,399",
			originalPrice: "$2,699",
			image: "/macbook-pro-16-inch.png",
			category: "Laptops",
		},
		{
			id: 4,
			name: "Sony WH-1000XM5",
			price: "$349",
			originalPrice: "$399",
			image: "/sony-wh-1000xm5.png",
			category: "Audio",
		},
		{
			id: 5,
			name: "PlayStation 5",
			price: "$499",
			originalPrice: "$599",
			image: "/playstation-5-console.png",
			category: "Gaming",
		},
		{
			id: 6,
			name: "Canon EOS R6",
			price: "$2,199",
			originalPrice: "$2,499",
			image: "/canon-eos-r6.png",
			category: "Cámaras",
		},
		{
			id: 7,
			name: "iPad Air 5th Gen",
			price: "$599",
			originalPrice: "$699",
			image: "/ipad-air-5th-gen.png",
			category: "Otros",
		},
		{
			id: 8,
			name: "Dell XPS 13",
			price: "$1,199",
			originalPrice: "$1,399",
			image: "/dell-xps-13.png",
			category: "Laptops",
		},
		{
			id: 9,
			name: "AirPods Pro 2",
			price: "$249",
			originalPrice: "$299",
			image: "/airpods-pro-2nd-gen.png",
			category: "Audio",
		},
		{
			id: 10,
			name: "Nintendo Switch OLED",
			price: "$349",
			originalPrice: "$399",
			image: "/nintendo-switch-oled.png",
			category: "Gaming",
		},
		{
			id: 11,
			name: 'LG OLED C3 55"',
			price: "$1,499",
			originalPrice: "$1,799",
			image: "/lg-oled-c3-55-inch-tv.png",
			category: "Otros",
		},
		{
			id: 12,
			name: "Google Pixel 8 Pro",
			price: "$999",
			originalPrice: "$1,199",
			image: "/google-pixel-8-pro.png",
			category: "Smartphones",
		},
	]

	const filteredProducts = activeCategory ? products.filter((product) => product.category === activeCategory) : products

	return (
		<div className="bg-white">
			{/* Breadcrumb */}
			<div className="border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<nav className="text-sm text-gray-600">
						<span className="hover:text-gray-900 cursor-pointer">Home</span>
						<span className="mx-2">&gt;</span>
						<span className="text-gray-900 font-medium">Electrónica</span>
					</nav>
				</div>
			</div>

			{/* Category Icons */}
			<div className="bg-gray-50 border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
						{categories.map((category) => (
							<div
								key={category.name}
								className="flex flex-col items-center group cursor-pointer"
								onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
							>
								<div
									className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 border border-gray-200 group-hover:scale-105 ${activeCategory === category.name ? "bg-gray-900 text-white" : "bg-white group-hover:bg-gray-50"
										}`}
								>
									<span className="text-2xl">{category.icon}</span>
								</div>
								<span
									className={`mt-2 text-sm font-medium transition-colors duration-200 ${activeCategory === category.name ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
										}`}
								>
									{category.name}
								</span>
							</div>
						))}
					</div>
					{activeCategory && (
						<div className="mt-4 text-center">
							<span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-900 text-white">
								Filtrando por: {activeCategory}
								<button
									onClick={() => setActiveCategory(null)}
									className="ml-2 hover:bg-gray-700 rounded-full p-1 transition-colors"
								>
									×
								</button>
							</span>
						</div>
					)}
				</div>
			</div>

			{/* Hero Banner */}
			<div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">Descubre nuestra variedad de productos de electrónica</h1>
					<p className="text-xl text-gray-300">Encuentra la tecnología más avanzada al mejor precio</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Sidebar Filters */}
					<div className="lg:w-1/4">
						<div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
							<div className="flex items-center gap-2 mb-6">
								<Filter className="w-5 h-5 text-gray-600" />
								<h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
							</div>

							{/* Price Range */}
							<div className="mb-6">
								<button
									onClick={() => toggleFilter("price")}
									className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
								>
									Rango de Precio
									{openFilters.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
								</button>
								{openFilters.price && (
									<div className="space-y-3">
										<div className="flex gap-2">
											<Input placeholder="Mín" className="text-sm" />
											<Input placeholder="Máx" className="text-sm" />
										</div>
									</div>
								)}
							</div>

							{/* Categories */}
							<div className="mb-6">
								<button
									onClick={() => toggleFilter("categories")}
									className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
								>
									Categorías
									{openFilters.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
								</button>
								{openFilters.categories && (
									<div className="space-y-2">
										{categories.map((category) => (
											<div key={category.name} className="flex items-center space-x-2">
												<Checkbox
													id={category.name}
													checked={activeCategory === category.name}
													onCheckedChange={(checked) => setActiveCategory(checked ? category.name : null)}
												/>
												<label
													htmlFor={category.name}
													className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
												>
													{category.name}
												</label>
											</div>
										))}
									</div>
								)}
							</div>

							{/* Colors */}
							<div className="mb-6">
								<button
									onClick={() => toggleFilter("colors")}
									className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
								>
									Colores
									{openFilters.colors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
								</button>
								{openFilters.colors && (
									<div className="flex flex-wrap gap-2">
										{colors.map((color) => (
											<button
												key={color.value}
												className={`w-8 h-8 rounded-full ${color.color} hover:scale-110 transition-transform cursor-pointer shadow-sm hover:shadow-md`}
												title={color.name}
											/>
										))}
									</div>
								)}
							</div>

							{/* Brands */}
							<div className="mb-6">
								<button
									onClick={() => toggleFilter("brands")}
									className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
								>
									Marcas
									{openFilters.brands ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
								</button>
								{openFilters.brands && (
									<div className="space-y-2">
										{brands.map((brand) => (
											<div key={brand} className="flex items-center space-x-2">
												<Checkbox id={brand} />
												<label
													htmlFor={brand}
													className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
												>
													{brand}
												</label>
											</div>
										))}
									</div>
								)}
							</div>

							{/* Sizes */}
							<div className="mb-6">
								<button
									onClick={() => toggleFilter("sizes")}
									className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
								>
									Tamaños
									{openFilters.sizes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
								</button>
								{openFilters.sizes && (
									<div className="space-y-2">
										{sizes.map((size) => (
											<div key={size} className="flex items-center space-x-2">
												<Checkbox id={size} />
												<label
													htmlFor={size}
													className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
												>
													{size}
												</label>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Product Grid */}
					<div className="lg:w-3/4">
						<div className="flex items-center justify-between mb-6">
							<p className="text-gray-600">Mostrando {filteredProducts.length} productos</p>
							<div className="flex items-center gap-2">
								<Grid className="w-4 h-4 text-gray-600" />
								<span className="text-sm text-gray-600">Vista de cuadrícula</span>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredProducts.map((product) => (
								<div
									key={product.id}
									className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
								>
									<div className="aspect-square bg-gray-100 overflow-hidden">
										<img
											src={product.image || "/placeholder.svg"}
											alt={product.name}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div className="p-4">
										<h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
											{product.name}
										</h3>
										<div className="flex items-center gap-2">
											<span className="text-lg font-bold text-gray-900">{product.price}</span>
											<span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Load More Button */}
						<div className="text-center mt-12">
							<Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-colors duration-200">
								Mostrar más productos
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
