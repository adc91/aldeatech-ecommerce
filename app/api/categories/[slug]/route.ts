import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

interface RouteParams {
	params: Promise<{
		slug: string
	}>
}

export async function GET(request: Request, { params }: RouteParams) {
	try {
		const { slug } = await params

		// Get category
		const category = jsonDbService.getCategoryBySlug(slug)

		if (!category) {
			return NextResponse.json({
				success: false,
				error: 'Category not found'
			}, { status: 404 })
		}

		// Get subcategories of the category
		const subcategories = jsonDbService.getSubcategoriesByCategory(category.id)

		// Get products of the category
		const products = jsonDbService.getProductsByCategory(slug)

		// Get available brands in the category
		const brands = jsonDbService.getBrandsByCategory(slug)

		// Get available colors in the category
		const colors = jsonDbService.getColorsByCategory(slug)

		return NextResponse.json({
			success: true,
			data: {
				category,
				subcategories,
				products,
				brands,
				colors
			}
		})
	} catch (error) {
		console.error('Error fetching category:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch category'
		}, { status: 500 })
	}
}
