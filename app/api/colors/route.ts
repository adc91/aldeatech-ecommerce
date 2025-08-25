import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const category = searchParams.get('category')

		let colors

		if (category) {
			// Get specific colors from a category
			colors = jsonDbService.getColorsByCategory(category)
		} else {
			// Get all colors
			colors = jsonDbService.getColors()
		}

		return NextResponse.json({
			success: true,
			data: colors,
			count: colors.length
		})
	} catch (error) {
		console.error('Error fetching colors:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch colors'
		}, { status: 500 })
	}
}
