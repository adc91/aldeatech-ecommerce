import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const featured = searchParams.get('featured')
		const category = searchParams.get('category')
		const subcategory = searchParams.get('subcategory')
		const search = searchParams.get('search')
		const limit = parseInt(searchParams.get('limit') || '20')
		const offset = parseInt(searchParams.get('offset') || '0')

		let allProducts
		let products

		// Determine which products to fetch based on the parameters
		if (featured === 'true') {
			allProducts = jsonDbService.getFeaturedProducts()
		} else if (search) {
			allProducts = jsonDbService.searchProducts(search)
		} else if (subcategory) {
			allProducts = jsonDbService.getProductsBySubcategory(subcategory)
		} else if (category) {
			allProducts = jsonDbService.getProductsByCategory(category)
		} else {
			// If no specific filters are provided, return featured products by default
			allProducts = jsonDbService.getFeaturedProducts()
		}

		// Apply pagination
		const totalCount = allProducts.length
		products = allProducts.slice(offset, offset + limit)

		return NextResponse.json({
			success: true,
			data: products,
			count: products.length,
			total: totalCount,
			hasMore: offset + limit < totalCount,
			pagination: {
				limit,
				offset,
				total: totalCount,
				hasMore: offset + limit < totalCount
			}
		})
	} catch (error) {
		console.error('Error fetching products:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch products'
		}, { status: 500 })
	}
}
