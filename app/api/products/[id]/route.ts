import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

interface RouteParams {
	params: Promise<{
		id: string
	}>
}

export async function GET(request: Request, { params }: RouteParams) {
	try {
		const { id } = await params

		// Attempt to get product by numeric ID
		const numericId = parseInt(id)
		let product

		if (!isNaN(numericId)) {
			// Search by ID
			product = jsonDbService.getProductById(numericId)
		} else {
			// Search by slug
			product = jsonDbService.getProductBySlug(id)
		}

		if (!product) {
			return NextResponse.json({
				success: false,
				error: 'Product not found'
			}, { status: 404 })
		}

		return NextResponse.json({
			success: true,
			data: product
		})
	} catch (error) {
		console.error('Error fetching product:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch product'
		}, { status: 500 })
	}
}
