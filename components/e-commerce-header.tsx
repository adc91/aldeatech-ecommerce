'use client';

import { useState } from 'react';
import { 
    Search, 
    User, 
    ShoppingCart, 
    Menu, 
    Truck, 
    Store,
    Laptop,
    Dumbbell,
    Car,
    Sofa,
    Tag,
    Users,
    Phone,
    HelpCircle,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCartModal } from './shopping-cart-modal';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

export function ECommerceHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { state, dispatch } = useCart();

    const getTotalItems = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="w-full">
            {/* Main Header */}
            <header className="bg-gradient-to-b from-white to-slate-50/50 border-b border-border shadow-lg backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-5">
                    {/* Desktop Layout */}
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="group">
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
                                    <img
                                        src="/aldeatech-logo-ecommerce.png"
                                        alt="AldeaTech"
                                        className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-sm"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Search Section */}
                        <div className="flex-1 max-w-2xl mx-8">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors duration-200 group-focus-within:text-primary" />
                                <Input
                                    type="search"
                                    placeholder="¿Qué estás buscando hoy?"
                                    className="pl-12 pr-6 py-4 w-full bg-white/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 placeholder:text-muted-foreground/80"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <Button
                                        size="sm"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                                    >
                                        <Search className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* User Actions Section */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="group flex items-center gap-2 px-4 py-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-sm border border-transparent hover:border-primary/10"
                            >
                                <User className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                                <span className="hidden lg:inline text-sm font-medium">Mi Cuenta</span>
                            </Button>
                            
                            <Button
                                variant="ghost"
                                size="sm"
                                className="group flex items-center gap-2 px-4 py-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-sm border border-transparent hover:border-primary/10 relative"
                                onClick={() =>
                                    dispatch({ type: 'TOGGLE_CART' })
                                }
                            >
                                <div className="relative">
                                    <ShoppingCart className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                                    {getTotalItems() > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse">
                                            {getTotalItems()}
                                        </span>
                                    )}
                                </div>
                                <span className="hidden lg:inline text-sm font-medium">
                                    Carrito {getTotalItems() > 0 && `(${getTotalItems()})`}
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <div className="flex items-center justify-between mb-6">
                            <Link href="/" className="group">
                                <div className="flex items-center p-2 rounded-xl hover:bg-primary/5 transition-all duration-300">
                                    <img
                                        src="/aldeatech-logo-mobile.png"
                                        alt="AldeaTech"
                                        className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-sm"
                                    />
                                </div>
                            </Link>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="group p-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="group p-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-300 hover:scale-[1.02] relative"
                                    onClick={() =>
                                        dispatch({ type: 'TOGGLE_CART' })
                                    }
                                >
                                    <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                    {getTotalItems() > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse">
                                            {getTotalItems()}
                                        </span>
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Search */}
                        <div className="relative group mb-6">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors duration-200 group-focus-within:text-primary" />
                            <Input
                                type="search"
                                placeholder="Buscar productos..."
                                className="pl-12 pr-16 py-4 w-full bg-white/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Button
                                    size="sm"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="bg-gradient-to-r from-white to-slate-50 border-b border-border shadow-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="hidden lg:flex items-center justify-center py-4">
                        <div className="flex items-center gap-1">
                            {/* Menu items with icons and modern styling */}
                            <Link
                                href="/"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Store className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Tienda</span>
                            </Link>
                            
                            <Link
                                href="/electronics"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Laptop className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Electrónica</span>
                            </Link>
                            
                            <Link
                                href="/deportes"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Dumbbell className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Deportes</span>
                            </Link>
                            
                            <Link
                                href="/automotriz"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Car className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Automotriz</span>
                            </Link>
                            
                            <Link
                                href="/muebles"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Sofa className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Muebles</span>
                            </Link>
                            
                            {/* Separator */}
                            <div className="h-6 w-px bg-border mx-2" />
                            
                            <Link
                                href="/ofertas"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md border border-primary/20"
                            >
                                <Tag className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-semibold">Ofertas</span>
                            </Link>
                            
                            {/* Separator */}
                            <div className="h-6 w-px bg-border mx-2" />
                            
                            <Link
                                href="/nosotros"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Nosotros</span>
                            </Link>
                            
                            <Link
                                href="/contactanos"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>Contacto</span>
                            </Link>
                            
                            <Link
                                href="/preguntas-frecuentes"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
                            >
                                <HelpCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                <span>FAQ</span>
                            </Link>
                        </div>
                    </div>

                    {/* Tablet Navigation */}
                    <div className="hidden md:flex lg:hidden items-center justify-center py-3">
                        <div className="flex flex-wrap items-center justify-center gap-1">
                            <Link href="/" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all duration-200">
                                <Store className="h-4 w-4" />
                                <span>Tienda</span>
                            </Link>
                            <Link href="/electronics" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all duration-200">
                                <Laptop className="h-4 w-4" />
                                <span>Electrónica</span>
                            </Link>
                            <Link href="/deportes" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all duration-200">
                                <Dumbbell className="h-4 w-4" />
                                <span>Deportes</span>
                            </Link>
                            <Link href="/ofertas" className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-md hover:bg-primary/15 transition-all duration-200">
                                <Tag className="h-4 w-4" />
                                <span>Ofertas</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-full justify-between py-3 hover:bg-primary/5 transition-colors duration-200"
                        >
                            <span className="font-medium">Explorar Categorías</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </Button>

                        {isMenuOpen && (
                            <div className="pb-4 animate-in slide-in-from-top-5 duration-200">
                                <div className="bg-card rounded-lg shadow-sm border border-border p-2 mt-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Store className="h-4 w-4" />
                                            <span>Tienda</span>
                                        </Link>
                                        <Link
                                            href="/electronics"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Laptop className="h-4 w-4" />
                                            <span>Electrónica</span>
                                        </Link>
                                        <Link
                                            href="/deportes"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Dumbbell className="h-4 w-4" />
                                            <span>Deportes</span>
                                        </Link>
                                        <Link
                                            href="/automotriz"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Car className="h-4 w-4" />
                                            <span>Automotriz</span>
                                        </Link>
                                        <Link
                                            href="/muebles"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Sofa className="h-4 w-4" />
                                            <span>Muebles</span>
                                        </Link>
                                        <Link
                                            href="/ofertas"
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/15 rounded-md transition-all duration-200 col-span-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Tag className="h-4 w-4" />
                                            <span>🔥 Ofertas Especiales</span>
                                        </Link>
                                    </div>
                                    
                                    {/* Secondary links */}
                                    <div className="border-t border-border pt-2 mt-2">
                                        <div className="flex flex-col gap-1">
                                            <Link
                                                href="/nosotros"
                                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <Users className="h-4 w-4" />
                                                <span>Sobre Nosotros</span>
                                            </Link>
                                            <Link
                                                href="/contactanos"
                                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <Phone className="h-4 w-4" />
                                                <span>Contacto</span>
                                            </Link>
                                            <Link
                                                href="/preguntas-frecuentes"
                                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <HelpCircle className="h-4 w-4" />
                                                <span>Preguntas Frecuentes</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="bg-muted text-muted-foreground py-3 px-4">
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
                    <Truck className="h-4 w-4" />
                    <span>Envíos a nivel local e internacional</span>
                </div>
            </div>

            <ShoppingCartModal
                isOpen={state.isOpen}
                onClose={() => dispatch({ type: 'CLOSE_CART' })}
            />
        </div>
    );
}
