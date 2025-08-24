# 📚 AldeaTech E-Commerce - Documentación Técnica Detallada

Documentación técnica comprehensiva de la arquitectura, componentes y patrones implementados en el proyecto AldeaTech E-Commerce.

## 📋 Índice

- [Arquitectura de Componentes React](#arquitectura-de-componentes-react)
- [Flujo de Datos del Carrito](#flujo-de-datos-del-carrito)
- [Sistema de Navegación](#sistema-de-navegación)
- [Integración Tailwind CSS v4](#integración-tailwind-css-v4)
- [Configuración TypeScript](#configuración-typescript)
- [Estructura de Rutas Next.js](#estructura-de-rutas-nextjs)
- [Dependencias Críticas](#dependencias-críticas)
- [Patrones de Desarrollo](#patrones-de-desarrollo)

---

## 🏗️ Arquitectura de Componentes React

### Jerarquía de Componentes

```
App (layout.tsx)
├── CartProvider (lib/cart-context.tsx)
├── ECommerceHeader (components/e-commerce-header.tsx)
│   ├── ShoppingCartModal (components/shopping-cart-modal.tsx)
│   └── Navigation Links
├── Page Content
│   ├── HeroCarousel (components/hero-carousel.tsx)
│   ├── FeaturedCategories (components/featured-categories.tsx)
│   ├── FeaturedProducts (components/featured-products.tsx)
│   ├── PromotionalBlocks (components/promotional-blocks.tsx)
│   ├── CustomerTestimonials (components/customer-testimonials.tsx)
│   └── FAQSection (components/faq-section.tsx)
└── ECommerceFooter (components/e-commerce-footer.tsx)
```

### Arquitectura de UI
**Sistema de design modernizado con colores azules y containers consistentes**

- 🎨 **Esquema de colores**: Azul principal (#0d6efd) y secundario (#052c65)
- 📐 **Containers**: max-w-6xl (1280px) para ancho consistente
- 🎭 **Iconografía**: Sistema categorizado con Lucide React
- ✨ **FAQ modernizado**: Icons por categoría con diseño mejorado

### CartContext - Estado Global con useReducer

**Archivo**: `lib/cart-context.tsx`

#### Interfaces TypeScript

```typescript
interface CartItem {
  id: number
  name: string
  price: string        // Formato: "$99.999"
  priceValue: number   // Valor numérico: 99999
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean      // Control del modal
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
```

#### Lógica del Reducer

```typescript
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        // Incrementar cantidad si el producto ya existe
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      
      // Agregar nuevo producto
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }
    }
    
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        // Remover item si quantity es 0 o negativo
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        }
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case "CLEAR_CART":
      return { ...state, items: [] }
    
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen }
    
    case "OPEN_CART":
      return { ...state, isOpen: true }
    
    case "CLOSE_CART":
      return { ...state, isOpen: false }
    
    default:
      return state
  }
}
```

#### Provider y Custom Hook

```typescript
// Context Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false
  })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook con validación
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
```

### Componentes UI Principales

#### ECommerceHeader

**Archivo**: `components/e-commerce-header.tsx`
**Funcionalidades**:
- Navegación responsive con menú móvil
- Barra de búsqueda (UI preparado)
- Contador de items en carrito
- Modal del carrito integrado

**Estructura**:
```typescript
export function ECommerceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useCart()

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="w-full">
      {/* Main Header */}
      <header className="bg-background border-b border-border shadow-sm">
        {/* Desktop Layout */}
        {/* Mobile Layout */}
      </header>
      
      {/* Navigation */}
      <nav className="bg-muted/30 border-b border-border">
        {/* Desktop Navigation */}
        {/* Mobile Navigation */}
      </nav>
      
      {/* Shipping Info */}
      <div className="bg-muted text-muted-foreground py-3 px-4">
        {/* Shipping information banner */}
      </div>
      
      {/* Cart Modal */}
      <ShoppingCartModal 
        isOpen={state.isOpen} 
        onClose={() => dispatch({ type: "CLOSE_CART" })} 
      />
    </div>
  )
}
```

#### FeaturedProducts con Embla Carousel

**Archivo**: `components/featured-products.tsx`
**Tecnología**: `embla-carousel-react`

```typescript
export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, products.length - itemsPerView)

  // Lógica de navegación del carousel
  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
  }

  return (
    <section className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Featured Products
        </h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <Button onClick={prevSlide} disabled={currentIndex === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Products Container */}
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-primary w-8" : "bg-muted-foreground/30"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 🛒 Flujo de Datos del Carrito de Compras

### Diagrama de Flujo

```
Usuario Interactúa
        ↓
[Botón "Agregar al Carrito"]
        ↓
dispatch({ type: "ADD_ITEM", payload: product })
        ↓
CartReducer procesa acción
        ↓
Estado se actualiza inmediatamente
        ↓
Componentes suscritos re-renderizan:
        ├── Header (contador de items)
        ├── CartModal (lista de productos)
        └── CartPage (página completa)
```

### Estados del Carrito

#### 1. Agregar Producto
```typescript
// En cualquier componente de producto
const { dispatch } = useCart()

const handleAddToCart = (product: Product) => {
  dispatch({
    type: "ADD_ITEM",
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image
    }
  })
}
```

#### 2. Actualizar Cantidad
```typescript
// En CartModal o CartPage
const updateQuantity = (id: number, quantity: number) => {
  dispatch({ 
    type: "UPDATE_QUANTITY", 
    payload: { id, quantity } 
  })
}

// Incrementar/Decrementar
const increment = (id: number) => {
  const item = state.items.find(item => item.id === id)
  if (item) {
    updateQuantity(id, item.quantity + 1)
  }
}
```

#### 3. Cálculos Derivados
```typescript
// En CartPage (app/carrito/page.tsx)
const getTotalItems = () => {
  return state.items.reduce((total, item) => total + item.quantity, 0)
}

const getSubtotal = () => {
  return state.items.reduce((total, item) => total + (item.priceValue * item.quantity), 0)
}

const getShipping = () => {
  return getSubtotal() > 100000 ? 0 : 15000 // Envío gratis >$100,000
}

const getTaxes = () => {
  return Math.round(getSubtotal() * 0.19) // IVA 19%
}

const getFinalTotal = () => {
  return getSubtotal() + getShipping() + getTaxes()
}
```

### Persistencia del Estado

**Actual**: Estado en memoria (se pierde al recargar)
**Futuro**: localStorage o base de datos

```typescript
// Implementación futura con localStorage
useEffect(() => {
  const savedCart = localStorage.getItem('aldeatech-cart')
  if (savedCart) {
    dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) })
  }
}, [])

useEffect(() => {
  localStorage.setItem('aldeatech-cart', JSON.stringify(state.items))
}, [state.items])
```

---

## 🧭 Sistema de Navegación

### Estructura de Navegación

#### Next.js App Router File-System Routing

```
app/
├── page.tsx                    → "/"
├── carrito/
│   └── page.tsx               → "/carrito"
├── electronics/
│   └── page.tsx               → "/electronics"
├── celulares/
│   └── page.tsx               → "/celulares"
├── televisores/
│   └── page.tsx               → "/televisores"
├── consolas/
│   └── page.tsx               → "/consolas"
├── deportes/
│   └── page.tsx               → "/deportes"
├── calzados-deportivos/
│   └── page.tsx               → "/calzados-deportivos"
├── automotriz/
│   └── page.tsx               → "/automotriz"
├── muebles/
│   └── page.tsx               → "/muebles"
├── contactanos/
│   └── page.tsx               → "/contactanos"
├── nosotros/
│   └── page.tsx               → "/nosotros"
└── preguntas-frecuentes/
    ├── loading.tsx            → Loading UI
    └── page.tsx               → "/preguntas-frecuentes"
```

### Configuración de Navegación

#### ECommerceHeader - Enlaces de Navegación

```typescript
// Desktop Navigation
const navigationLinks = [
  { href: "/", label: "Tienda" },
  { href: "/electronics", label: "Electrónica" },
  { href: "/deportes", label: "Deportes" },
  { href: "/automotriz", label: "Automotriz" },
  { href: "/muebles", label: "Muebles" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/nosotros", label: "La Empresa" },
  { href: "/contactanos", label: "Contacto" },
  { href: "/preguntas-frecuentes", label: "FAQs" }
]

// Renderizado de navegación
{navigationLinks.map(link => (
  <Link 
    key={link.href}
    href={link.href} 
    className="text-foreground hover:text-primary transition-colors font-medium"
  >
    {link.label}
  </Link>
))}
```

### Template de Categoría Reutilizable

**Archivo**: `components/category-page-template.tsx`

```typescript
interface CategoryPageTemplateProps {
  title: string
  description: string
  products: Product[]
  backgroundImage?: string
}

export function CategoryPageTemplate({ 
  title, 
  description, 
  products,
  backgroundImage 
}: CategoryPageTemplateProps) {
  const { dispatch } = useCart()

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <div className="min-h-screen bg-background">
      <ECommerceHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <ECommerceFooter />
    </div>
  )
}
```

### Breadcrumbs y Navegación Contextual

```typescript
// Implementación en CartPage
<nav className="text-sm text-muted-foreground mb-8">
  <Link href="/" className="hover:text-foreground cursor-pointer transition-colors">
    Home
  </Link>
  <span className="mx-2">&gt;</span>
  <span className="text-foreground font-medium">Carrito de Compras</span>
</nav>
```

---

## 🎨 Integración Tailwind CSS v4

### Design System Implementation

#### CSS Variables Customizadas

**Archivo**: `app/globals.css`

```css
:root {
  /* Colores principales AldeaTech */
  --primary: #0d6efd;       /* Azul principal */
  --secondary: #052c65;     /* Azul secundario */
  --accent: #0d6efd;        /* Color de acento azul */
  
  /* Colores neutros */
  --background: #ffffff;    /* Fondo principal */
  --foreground: #475569;    /* Texto principal */
  --card: #f1f5f9;         /* Fondo de cards */
  --card-foreground: #475569;
  
  /* Estados interactivos */
  --muted: #f1f5f9;
  --muted-foreground: #475569;
  --border: #e2e8f0;
  --input: #f1f5f9;
  
  /* Utilidades */
  --radius: 0.5rem;        /* Border radius base */
}

/* Dark mode variants */
.dark {
  --background: #0f172a;
  --foreground: #f1f5f9;
  --primary: #10b981;
  --card: #1e293b;
  --border: #334155;
  /* ... más variables dark mode */
}
```

#### Theme Integration

```css
@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

### Utility Classes y Patrones

#### Componente con Design System

```typescript
// Ejemplo: ProductCard component
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className={cn(
      // Base styles usando design system
      "overflow-hidden border-border bg-card",
      // Interactive states
      "transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:shadow-primary/10",
      // Focus states para accesibilidad
      "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
    )}>
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover",
              "transition-transform duration-300 group-hover:scale-110"
            )}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-accent mb-4">{product.price}</p>
          
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

#### Responsive Design Patterns

```typescript
// Grid responsivo estándar
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"

// Flexbox responsive
className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"

// Spacing responsive
className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16"

// Typography responsive
className="text-2xl md:text-3xl lg:text-4xl font-bold"

// Visibility responsive
className="hidden md:block"        // Solo desktop
className="block md:hidden"        // Solo móvil
className="md:flex md:items-center md:gap-4"  // Flex solo en desktop
```

### cn() Function - Utility para Clases Condicionales

**Archivo**: `lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Uso en componentes
className={cn(
  // Clases base
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  
  // Clases condicionales
  disabled && "pointer-events-none opacity-50",
  variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
  variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  size === "sm" && "h-9 px-3",
  size === "lg" && "h-11 px-8",
  
  // Clases adicionales del prop
  className
)}
```

---

## 📝 Configuración TypeScript

### tsconfig.json Configuration

```json
{
  "compilerOptions": {
    // Compilation settings
    "lib": ["dom", "dom.iterable", "esnext"],
    "target": "ES6",
    "module": "esnext",
    "moduleResolution": "bundler",
    
    // Type checking
    "strict": true,                 // Modo estricto habilitado
    "noEmit": true,                // Solo verificación de tipos
    "skipLibCheck": true,          // Skip type checking de node_modules
    "allowJs": true,               // Permite archivos .js
    "esModuleInterop": true,       // Interop con CommonJS
    "resolveJsonModule": true,     // Permite importar JSON
    "isolatedModules": true,       // Cada archivo como módulo separado
    
    // JSX settings
    "jsx": "preserve",             // Para Next.js
    
    // Performance
    "incremental": true,           // Compilación incremental
    
    // Path mapping
    "paths": {
      "@/*": ["./*"]              // Alias para imports absolutos
    },
    
    // Next.js specific
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### Tipos TypeScript Utilizados

#### Tipos de Datos Core

```typescript
// Product interface
interface Product {
  id: number
  name: string
  price: string        // Formato display: "$99.999"
  priceValue: number   // Valor numérico: 99999
  image: string        // URL de imagen
  category?: string    // Categoría opcional
  description?: string // Descripción opcional
}

// CartItem extends Product
interface CartItem extends Omit<Product, 'category' | 'description'> {
  quantity: number
}

// Component Props types
interface CategoryPageTemplateProps {
  title: string
  description: string
  products: Product[]
  backgroundImage?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  variant?: "grid" | "list" | "featured"
  showAddToCart?: boolean
}
```

#### Context Types

```typescript
// Cart Context types
interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}
```

#### Next.js Types

```typescript
import type { Metadata } from "next"

// Page component type
interface PageProps {
  params: { [key: string]: string | string[] | undefined }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = params.category
  
  return {
    title: `${category} - AldeaTech E-Commerce`,
    description: `Explora nuestra selección de ${category}`,
  }
}

// Layout component type
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

#### Utility Types

```typescript
// Utility types para formularios (futuro)
type FormData = {
  [K in keyof HTMLFormControlsCollection]: HTMLFormControlsCollection[K] extends HTMLInputElement
    ? string
    : never
}

// Event handler types
type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void
type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void

// Component ref types
type ButtonRef = React.ElementRef<"button">
type InputRef = React.ElementRef<"input">
```

---

## 🚀 Estructura de Rutas Next.js App Router

### App Router File Conventions

#### Layout y Page Structure

```
app/
├── layout.tsx                 # Root layout (obligatorio)
│   ├── Metadata global
│   ├── HTML structure
│   ├── Font configuration
│   └── Provider wrapping
│
├── page.tsx                   # Home page "/"
├── globals.css                # Global styles
│
├── [category]/               # Dynamic routes (futuro)
│   ├── page.tsx             # "/[category]"
│   ├── [product]/
│   │   └── page.tsx         # "/[category]/[product]"
│   └── layout.tsx           # Category layout (opcional)
│
├── carrito/
│   ├── page.tsx             # "/carrito"
│   └── loading.tsx          # Loading UI (opcional)
│
└── (categorias)/            # Route groups (organización)
    ├── electronics/
    ├── celulares/
    ├── televisores/
    └── consolas/
```

### Metadata Configuration

#### Root Layout Metadata

```typescript
// app/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "AldeaTech E-Commerce",
    template: "%s | AldeaTech E-Commerce"
  },
  description: "Tu tienda de tecnología y productos de calidad",
  generator: "Next.js",
  applicationName: "AldeaTech E-Commerce",
  keywords: ["ecommerce", "tecnología", "productos", "AldeaTech"],
  authors: [{ name: "AldeaTech Team" }],
  creator: "AldeaTech",
  publisher: "AldeaTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aldeatech.co'),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aldeatech.co",
    title: "AldeaTech E-Commerce",
    description: "Tu tienda de tecnología y productos de calidad",
    siteName: "AldeaTech E-Commerce",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AldeaTech E-Commerce",
    description: "Tu tienda de tecnología y productos de calidad",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

#### Dynamic Metadata per Page

```typescript
// app/electronics/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Electrónica",
  description: "Encuentra los mejores productos electrónicos",
  openGraph: {
    title: "Electrónica - AldeaTech E-Commerce",
    description: "Encuentra los mejores productos electrónicos",
    url: "https://aldeatech.co/electronics",
    images: ["/electronics-og.jpg"],
  },
}

export default function ElectronicsPage() {
  return <CategoryPageTemplate {...props} />
}
```

### Loading States y Error Handling

#### Loading UI

```typescript
// app/preguntas-frecuentes/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Cargando preguntas frecuentes...</p>
      </div>
    </div>
  )
}
```

#### Error UI (futuro)

```typescript
// app/error.tsx
'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-destructive mb-4">
        ¡Algo salió mal!
      </h2>
      <p className="text-muted-foreground mb-6">
        {error.message || "Ha ocurrido un error inesperado"}
      </p>
      <Button onClick={reset}>
        Intentar de nuevo
      </Button>
    </div>
  )
}
```

### Navigation and Routing

#### Programmatic Navigation

```typescript
// Hook de navegación
import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  
  const navigateToCategory = (category: string) => {
    router.push(`/${category}`)
  }
  
  const navigateToCart = () => {
    router.push('/carrito')
  }
  
  const goBack = () => {
    router.back()
  }
  
  return { navigateToCategory, navigateToCart, goBack }
}
```

#### Link Component Usage

```typescript
import Link from "next/link"

// Links estáticos
<Link href="/electronics" className="nav-link">
  Electrónica
</Link>

// Links dinámicos
<Link href={`/categoria/${category.slug}`}>
  {category.name}
</Link>

// Links con prefetch disabled (para carrito)
<Link href="/carrito" prefetch={false}>
  Ver Carrito
</Link>
```

---

## 🔧 Dependencias Críticas

### Core Dependencies

#### Next.js Ecosystem

```json
{
  "next": "15.2.4",           // Framework principal
  "react": "^19",             // UI library
  "react-dom": "^19",         // DOM rendering
  "typescript": "^5"          // Type safety
}
```

**Funcionalidades utilizadas**:
- App Router file-system routing
- Server/Client Components
- Image optimization (preparado)
- Font optimization con `next/font`
- Metadata API
- Built-in CSS support

#### Styling Stack

```json
{
  "tailwindcss": "^4.1.9",           // CSS framework
  "@tailwindcss/postcss": "^4.1.9",  // PostCSS integration
  "tailwindcss-animate": "^1.0.7",   // Animation utilities
  "tw-animate-css": "1.3.3",         // Additional animations
  "postcss": "^8.5",                 // CSS processing
  "autoprefixer": "^10.4.20"         // Vendor prefixes
}
```

### UI Component System

#### shadcn/ui + Radix UI

```json
{
  // Radix UI primitives (20+ components)
  "@radix-ui/react-accordion": "1.2.2",
  "@radix-ui/react-alert-dialog": "1.1.4",
  "@radix-ui/react-aspect-ratio": "1.1.1",
  "@radix-ui/react-avatar": "1.1.2",
  "@radix-ui/react-checkbox": "1.1.3",
  "@radix-ui/react-collapsible": "1.1.2",
  "@radix-ui/react-context-menu": "2.2.4",
  "@radix-ui/react-dialog": "1.1.4",
  "@radix-ui/react-dropdown-menu": "2.1.4",
  "@radix-ui/react-hover-card": "1.1.4",
  "@radix-ui/react-label": "2.1.1",
  "@radix-ui/react-menubar": "1.1.4",
  "@radix-ui/react-navigation-menu": "1.2.3",
  "@radix-ui/react-popover": "1.1.4",
  "@radix-ui/react-progress": "1.1.1",
  "@radix-ui/react-radio-group": "1.2.2",
  "@radix-ui/react-scroll-area": "1.2.2",
  "@radix-ui/react-select": "2.1.4",
  "@radix-ui/react-separator": "1.1.1",
  "@radix-ui/react-slider": "latest",
  "@radix-ui/react-slot": "1.1.1",
  "@radix-ui/react-switch": "1.1.2",
  "@radix-ui/react-tabs": "1.1.2",
  "@radix-ui/react-toast": "1.2.4",
  "@radix-ui/react-toggle": "1.1.1",
  "@radix-ui/react-toggle-group": "1.1.1",
  "@radix-ui/react-tooltip": "1.1.6"
}
```

**Características clave**:
- Accesibilidad WAI-ARIA compliant
- Keyboard navigation
- Focus management
- Screen reader support
- Customizable styling

#### Utility Libraries

```json
{
  "class-variance-authority": "^0.7.1",  // Variant-based component styling
  "clsx": "^2.1.1",                      // Conditional classnames
  "tailwind-merge": "^2.5.5"            // Merge Tailwind classes
}
```

### Interactive Components

#### Embla Carousel

```json
{
  "embla-carousel-react": "8.5.1"
}
```

**Implementación**:
```typescript
import useEmblaCarousel from 'embla-carousel-react'

export function ProductCarousel({ products }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start'
  })
  
  // Navigation controls
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {products.map(product => (
          <div key={product.id} className="flex-[0_0_33.333%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Form Handling (Futuro)

```json
{
  "react-hook-form": "^7.60.0",     // Form management
  "@hookform/resolvers": "^3.10.0", // Validation resolvers
  "zod": "3.25.67"                  // Schema validation
}
```

**Patrón de uso futuro**:
```typescript
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const checkoutSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "Nombre muy corto"),
  address: z.string().min(10, "Dirección incompleta")
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

export function CheckoutForm() {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema)
  })
  
  const onSubmit = (data: CheckoutFormData) => {
    // Process checkout
  }
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

### Additional Utilities

```json
{
  "lucide-react": "^0.454.0",    // Icon library
  "date-fns": "4.1.0",           // Date utilities
  "sonner": "^1.7.4",           // Toast notifications
  "next-themes": "^0.4.6",      // Theme management
  "geist": "^1.3.1"             // Typography font
}
```

---

## 🏛️ Patrones de Desarrollo Implementados

### 1. Compound Component Pattern

**Implementación**: shadcn/ui components

```typescript
// Card compound component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título del Producto</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Contenido del producto</p>
  </CardContent>
</Card>
```

### 2. Provider Pattern

**Implementación**: CartProvider para estado global

```typescript
// app/layout.tsx
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

// Consumo en cualquier componente
function ProductCard({ product }: Props) {
  const { dispatch } = useCart() // Custom hook
  
  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }
  
  return <Button onClick={addToCart}>Agregar</Button>
}
```

### 3. Template Method Pattern

**Implementación**: CategoryPageTemplate

```typescript
// Template base con slots customizables
export function CategoryPageTemplate({ 
  title, 
  description, 
  products, 
  heroComponent,
  filtersComponent 
}: Props) {
  return (
    <div>
      <ECommerceHeader />
      
      {/* Hero slot customizable */}
      {heroComponent || <DefaultHero title={title} description={description} />}
      
      {/* Filters slot customizable */}
      {filtersComponent || <DefaultFilters />}
      
      {/* Products grid (siempre consistente) */}
      <ProductsGrid products={products} />
      
      <ECommerceFooter />
    </div>
  )
}
```

### 4. Render Props Pattern

**Implementación futura**: Para componentes complejos

```typescript
// Pattern para data fetching (futuro)
interface DataFetcherProps<T> {
  url: string
  children: (data: T, loading: boolean, error: Error | null) => React.ReactNode
}

function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    fetchData(url).then(setData).catch(setError).finally(() => setLoading(false))
  }, [url])
  
  return <>{children(data, loading, error)}</>
}

// Uso
<DataFetcher<Product[]> url="/api/products">
  {(products, loading, error) => {
    if (loading) return <ProductsSkeleton />
    if (error) return <ErrorMessage error={error} />
    if (!products) return <EmptyState />
    
    return <ProductsGrid products={products} />
  }}
</DataFetcher>
```

### 5. Observer Pattern

**Implementación**: Context + useReducer

```typescript
// El CartContext actúa como Subject
// Los componentes suscritos actúan como Observers
// Cuando el estado cambia, todos los observers se re-renderizan automáticamente

// Observer 1: Header counter
function HeaderCartCounter() {
  const { state } = useCart() // Se suscribe automáticamente
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  return <span>{totalItems}</span>
}

// Observer 2: Cart modal
function CartModal() {
  const { state } = useCart() // Se suscribe automáticamente
  
  return (
    <div>
      {state.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}
```

### 6. Strategy Pattern

**Implementación**: Button variants con class-variance-authority

```typescript
import { cva } from "class-variance-authority"

// Define strategies para diferentes variants
const buttonVariants = cva(
  // Base classes (comunes para todas las strategies)
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      // Strategy para variant
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      // Strategy para size
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

// Uso con diferentes strategies
<Button variant="primary" size="lg">Agregar al Carrito</Button>
<Button variant="outline" size="sm">Ver Detalles</Button>
```

### 7. Factory Pattern

**Implementación**: Product data creation

```typescript
// Factory para crear productos
class ProductFactory {
  static createElectronicsProduct(data: Partial<Product>): Product {
    return {
      id: data.id || Date.now(),
      name: data.name || "Producto Electrónico",
      price: data.price || "$0",
      priceValue: data.priceValue || 0,
      image: data.image || "/electronics-default.png",
      category: "electronics"
    }
  }
  
  static createSportsProduct(data: Partial<Product>): Product {
    return {
      id: data.id || Date.now(),
      name: data.name || "Producto Deportivo",
      price: data.price || "$0",
      priceValue: data.priceValue || 0,
      image: data.image || "/sports-default.png",
      category: "deportes"
    }
  }
  
  static createFromCategory(category: string, data: Partial<Product>): Product {
    const factories = {
      electronics: this.createElectronicsProduct,
      deportes: this.createSportsProduct,
      // ... más factories
    }
    
    const factory = factories[category] || this.createElectronicsProduct
    return factory(data)
  }
}

// Uso
const product = ProductFactory.createFromCategory("electronics", {
  name: "iPhone 15 Pro",
  price: "$1.299.999",
  priceValue: 1299999
})
```

### 8. Adapter Pattern

**Implementación**: API data adaptation (futuro)

```typescript
// Adapter para diferentes formatos de API
interface ApiProduct {
  product_id: number
  product_name: string
  price_cents: number
  image_url: string
}

interface AppProduct {
  id: number
  name: string
  price: string
  priceValue: number
  image: string
}

class ProductAdapter {
  static fromApi(apiProduct: ApiProduct): AppProduct {
    return {
      id: apiProduct.product_id,
      name: apiProduct.product_name,
      price: `$${(apiProduct.price_cents / 100).toLocaleString()}`,
      priceValue: apiProduct.price_cents,
      image: apiProduct.image_url
    }
  }
  
  static toApi(appProduct: AppProduct): ApiProduct {
    return {
      product_id: appProduct.id,
      product_name: appProduct.name,
      price_cents: appProduct.priceValue,
      image_url: appProduct.image
    }
  }
}

// Uso en data fetching
const fetchProducts = async (): Promise<AppProduct[]> => {
  const apiProducts = await fetch('/api/products').then(r => r.json())
  return apiProducts.map(ProductAdapter.fromApi)
}
```

### 9. Command Pattern

**Implementación**: Cart actions con useReducer

```typescript
// Commands encapsulados como actions
interface AddItemCommand {
  type: "ADD_ITEM"
  payload: Omit<CartItem, "quantity">
}

interface RemoveItemCommand {
  type: "REMOVE_ITEM"
  payload: number
}

// Command dispatcher (useReducer dispatch)
const { dispatch } = useCart()

// Ejecutar commands
dispatch({ type: "ADD_ITEM", payload: product })    // AddItemCommand
dispatch({ type: "REMOVE_ITEM", payload: productId }) // RemoveItemCommand

// Commands pueden ser creados por helper functions
const createAddItemCommand = (product: Product): AddItemCommand => ({
  type: "ADD_ITEM",
  payload: product
})

const addToCart = (product: Product) => {
  const command = createAddItemCommand(product)
  dispatch(command)
}
```

### 10. Decorator Pattern

**Implementación**: HOC para analytics (futuro)

```typescript
// HOC decorator para tracking
function withAnalytics<T extends {}>(WrappedComponent: React.ComponentType<T>) {
  return function AnalyticsWrapper(props: T) {
    useEffect(() => {
      // Track component mount
      analytics.track('component_viewed', {
        component: WrappedComponent.name
      })
    }, [])
    
    return <WrappedComponent {...props} />
  }
}

// Decorar componente
const ProductCardWithAnalytics = withAnalytics(ProductCard)

// HOC para error boundaries
function withErrorBoundary<T extends {}>(WrappedComponent: React.ComponentType<T>) {
  return function ErrorBoundaryWrapper(props: T) {
    return (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    )
  }
}
```

---

## 📊 Performance Patterns

### Code Splitting

```typescript
// Lazy loading de componentes pesados
import { lazy, Suspense } from 'react'

const HeavyChart = lazy(() => import('./HeavyChart'))
const ProductModal = lazy(() => import('./ProductModal'))

export function Dashboard() {
  return (
    <div>
      <Suspense fallback={<ChartSkeleton />}>
        <HeavyChart />
      </Suspense>
      
      <Suspense fallback={<ModalSkeleton />}>
        <ProductModal />
      </Suspense>
    </div>
  )
}
```

### Memoization Patterns

```typescript
// Memoización de componentes pesados
const ProductCard = React.memo(function ProductCard({ product }: Props) {
  return (
    <Card>
      {/* Component content */}
    </Card>
  )
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.product.id === nextProps.product.id
})

// Memoización de valores calculados
function CartSummary() {
  const { state } = useCart()
  
  const totals = useMemo(() => {
    const subtotal = state.items.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0)
    const shipping = subtotal > 100000 ? 0 : 15000
    const taxes = Math.round(subtotal * 0.19)
    
    return { subtotal, shipping, taxes, total: subtotal + shipping + taxes }
  }, [state.items])
  
  return <div>{/* Render totals */}</div>
}
```
