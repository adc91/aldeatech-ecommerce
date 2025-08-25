import fs from 'fs'
import path from 'path'

// Tipos para la base de datos
export interface Category {
	id: number
	name: string
	slug: string
	description?: string
	icon?: string
	image?: string
	created_at: string
	updated_at: string
}

export interface Subcategory {
	id: number
	name: string
	slug: string
	icon?: string
	href?: string
	category_id: number
	created_at: string
	updated_at: string
}

export interface Product {
	id: number
	name: string
	slug: string
	description?: string
	price: string
	price_value: number
	original_price?: string
	original_price_value?: number
	image?: string
	brand?: string
	color?: string
	category_id?: number
	subcategory_id?: number
	featured: boolean
	active: boolean
	created_at: string
	updated_at: string
}

export interface Brand {
	id: number
	name: string
	slug: string
	logo?: string
	created_at: string
	updated_at: string
}

export interface Color {
	id: number
	name: string
	value: string
	hex_code?: string
	css_class?: string
	created_at: string
	updated_at: string
}

export interface ProductWithDetails extends Product {
	category_name?: string
	category_slug?: string
	subcategory_name?: string
	subcategory_slug?: string
}

// Base de datos JSON
interface DatabaseData {
	categories: Category[]
	subcategories: Subcategory[]
	products: Product[]
	brands: Brand[]
	colors: Color[]
}

// Datos iniciales
const initialData: DatabaseData = {
	categories: [
		{
			id: 1,
			name: 'Electrónica',
			slug: 'electronics',
			description: 'Dispositivos electrónicos y tecnología',
			icon: '📱',
			image: '/electronics-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 2,
			name: 'Deportes',
			slug: 'deportes',
			description: 'Equipo deportivo y fitness',
			icon: '⚽',
			image: '/sports-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 3,
			name: 'Celulares',
			slug: 'celulares',
			description: 'Smartphones y accesorios móviles',
			icon: '📱',
			image: '/phones-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 4,
			name: 'Televisores',
			slug: 'televisores',
			description: 'Smart TVs y sistemas de entretenimiento',
			icon: '📺',
			image: '/tvs-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 5,
			name: 'Consolas',
			slug: 'consolas',
			description: 'Consolas de videojuegos y accesorios gaming',
			icon: '🎮',
			image: '/consoles-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 6,
			name: 'Calzado Deportivo',
			slug: 'calzados-deportivos',
			description: 'Zapatillas y calzado para deportes',
			icon: '👟',
			image: '/sports-shoes-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 7,
			name: 'Automotriz',
			slug: 'automotriz',
			description: 'Accesorios y repuestos para vehículos',
			icon: '🚗',
			image: '/automotive-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 8,
			name: 'Muebles',
			slug: 'muebles',
			description: 'Mobiliario y decoración para el hogar',
			icon: '🪑',
			image: '/furniture-hero.jpg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		}
	],
	subcategories: [
		// Electrónica
		{ id: 1, name: 'Audio', slug: 'audio', icon: '🎧', href: '/electronics/audio', category_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 2, name: 'Computadores', slug: 'computadores', icon: '💻', href: '/electronics/computadores', category_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 3, name: 'Cámaras', slug: 'camaras', icon: '📷', href: '/electronics/camaras', category_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 4, name: 'Wearables', slug: 'wearables', icon: '⌚', href: '/electronics/wearables', category_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },

		// Deportes
		{ id: 5, name: 'Fitness', slug: 'fitness', icon: '💪', href: '/deportes/fitness', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 6, name: 'Fútbol', slug: 'futbol', icon: '⚽', href: '/deportes/futbol', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 7, name: 'Basketball', slug: 'basketball', icon: '🏀', href: '/deportes/basketball', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 8, name: 'Natación', slug: 'natacion', icon: '🏊', href: '/deportes/natacion', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 9, name: 'Ciclismo', slug: 'ciclismo', icon: '🚴', href: '/deportes/ciclismo', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 10, name: 'Outdoor', slug: 'outdoor', icon: '🏔️', href: '/deportes/outdoor', category_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },

		// Celulares
		{ id: 11, name: 'iPhone', slug: 'iphone', icon: '📱', href: '/celulares/iphone', category_id: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 12, name: 'Samsung', slug: 'samsung', icon: '📱', href: '/celulares/samsung', category_id: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 13, name: 'Accesorios', slug: 'accesorios', icon: '🔌', href: '/celulares/accesorios', category_id: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
	],
	brands: [
		{ id: 1, name: 'Apple', slug: 'apple', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 2, name: 'Samsung', slug: 'samsung', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 3, name: 'Sony', slug: 'sony', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 4, name: 'LG', slug: 'lg', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 5, name: 'Nintendo', slug: 'nintendo', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 6, name: 'PlayStation', slug: 'playstation', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 7, name: 'Xbox', slug: 'xbox', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 8, name: 'Bowflex', slug: 'bowflex', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 9, name: 'Adidas', slug: 'adidas', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 10, name: 'Nike', slug: 'nike', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 11, name: 'Spalding', slug: 'spalding', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 12, name: 'Speedo', slug: 'speedo', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 13, name: 'Trek', slug: 'trek', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 14, name: 'Coleman', slug: 'coleman', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 15, name: 'Bosch', slug: 'bosch', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 16, name: 'Michelin', slug: 'michelin', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 17, name: 'Ashley', slug: 'ashley', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 18, name: 'IKEA', slug: 'ikea', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
	],
	colors: [
		{ id: 1, name: 'Negro', value: 'black', hex_code: '#000000', css_class: 'bg-black', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 2, name: 'Blanco', value: 'white', hex_code: '#FFFFFF', css_class: 'bg-white border-2 border-gray-300', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 3, name: 'Azul', value: 'blue', hex_code: '#2563eb', css_class: 'bg-blue-600', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 4, name: 'Rojo', value: 'red', hex_code: '#dc2626', css_class: 'bg-red-600', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 5, name: 'Verde', value: 'green', hex_code: '#16a34a', css_class: 'bg-green-600', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 6, name: 'Gris', value: 'gray', hex_code: '#6b7280', css_class: 'bg-gray-600', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 7, name: 'Oro', value: 'gold', hex_code: '#fbbf24', css_class: 'bg-yellow-400', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
		{ id: 8, name: 'Plata', value: 'silver', hex_code: '#9ca3af', css_class: 'bg-gray-400', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
	],
	products: [
		// Productos destacados
		{
			id: 1,
			name: 'Auriculares inalámbricos',
			slug: 'auriculares-inalambricos',
			price: '$199.99',
			price_value: 199990,
			image: '/placeholder-z6vnr.png',
			category_id: 1, // electronics
			brand: 'Sony',
			color: 'black',
			featured: true,
			active: true,
			description: 'Auriculares inalámbricos con cancelación de ruido activa',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 2,
			name: 'Reloj inteligente',
			slug: 'reloj-inteligente',
			price: '$299.99',
			price_value: 299990,
			image: '/placeholder-3jbw8.png',
			category_id: 1, // electronics
			brand: 'Apple',
			color: 'black',
			featured: true,
			active: true,
			description: 'Smartwatch con GPS y monitor de salud',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 3,
			name: 'Soporte para laptop',
			slug: 'soporte-laptop',
			price: '$79.99',
			price_value: 79990,
			image: '/aluminum-laptop-stand.png',
			category_id: 1, // electronics
			brand: 'Apple',
			color: 'silver',
			featured: true,
			active: true,
			description: 'Soporte de aluminio ajustable para laptop',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 4,
			name: 'Cafetera',
			slug: 'cafetera-automatica',
			price: '$149.99',
			price_value: 149990,
			image: '/sleek-coffee-maker-kitchen.png',
			category_id: 1, // electronics
			brand: 'Bosch',
			color: 'black',
			featured: true,
			active: true,
			description: 'Cafetera automática con molinillo integrado',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 5,
			name: 'Lámpara de escritorio',
			slug: 'lampara-escritorio',
			price: '$89.99',
			price_value: 89990,
			image: '/modern-led-desk-lamp.png',
			category_id: 1, // electronics
			brand: 'IKEA',
			color: 'white',
			featured: true,
			active: true,
			description: 'Lámpara LED moderna con control táctil',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 6,
			name: 'Altavoz Bluetooth',
			slug: 'altavoz-bluetooth',
			price: '$129.99',
			price_value: 129990,
			image: '/placeholder-8gfyn.png',
			category_id: 1, // electronics
			brand: 'Sony',
			color: 'blue',
			featured: true,
			active: true,
			description: 'Altavoz portátil con sonido 360 grados',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		// Productos de deportes
		{
			id: 7,
			name: 'Set de Mancuernas Ajustables',
			slug: 'set-mancuernas-ajustables',
			price: '$299',
			price_value: 299000,
			original_price: '$399',
			original_price_value: 399000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 5, // fitness
			brand: 'Bowflex',
			color: 'black',
			featured: false,
			active: true,
			description: 'Set completo de mancuernas con peso ajustable de 2kg a 24kg',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 8,
			name: 'Balón de Fútbol Profesional',
			slug: 'balon-futbol-profesional',
			price: '$49',
			price_value: 49000,
			original_price: '$69',
			original_price_value: 69000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 6, // futbol
			brand: 'Adidas',
			color: 'white',
			featured: false,
			active: true,
			description: 'Balón oficial FIFA con tecnología de vuelo estable',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 9,
			name: 'Canasta de Basketball Portátil',
			slug: 'canasta-basketball-portatil',
			price: '$199',
			price_value: 199000,
			original_price: '$249',
			original_price_value: 249000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 7, // basketball
			brand: 'Spalding',
			color: 'black',
			featured: false,
			active: true,
			description: 'Canasta ajustable en altura con base rellenable',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 10,
			name: 'Gafas de Natación Profesional',
			slug: 'gafas-natacion-profesional',
			price: '$39',
			price_value: 39000,
			original_price: '$49',
			original_price_value: 49000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 8, // natacion
			brand: 'Speedo',
			color: 'blue',
			featured: false,
			active: true,
			description: 'Gafas anti-empañamiento con protección UV',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 11,
			name: 'Bicicleta de Montaña 21V',
			slug: 'bicicleta-montana-21v',
			price: '$599',
			price_value: 599000,
			original_price: '$799',
			original_price_value: 799000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 9, // ciclismo
			brand: 'Trek',
			color: 'red',
			featured: false,
			active: true,
			description: 'Bicicleta todo terreno con 21 velocidades y suspensión frontal',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		},
		{
			id: 12,
			name: 'Carpa para 4 Personas',
			slug: 'carpa-4-personas',
			price: '$149',
			price_value: 149000,
			original_price: '$199',
			original_price_value: 199000,
			image: '/placeholder.svg',
			category_id: 2, // deportes
			subcategory_id: 10, // outdoor
			brand: 'Coleman',
			color: 'green',
			featured: false,
			active: true,
			description: 'Carpa resistente al agua con montaje rápido',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		}
	]
}

class JsonDatabaseService {
	private dataPath: string
	private data: DatabaseData | null = null

	constructor() {
		const dataDir = path.resolve(process.cwd(), 'data')
		this.dataPath = path.join(dataDir, 'database.json')
		this.ensureDataDir()
		this.loadData()
	}

	private ensureDataDir() {
		const dataDir = path.dirname(this.dataPath)
		if (!fs.existsSync(dataDir)) {
			fs.mkdirSync(dataDir, { recursive: true })
		}
	}

	private loadData() {
		try {
			if (fs.existsSync(this.dataPath)) {
				const jsonData = fs.readFileSync(this.dataPath, 'utf8')
				this.data = JSON.parse(jsonData)
			} else {
				this.data = initialData
				this.saveData()
			}
		} catch (error) {
			console.error('Error loading database:', error)
			this.data = initialData
			this.saveData()
		}
	}

	private saveData() {
		try {
			fs.writeFileSync(this.dataPath, JSON.stringify(this.data, null, 2))
		} catch (error) {
			console.error('Error saving database:', error)
		}
	}

	private getData(): DatabaseData {
		if (!this.data) {
			this.loadData()
		}
		return this.data!
	}

	// Servicios de Categorías
	getCategories(): Category[] {
		const data = this.getData()
		return data.categories
	}

	getCategoryBySlug(slug: string): Category | null {
		const data = this.getData()
		return data.categories.find(c => c.slug === slug) || null
	}

	getSubcategoriesByCategory(categoryId: number): Subcategory[] {
		const data = this.getData()
		return data.subcategories.filter(s => s.category_id === categoryId)
	}

	getSubcategoriesByCategorySlug(categorySlug: string): Subcategory[] {
		const data = this.getData()
		const category = this.getCategoryBySlug(categorySlug)
		if (!category) return []
		return this.getSubcategoriesByCategory(category.id)
	}

	// Servicios de Productos
	getFeaturedProducts(): ProductWithDetails[] {
		const data = this.getData()
		return data.products
			.filter(p => p.featured && p.active)
			.map(product => this.addProductDetails(product))
	}

	getProductsByCategory(categorySlug: string): ProductWithDetails[] {
		const data = this.getData()
		const category = this.getCategoryBySlug(categorySlug)
		if (!category) return []

		return data.products
			.filter(p => p.category_id === category.id && p.active)
			.map(product => this.addProductDetails(product))
	}

	getProductsBySubcategory(subcategorySlug: string): ProductWithDetails[] {
		const data = this.getData()
		const subcategory = data.subcategories.find(s => s.slug === subcategorySlug)
		if (!subcategory) return []

		return data.products
			.filter(p => p.subcategory_id === subcategory.id && p.active)
			.map(product => this.addProductDetails(product))
	}

	getProductById(id: number): ProductWithDetails | null {
		const data = this.getData()
		const product = data.products.find(p => p.id === id && p.active)
		return product ? this.addProductDetails(product) : null
	}

	getProductBySlug(slug: string): ProductWithDetails | null {
		const data = this.getData()
		const product = data.products.find(p => p.slug === slug && p.active)
		return product ? this.addProductDetails(product) : null
	}

	private addProductDetails(product: Product): ProductWithDetails {
		const data = this.getData()
		const category = data.categories.find(c => c.id === product.category_id)
		const subcategory = data.subcategories.find(s => s.id === product.subcategory_id)

		return {
			...product,
			category_name: category?.name,
			category_slug: category?.slug,
			subcategory_name: subcategory?.name,
			subcategory_slug: subcategory?.slug
		}
	}

	// Servicios de Marcas
	getBrands(): Brand[] {
		const data = this.getData()
		return data.brands
	}

	getBrandsByCategory(categorySlug: string): string[] {
		const products = this.getProductsByCategory(categorySlug)
		const brands = [...new Set(products.map(p => p.brand).filter(Boolean))]
		return brands as string[]
	}

	// Servicios de Colores
	getColors(): Color[] {
		const data = this.getData()
		return data.colors
	}

	getColorsByCategory(categorySlug: string): Color[] {
		const data = this.getData()
		const products = this.getProductsByCategory(categorySlug)
		const colorValues = [...new Set(products.map(p => p.color).filter(Boolean))]

		return data.colors.filter(color => colorValues.includes(color.value))
	}

	// Búsqueda de productos
	searchProducts(query: string): ProductWithDetails[] {
		const data = this.getData()
		const searchTerm = query.toLowerCase()

		return data.products
			.filter(p => {
				const matchesName = p.name.toLowerCase().includes(searchTerm)
				const matchesDescription = p.description?.toLowerCase().includes(searchTerm)
				const matchesBrand = p.brand?.toLowerCase().includes(searchTerm)

				const category = data.categories.find(c => c.id === p.category_id)
				const matchesCategory = category?.name.toLowerCase().includes(searchTerm)

				return (matchesName || matchesDescription || matchesBrand || matchesCategory) && p.active
			})
			.map(product => this.addProductDetails(product))
	}
}

// Singleton instance
const jsonDbService = new JsonDatabaseService()

export default jsonDbService
