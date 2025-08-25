import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const category = searchParams.get('category')

		let brands

		if (category) {
			// Get specific brands from a category
			brands = jsonDbService.getBrandsByCategory(category)
		} else {
			// Get all brands
			const allBrands = jsonDbService.getBrands()
			brands = allBrands.map(brand => brand.name)
		}

		return NextResponse.json({
			success: true,
			data: brands,
			count: brands.length
		})
	} catch (error) {
		console.error('Error fetching brands:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch brands'
		}, { status: 500 })
	}
}
