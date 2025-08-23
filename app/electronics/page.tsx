import { ECommerceFooter } from "@/components/e-commerce-footer"
import { ECommerceHeader } from "@/components/e-commerce-header"
import { ElectronicsContent } from "@/components/electronics-content"

export default function ElectronicsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<ECommerceHeader />
			<ElectronicsContent />
			<ECommerceFooter />
		</div>
	)
}
