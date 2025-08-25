import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const featured = searchParams.get('featured')
		const category = searchParams.get('category')
		const subcategory = searchParams.get('subcategory')
		const search = searchParams.get('search')

		let products

		// Determine which products to fetch based on the parameters
		if (featured === 'true') {
			products = jsonDbService.getFeaturedProducts()
		} else if (search) {
			products = jsonDbService.searchProducts(search)
		} else if (subcategory) {
			products = jsonDbService.getProductsBySubcategory(subcategory)
		} else if (category) {
			products = jsonDbService.getProductsByCategory(category)
		} else {
			// If no specific filters are provided, return featured products by default
			products = jsonDbService.getFeaturedProducts()
		}

		return NextResponse.json({
			success: true,
			data: products,
			count: products.length
		})
	} catch (error) {
		console.error('Error fetching products:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch products'
		}, { status: 500 })
	}
}
