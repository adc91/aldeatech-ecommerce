import { CategoryPageTemplate } from "@/components/category-page-template"
import { ECommerceHeader } from "@/components/e-commerce-header"

const categories = [
	{ name: "Fitness", icon: "💪", href: "/deportes" },
	{ name: "Fútbol", icon: "⚽", href: "/deportes" },
	{ name: "Basketball", icon: "🏀", href: "/deportes" },
	{ name: "Natación", icon: "🏊", href: "/deportes" },
	{ name: "Ciclismo", icon: "🚴", href: "/deportes" },
	{ name: "Outdoor", icon: "🏔️", href: "/deportes" },
]

const products = [
	{
		id: 601,
		name: "Set de Mancuernas Ajustables",
		price: "$299",
		originalPrice: "$399",
		image: "/set-mancuernas-ajustables.png",
		category: "Fitness",
		brand: "Bowflex",
		color: "black",
		priceValue: 299,
	},
	{
		id: 602,
		name: "Balón de Fútbol Profesional",
		price: "$49",
		originalPrice: "$69",
		image: "/balon-futbol-profesional.png",
		category: "Fútbol",
		brand: "Adidas",
		color: "white",
		priceValue: 49,
	},
	{
		id: 603,
		name: "Canasta de Basketball Portátil",
		price: "$199",
		originalPrice: "$249",
		image: "/canasta-basketball-portatil.png",
		category: "Basketball",
		brand: "Spalding",
		color: "black",
		priceValue: 199,
	},
	{
		id: 604,
		name: "Gafas de Natación Profesional",
		price: "$39",
		originalPrice: "$49",
		image: "/gafas-natacion-profesional.png",
		category: "Natación",
		brand: "Speedo",
		color: "blue",
		priceValue: 39,
	},
	{
		id: 605,
		name: "Bicicleta de Montaña 21V",
		price: "$599",
		originalPrice: "$799",
		image: "/bicicleta-montana-21v.png",
		category: "Ciclismo",
		brand: "Trek",
		color: "red",
		priceValue: 599,
	},
	{
		id: 606,
		name: "Carpa para 4 Personas",
		price: "$149",
		originalPrice: "$199",
		image: "/carpa-4-personas.png",
		category: "Outdoor",
		brand: "Coleman",
		color: "green",
		priceValue: 149,
	},
]

const brands = ["Bowflex", "Adidas", "Spalding", "Speedo", "Trek", "Coleman"]
const colors = [
	{ name: "Negro", value: "black", color: "bg-black" },
	{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
	{ name: "Azul", value: "blue", color: "bg-blue-600" },
	{ name: "Rojo", value: "red", color: "bg-red-600" },
	{ name: "Verde", value: "green", color: "bg-green-600" },
]

export default function DeportesPage() {
	return (
		<div>
			<ECommerceHeader />
			<CategoryPageTemplate
				title="Deportes"
				breadcrumb="Deportes"
				heroTitle="Equípate para tu deporte favorito"
				heroSubtitle="Todo lo que necesitas para mantenerte activo y alcanzar tus metas deportivas"
				categories={categories}
				products={products}
				brands={brands}
				colors={colors}
			/>
		</div>
	)
}
