import type { Product, ProductCategory, CategoryFilter } from '../types'

export class ProductsService {
	/**
	 * Filter products by category
	 */
	static filterByCategory(products: Product[], category: string): Product[] {
		if (!category || category === 'all') return products
		return products.filter(product => 
			product.category?.toLowerCase() === category.toLowerCase()
		)
	}

	/**
	 * Apply filters to products
	 */
	static applyFilters(products: Product[], filters: CategoryFilter): Product[] {
		let filtered = [...products]

		// Price range filter
		if (filters.priceRange) {
			const [min, max] = filters.priceRange
			filtered = filtered.filter(product => 
				product.priceValue >= min && product.priceValue <= max
			)
		}

		// In stock filter
		if (filters.inStock !== undefined) {
			filtered = filtered.filter(product => 
				product.inStock === filters.inStock
			)
		}

		// Sorting
		if (filters.sortBy) {
			filtered.sort((a, b) => {
				let aValue: any = a[filters.sortBy!]
				let bValue: any = b[filters.sortBy!]

				if (filters.sortBy === 'price') {
					aValue = a.priceValue
					bValue = b.priceValue
				}

				const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
				return filters.sortOrder === 'desc' ? -comparison : comparison
			})
		}

		return filtered
	}

	/**
	 * Get featured products
	 */
	static getFeatured(products: Product[], limit?: number): Product[] {
		const featured = products.filter(product => product.featured)
		return limit ? featured.slice(0, limit) : featured
	}

	/**
	 * Search products by name or description
	 */
	static search(products: Product[], query: string): Product[] {
		if (!query.trim()) return products

		const searchTerm = query.toLowerCase().trim()
		return products.filter(product =>
			product.name.toLowerCase().includes(searchTerm) ||
			product.description?.toLowerCase().includes(searchTerm)
		)
	}

	/**
	 * Get product by ID
	 */
	static getById(products: Product[], id: number): Product | undefined {
		return products.find(product => product.id === id)
	}

	/**
	 * Get related products (same category, excluding current)
	 */
	static getRelated(products: Product[], currentProduct: Product, limit = 4): Product[] {
		if (!currentProduct.category) return []

		return products
			.filter(product => 
				product.category === currentProduct.category && 
				product.id !== currentProduct.id
			)
			.slice(0, limit)
	}

	/**
	 * Format price for display
	 */
	static formatPrice(price: number): string {
		return new Intl.NumberFormat('es-PY', {
			style: 'currency',
			currency: 'PYG',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price)
	}
}