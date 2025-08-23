import { CategoryPageTemplate } from "@/components/category-page-template"
import { ECommerceHeader } from "@/components/e-commerce-header"

const categories = [
	{ name: "Running", icon: "👟", href: "/calzados-deportivos" },
	{ name: "Basketball", icon: "🏀", href: "/calzados-deportivos" },
	{ name: "Fútbol", icon: "⚽", href: "/calzados-deportivos" },
	{ name: "Casual", icon: "👕", href: "/calzados-deportivos" },
	{ name: "Training", icon: "💪", href: "/calzados-deportivos" },
	{ name: "Lifestyle", icon: "✨", href: "/calzados-deportivos" },
]

const products = [
	{
		id: 401,
		name: "Nike Air Max 270",
		price: "$149",
		originalPrice: "$179",
		image: "/nike-air-max-270.png",
		category: "Casual",
		brand: "Nike",
		color: "black",
		size: "42",
		priceValue: 149,
	},
	{
		id: 402,
		name: "Adidas Ultraboost 22",
		price: "$189",
		originalPrice: "$229",
		image: "/adidas-ultraboost-22.png",
		category: "Running",
		brand: "Adidas",
		color: "white",
		size: "41",
		priceValue: 189,
	},
	{
		id: 403,
		name: "Jordan Air Jordan 1",
		price: "$169",
		originalPrice: "$199",
		image: "/jordan-air-jordan-1.png",
		category: "Basketball",
		brand: "Jordan",
		color: "red",
		size: "43",
		priceValue: 169,
	},
	{
		id: 404,
		name: "Puma Future Z 1.1",
		price: "$199",
		originalPrice: "$249",
		image: "/puma-future-z-11.png",
		category: "Fútbol",
		brand: "Puma",
		color: "blue",
		size: "42",
		priceValue: 199,
	},
	{
		id: 405,
		name: "New Balance 990v5",
		price: "$174",
		originalPrice: "$199",
		image: "/new-balance-990v5.png",
		category: "Lifestyle",
		brand: "New Balance",
		color: "gray",
		size: "41",
		priceValue: 174,
	},
	{
		id: 406,
		name: "Reebok Nano X2",
		price: "$129",
		originalPrice: "$159",
		image: "/reebok-nano-x2.png",
		category: "Training",
		brand: "Reebok",
		color: "black",
		size: "44",
		priceValue: 129,
	},
]

const brands = ["Nike", "Adidas", "Jordan", "Puma", "New Balance", "Reebok"]
const colors = [
	{ name: "Negro", value: "black", color: "bg-black" },
	{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
	{ name: "Rojo", value: "red", color: "bg-red-600" },
	{ name: "Azul", value: "blue", color: "bg-blue-600" },
	{ name: "Gris", value: "gray", color: "bg-gray-500" },
]

const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

export default function CalzadosDeportivosPage() {
	return (
		<div>
			<ECommerceHeader />
			<CategoryPageTemplate
				title="Calzados Deportivos"
				breadcrumb="Calzados Deportivos"
				heroTitle="Calzado deportivo de las mejores marcas"
				heroSubtitle="Encuentra el par perfecto para tu deporte favorito con comodidad y estilo"
				categories={categories}
				products={products}
				brands={brands}
				colors={colors}
				sizes={sizes}
				showSizes={true}
			/>
		</div>
	)
}
