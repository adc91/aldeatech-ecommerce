import { ECommerceHeader } from "@/components/e-commerce-header"
import { CategoryPageTemplate } from "@/components/category-page-template"

const categories = [
  { name: "Accesorios", icon: "🔧", href: "/automotriz" },
  { name: "Audio", icon: "🔊", href: "/automotriz" },
  { name: "Llantas", icon: "🛞", href: "/automotriz" },
  { name: "Herramientas", icon: "🛠️", href: "/automotriz" },
  { name: "Cuidado", icon: "🧽", href: "/automotriz" },
  { name: "Seguridad", icon: "🛡️", href: "/automotriz" },
]

const products = [
  {
    id: 701,
    name: "Sistema de Audio Pioneer",
    price: "$299",
    originalPrice: "$399",
    image: "/sistema-audio-pioneer.png",
    category: "Audio",
    brand: "Pioneer",
    color: "black",
    priceValue: 299,
  },
  {
    id: 702,
    name: 'Set de Llantas Deportivas 17"',
    price: "$899",
    originalPrice: "$1,199",
    image: "/set-llantas-deportivas-17.png",
    category: "Llantas",
    brand: "Michelin",
    color: "black",
    priceValue: 899,
  },
  {
    id: 703,
    name: "Kit de Herramientas 120 Piezas",
    price: "$149",
    originalPrice: "$199",
    image: "/kit-herramientas-120-piezas.png",
    category: "Herramientas",
    brand: "Craftsman",
    color: "red",
    priceValue: 149,
  },
  {
    id: 704,
    name: "Cera Premium para Auto",
    price: "$29",
    originalPrice: "$39",
    image: "/cera-premium-auto.png",
    category: "Cuidado",
    brand: "Meguiar's",
    color: "blue",
    priceValue: 29,
  },
  {
    id: 705,
    name: "Cámara de Reversa HD",
    price: "$79",
    originalPrice: "$99",
    image: "/camara-reversa-hd.png",
    category: "Seguridad",
    brand: "Garmin",
    color: "black",
    priceValue: 79,
  },
  {
    id: 706,
    name: "Organizador de Maletero",
    price: "$39",
    originalPrice: "$49",
    image: "/organizador-maletero.png",
    category: "Accesorios",
    brand: "WeatherTech",
    color: "black",
    priceValue: 39,
  },
]

const brands = ["Pioneer", "Michelin", "Craftsman", "Meguiar's", "Garmin", "WeatherTech"]
const colors = [
  { name: "Negro", value: "black", color: "bg-black" },
  { name: "Rojo", value: "red", color: "bg-red-600" },
  { name: "Azul", value: "blue", color: "bg-blue-600" },
  { name: "Plata", value: "silver", color: "bg-gray-400" },
]

export default function AutomotrizPage() {
  return (
    <div>
      <ECommerceHeader />
      <CategoryPageTemplate
        title="Automotriz"
        breadcrumb="Automotriz"
        heroTitle="Todo para tu vehículo en un solo lugar"
        heroSubtitle="Accesorios, herramientas y productos de cuidado para mantener tu auto en perfectas condiciones"
        categories={categories}
        products={products}
        brands={brands}
        colors={colors}
      />
    </div>
  )
}
