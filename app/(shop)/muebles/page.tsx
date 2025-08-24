import { ECommerceHeader } from "@/components/common/header"
import { CategoryPageTemplate } from "@/features/products/components/category-page-template"

const categories = [
	{ name: "Sala", icon: "🛋️", href: "/muebles" },
	{ name: "Dormitorio", icon: "🛏️", href: "/muebles" },
	{ name: "Comedor", icon: "🪑", href: "/muebles" },
	{ name: "Oficina", icon: "💼", href: "/muebles" },
	{ name: "Cocina", icon: "🍽️", href: "/muebles" },
	{ name: "Exterior", icon: "🌿", href: "/muebles" },
]

const products = [
	{
		id: 501,
		name: "Sofá Seccional 3 Plazas",
		price: "$899",
		originalPrice: "$1,199",
		image: "/placeholder.svg",
		category: "Sala",
		brand: "IKEA",
		color: "gray",
		priceValue: 899,
	},
	{
		id: 502,
		name: "Cama Queen con Cabecera",
		price: "$649",
		originalPrice: "$799",
		image: "/placeholder.svg",
		category: "Dormitorio",
		brand: "Ashley",
		color: "brown",
		priceValue: 649,
	},
	{
		id: 503,
		name: "Mesa de Comedor 6 Personas",
		price: "$549",
		originalPrice: "$699",
		image: "/placeholder.svg",
		category: "Comedor",
		brand: "West Elm",
		color: "brown",
		priceValue: 549,
	},
	{
		id: 504,
		name: "Escritorio Ejecutivo L-Shape",
		price: "$399",
		originalPrice: "$499",
		image: "/placeholder.svg",
		category: "Oficina",
		brand: "Herman Miller",
		color: "black",
		priceValue: 399,
	},
	{
		id: 505,
		name: "Gabinete de Cocina Modular",
		price: "$1,299",
		originalPrice: "$1,599",
		image: "/placeholder.svg",
		category: "Cocina",
		brand: "IKEA",
		color: "white",
		priceValue: 1299,
	},
	{
		id: 506,
		name: "Set de Patio 4 Piezas",
		price: "$799",
		originalPrice: "$999",
		image: "/placeholder.svg",
		category: "Exterior",
		brand: "Pottery Barn",
		color: "brown",
		priceValue: 799,
	},
]

const brands = ["IKEA", "Ashley", "West Elm", "Herman Miller", "Pottery Barn", "Wayfair"]
const colors = [
	{ name: "Marrón", value: "brown", color: "bg-amber-800" },
	{ name: "Negro", value: "black", color: "bg-black" },
	{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
	{ name: "Gris", value: "gray", color: "bg-gray-500" },
	{ name: "Beige", value: "beige", color: "bg-amber-100" },
]

export default function MueblesPage() {
	return (
		<div>
			<ECommerceHeader />
			<CategoryPageTemplate
				title="Muebles"
				breadcrumb="Muebles"
				heroTitle="Transforma tu hogar con nuestros muebles"
				heroSubtitle="Calidad, diseño y funcionalidad para cada espacio de tu casa"
				categories={categories}
				products={products}
				brands={brands}
				colors={colors}
			/>
		</div>
	)
}
