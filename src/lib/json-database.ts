import type {
	Brand,
	Category,
	Color,
	DatabaseData,
	Product,
	ProductWithDetails,
	Subcategory
} from '@/src/types'
import fs from 'fs'
import path from 'path'

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
				throw new Error('Database file does not exist. Please ensure database.json is present in the data directory.')
			}
		} catch (error) {
			console.error('Error loading database:', error)
			throw error
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
			originalPrice: product.original_price,
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
