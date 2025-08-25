// Centralized type definitions
// This file serves as the single source of truth for all TypeScript interfaces

// ============================================================================
// PRODUCT TYPES
// ============================================================================

export interface Product {
	id: number
	name: string
	slug: string
	description?: string
	price: string
	priceValue: number
	original_price?: string
	originalPriceValue?: number
	image?: string
	brand?: string
	color?: string
	category_id?: number
	subcategory_id?: number
	subcategory?: string
	featured: boolean
	active: boolean
	created_at: string
	updated_at: string
}

export interface ProductWithDetails extends Product {
	category_name?: string
	category_slug?: string
	subcategory_name?: string
	subcategory_slug?: string
	originalPrice?: string
}

// Simplified Product interface for frontend components
export interface ProductDisplay {
	id: number
	name: string
	price: string
	originalPrice?: string
	priceValue: number
	image: string
	category_name?: string
	category_slug?: string
	subcategory?: string
	brand?: string
	color?: string
	size?: string
}

// ============================================================================
// CATEGORY TYPES
// ============================================================================

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

export interface CategoryConfig {
	name: string
	icon: string
	href: string
}

export interface ProductCategory {
	id: string
	name: string
	slug: string
	description?: string
	image?: string
	productCount?: number
}

// ============================================================================
// BRAND AND COLOR TYPES
// ============================================================================

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

// Simplified Color interface for static pages
export interface ColorSimple {
	name: string
	value: string
	css_class?: string
}

// ============================================================================
// CART TYPES
// ============================================================================

export interface CartItem {
	id: number
	name: string
	price: string
	priceValue: number
	image: string
	quantity: number
}

export interface CartState {
	items: CartItem[]
	isOpen: boolean
}

export type CartAction =
	| { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
	| { type: "REMOVE_ITEM"; payload: number }
	| { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
	| { type: "CLEAR_CART" }
	| { type: "TOGGLE_CART" }
	| { type: "OPEN_CART" }
	| { type: "CLOSE_CART" }

// ============================================================================
// API TYPES
// ============================================================================

export interface ApiResponse<T> {
	success: boolean
	data: T
	count: number
	total: number
	hasMore: boolean
	pagination: {
		limit: number
		offset: number
		total: number
		hasMore: boolean
	}
}

export interface ApiError {
	success: false
	error: string
}

// ============================================================================
// FILTER TYPES
// ============================================================================

export interface CategoryFilter {
	priceRange?: [number, number]
	inStock?: boolean
	sortBy?: 'name' | 'price' | 'newest'
	sortOrder?: 'asc' | 'desc'
}

export interface ProductFilters {
	category: string | null
	brands: string[]
	colors: string[]
	sizes: string[]
	priceRange: [number, number]
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

export interface CategoryPageProps {
	title: string
	breadcrumb: string
	heroTitle: string
	heroSubtitle: string
	categories: CategoryConfig[]
	products: ProductDisplay[]
	brands: string[]
	colors: Color[] | ColorSimple[]
	sizes?: string[]
	showSizes?: boolean
	hasMore?: boolean
	loadingMore?: boolean
	onLoadMore?: () => void
	totalProducts?: number
}

export interface ProductCardProps {
	product: ProductDisplay
	onAddToCart: (product: ProductDisplay) => void
}

// ============================================================================
// DATABASE TYPES
// ============================================================================

export interface DatabaseData {
	categories: Category[]
	subcategories: Subcategory[]
	products: Product[]
	brands: Brand[]
	colors: Color[]
}
