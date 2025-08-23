import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function ECommerceFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Contact Row */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="hidden md:block text-slate-400">|</div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@laempresa.com</span>
            </div>
            <div className="hidden md:block text-slate-400">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Commerce St, Business City, BC 12345</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo Section */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">La Empresa</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Your trusted partner for quality products and exceptional service. We're committed to delivering the best
              shopping experience.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:text-right">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <nav className="space-y-2">
              <a href="/about" className="block text-slate-300 hover:text-white transition-colors duration-200">
                About Us
              </a>
              <a href="/contact" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
              <a href="/faq" className="block text-slate-300 hover:text-white transition-colors duration-200">
                FAQ
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>© 2025 La Empresa</div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/terms" className="hover:text-white transition-colors duration-200">
                Terms & Conditions
              </a>
              <span className="hidden md:inline">|</span>
              <a href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a href="https://aldeatech.com" className="hover:text-white transition-colors duration-200">
                Developed by Aldeatech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
