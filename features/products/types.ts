export interface Product {
	id: number
	name: string
	price: string
	priceValue: number
	image: string
	description?: string
	category?: string
	inStock?: boolean
	featured?: boolean
}

export interface ProductCategory {
	id: string
	name: string
	slug: string
	description?: string
	image?: string
	productCount?: number
}

export interface CategoryFilter {
	priceRange?: [number, number]
	inStock?: boolean
	sortBy?: 'name' | 'price' | 'newest'
	sortOrder?: 'asc' | 'desc'
}