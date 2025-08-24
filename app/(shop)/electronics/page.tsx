import { ECommerceFooter } from "@/components/common/footer"
import { ECommerceHeader } from "@/components/common/header"
import { ElectronicsContent } from "@/features/products/components/electronics-content"

export default function ElectronicsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<ECommerceHeader />
			<ElectronicsContent />
			<ECommerceFooter />
		</div>
	)
}
