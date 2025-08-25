# 🛍️ [AldeaTech](https://aldeatech.co) E-Commerce

Una aplicación de comercio electrónico moderna construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

> **📚 Proyecto de Aprendizaje**  
> Este proyecto **NO es comercial** y forma parte de un proyecto de aprendizaje continuo de las nuevas tecnologías web para mantenerse actualizado. Es de **libre uso y código abierto**, y puede utilizarse como base para cualquier proyecto comercial sin restricciones.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Quick Start

```bash
# Clonar el repositorio
git clone <repository-url> aldea-ecommerce
cd aldea-ecommerce

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Abrir en el navegador
open http://localhost:3000
```

## 📋 Tabla de Contenidos

- [Prerrequisitos](#-prerrequisitos)
- [Instalación](#-instalación)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Comandos de Desarrollo](#-comandos-de-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Guía de Contribución](#-guía-de-contribución)
- [Arquitectura Feature-Based](#-arquitectura-feature-based)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)

## 🔧 Prerrequisitos

### Software Requerido
- **Node.js** 18.x o superior (recomendado: 20.x LTS)
- **pnpm** 8.x (gestor de paquetes preferido)

### Verificar Instalación
```bash
# Verificar Node.js
node --version
# Salida esperada: v20.x.x

# Verificar pnpm
pnpm --version  
# Salida esperada: 8.x.x

# Si no tienes pnpm instalado
npm install -g pnpm
```

### Herramientas de Desarrollo Recomendadas
- **VS Code** con extensiones:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

## 📦 Instalación

### 1. Clonar el Repositorio
```bash
git clone <repository-url> aldea-ecommerce
cd aldea-ecommerce
```

### 2. Instalar Dependencias
```bash
# Usando pnpm (recomendado)
pnpm install

# Alternativa con npm
npm install

# Alternativa con yarn
yarn install
```

### 3. Verificar la Instalación
```bash
# Verificar que todas las dependencias están instaladas
pnpm list --depth=0

# Verificar TypeScript
pnpm tsc --noEmit
```

## ⚙️ Configuración del Entorno

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="AldeaTech E-Commerce"

# Para producción (opcional)
# NEXT_PUBLIC_API_URL=https://api.aldeatech.com
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Configuración de Desarrollo Local

#### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para desarrollo local
  images: {
    domains: ['localhost'],
  },
  // Habilitar optimizaciones experimentales
  experimental: {
    optimizeCss: true,
  }
}

export default nextConfig
```

#### Configuración de TypeScript
El proyecto usa `strict: true` para máxima type safety:

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "target": "ES6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🛠️ Comandos de Desarrollo

### Comandos Básicos
```bash
# Desarrollo local
pnpm dev              # Inicia servidor de desarrollo en puerto 3000
pnpm dev --port 3001  # Inicia en puerto específico

# Construcción para producción
pnpm build            # Genera build optimizado
pnpm start            # Inicia servidor de producción

# Análisis de código
pnpm lint             # Ejecuta ESLint
pnpm type-check       # Verifica tipos TypeScript (si está configurado)
```

### Comandos Avanzados
```bash
# Análisis del bundle (si tienes @next/bundle-analyzer)
pnpm analyze

# Limpiar cache de Next.js
pnpm clean            # Elimina .next/ y node_modules/.cache

# Verificar dependencias
pnpm audit            # Auditoría de seguridad
pnpm outdated         # Ver dependencias desactualizadas
```

### shadcn/ui Components
```bash
# Agregar nuevos componentes UI
npx shadcn@latest add [component-name]

# Ejemplos
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add form

# Ver componentes disponibles
npx shadcn@latest add --help
```

### Scripts Personalizados
```bash
# Si agregas scripts adicionales en package.json
pnpm test             # Tests (cuando se implementen)
pnpm storybook        # Storybook (si se agrega)
pnpm e2e              # Tests end-to-end (Playwright)
```

## 📁 Estructura del Proyecto

```
aldea-ecommerce/
│
├── 📂 app/                      # Next.js App Router con Route Groups
│   ├── 📄 layout.tsx            # Layout raíz con providers
│   ├── 📄 page.tsx              # Página principal (homepage)
│   ├── 📄 globals.css           # Estilos Tailwind globales
│   │
│   ├── 📂 api/                  # API Routes
│   │   ├── 📂 categories/       # API de categorías
│   │   │   ├── 📄 route.ts      # GET /api/categories
│   │   │   └── 📂 [slug]/       # GET /api/categories/[slug]
│   │   │       └── 📄 route.ts
│   │   ├── 📂 products/         # API de productos
│   │   │   ├── 📄 route.ts      # GET /api/products
│   │   │   └── 📂 [id]/         # GET /api/products/[id]
│   │   │       └── 📄 route.ts
│   │   ├── 📂 brands/           # API de marcas
│   │   │   └── 📄 route.ts      # GET /api/brands
│   │   └── 📂 colors/           # API de colores
│   │       └── 📄 route.ts      # GET /api/colors
│   │
│   ├── 📂 (marketing)/          # Grupo de rutas de marketing
│   │   ├── 📂 contactanos/      # Página de contacto
│   │   ├── 📂 preguntas-frecuentes/  # FAQ
│   │   └── 📂 nosotros/         # Acerca de
│   │
│   └── 📂 (shop)/               # Grupo de rutas de e-commerce
│       ├── 📂 carrito/          # Carrito de compras
│       ├── 📂 electronics/      # Categorías de productos
│       ├── 📂 celulares/
│       ├── 📂 televisores/
│       ├── 📂 consolas/
│       ├── 📂 deportes/
│       ├── 📂 calzados-deportivos/
│       ├── 📂 automotriz/
│       └── 📂 muebles/
│
├── 📂 features/                 # Arquitectura basada en características
│   ├── 📂 cart/                 # Feature del carrito de compras
│   │   ├── 📂 components/       # Componentes específicos del carrito
│   │   │   └── 📄 shopping-cart-modal.tsx
│   │   ├── 📂 context/          # Contexto y estado del carrito
│   │   │   └── 📄 cart-context.tsx
│   │   ├── 📂 services/         # Lógica de negocio del carrito
│   │   │   └── 📄 cart-service.ts
│   │   ├── 📄 types.ts          # Tipos TypeScript
│   │   └── 📄 index.ts          # Exports del feature
│   │
│   ├── 📂 products/             # Feature de productos
│   │   ├── 📂 components/       # Componentes de productos
│   │   │   ├── 📄 category-page-template.tsx
│   │   │   ├── 📄 featured-products.tsx
│   │   │   ├── 📄 featured-categories.tsx
│   │   │   └── 📄 electronics-content.tsx
│   │   ├── 📂 services/         # Servicios de productos
│   │   │   └── 📄 products-service.ts
│   │   ├── 📄 types.ts          # Tipos de productos
│   │   └── 📄 index.ts          # Exports del feature
│   │
│   └── 📂 user/                 # Feature de usuario (preparado)
│       ├── 📂 components/       # Componentes de usuario
│       ├── 📂 context/          # Contexto de usuario
│       ├── 📂 services/         # Servicios de usuario
│       │   └── 📄 user-service.ts
│       ├── 📄 types.ts          # Tipos de usuario
│       └── 📄 index.ts          # Exports del feature
│
├── 📂 components/               # Componentes organizados por dominio
│   ├── 📂 ui/                   # Componentes base shadcn/ui (40+ componentes)
│   │   ├── 📄 button.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 carousel.tsx
│   │   └── ... (40+ componentes UI)
│   │
│   ├── 📂 common/               # Componentes compartidos
│   │   ├── 📄 header.tsx        # Header con navegación
│   │   ├── 📄 footer.tsx        # Footer del sitio
│   │   ├── 📄 faq-section.tsx   # Sección de FAQ
│   │   └── 📄 theme-provider.tsx # Proveedor de temas
│   │
│   ├── 📂 marketing/            # Componentes de marketing
│   │   ├── 📄 hero-carousel.tsx # Carrusel principal
│   │   ├── 📄 customer-testimonials.tsx # Testimonios
│   │   └── 📄 promotional-blocks.tsx # Bloques promocionales
│   │
│   └── 📂 shop/                 # Componentes específicos de tienda
│
├── 📂 src/                      # Código fuente organizado
│   ├── 📂 lib/                  # Utilidades y helpers
│   │   ├── 📄 utils.ts          # Utilidades de Tailwind (cn function)
│   │   └── 📄 json-database.ts  # Base de datos JSON ✅
│   │
│   ├── 📂 hooks/                # Hooks genéricos reutilizables
│   │   ├── 📄 use-mobile.ts     # Detectar dispositivos móviles
│   │   └── 📄 use-toast.ts      # Sistema de notificaciones
│   │
│   └── 📂 styles/               # Estilos globales
│       └── 📄 globals.css       # CSS global de Tailwind
│
├── 📂 data/                     # Base de datos JSON ✅
│   └── 📄 database.json         # Datos de productos, categorías, etc.
│
├── 📂 public/                   # Assets estáticos
│   ├── 🖼️ aldeatech-logo-*.png  # Logos de la marca
│   ├── 🖼️ *-product-*.png       # Imágenes de productos
│   └── 🖼️ placeholder*.png      # Placeholders
│
├── 📄 components.json           # Configuración shadcn/ui
├── 📄 tailwind.config.js        # Configuración Tailwind (si existe)
├── 📄 postcss.config.mjs        # PostCSS config
├── 📄 next.config.mjs           # Configuración Next.js
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 package.json              # Dependencias y scripts
├── 📄 pnpm-lock.yaml            # Lock file de pnpm
├── 📄 claude.md                 # Documentación técnica completa
├── 📄 claude.settings           # Configuración de desarrollo
└── 📄 README.md                 # Este archivo
```

## 🏗️ Arquitectura Feature-Based

### Beneficios de la Arquitectura

- 🏗️ **Modularidad**: Cada feature es autocontenido con sus components, services y types
- 🔄 **Escalabilidad**: Fácil agregar nuevos features sin afectar existentes  
- 🎯 **Separación clara**: Route groups separan marketing de shop
- 📦 **Reutilización**: Components organizados por dominio
- 🧪 **Mantenibilidad**: Código relacionado agrupado, imports más claros

### Features Implementadas

#### `features/cart/` - Carrito de Compras Completo
- **Context**: Estado global del carrito con React Context API
- **Components**: Modal del carrito, componentes de interacción
- **Services**: Cálculos de totales, impuestos, envío
- **Types**: Interfaces TypeScript para CartItem, CartState, CartAction

#### `features/products/` - Gestión de Productos
- **Components**: Templates de categorías, productos destacados
- **Services**: Filtros, búsqueda, gestión de catálogo
- **Types**: Product, ProductCategory, filtros

#### `features/user/` - Base para Usuarios (Preparado)
- **Services**: Gestión de perfiles, direcciones
- **Types**: User, UserPreferences, UserAddress
- **Listo para**: Sistema de autenticación y perfiles

### Explicación de Directorios

#### `app/` - Next.js App Router con Route Groups
- **`(marketing)/`**: Páginas institucionales (contacto, FAQ, sobre nosotros)
- **`(shop)/`**: Páginas de e-commerce (carrito, categorías de productos)
- **Route Groups**: Organizan rutas sin afectar URLs

#### `components/` por Dominio
- **`ui/`**: 40+ componentes base de shadcn/ui
- **`common/`**: Header, Footer, FAQ - compartidos en toda la app
- **`marketing/`**: Hero, testimonials, promociones
- **`shop/`**: Componentes específicos de tienda (preparado para expansión)

#### `src/` - Código Fuente Organizado
- **`lib/`**: Utilidades y helpers (función `cn`, configuraciones)
- **`hooks/`**: Solo hooks genéricos y reutilizables
- **`styles/`**: Estilos globales y variables CSS
- Prefijo `use` para seguir convenciones de React

## 🤝 Guía de Contribución

### Flujo de Trabajo para Nuevos Desarrolladores

#### 1. Configuración Inicial
```bash
# Fork del repositorio (en GitHub)
git clone https://github.com/tu-usuario/aldea-ecommerce.git
cd aldea-ecommerce

# Agregar upstream remoto
git remote add upstream https://github.com/original-repo/aldea-ecommerce.git

# Instalar dependencias
pnpm install

# Crear rama de desarrollo
git checkout -b feature/mi-nueva-funcionalidad
```

#### 2. Estándares de Código

##### TypeScript
```typescript
// ✅ CORRECTO - Interface bien definida
interface ProductCardProps {
  id: number
  name: string
  price: string
  priceValue: number
  image: string
  onAddToCart?: (product: Product) => void
}

// ✅ CORRECTO - Componente funcional tipado
export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Contenido */}
    </Card>
  )
}
```

##### Tailwind CSS
```typescript
// ✅ CORRECTO - Usar design system
className="bg-primary text-primary-foreground hover:bg-primary/90"

// ✅ CORRECTO - Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// ✅ CORRECTO - Clases condicionales con cn()
import { cn } from "@/lib/utils"

className={cn(
  "base-classes transition-all",
  isActive && "bg-primary text-primary-foreground",
  size === "large" && "text-xl p-6"
)}
```

#### 3. Agregar Nuevas Funcionalidades

##### Crear Nueva Página de Categoría
```bash
# 1. Crear estructura de carpetas
mkdir app/nueva-categoria
touch app/nueva-categoria/page.tsx

# 2. Usar template de categoría
```

```typescript
// app/nueva-categoria/page.tsx
import { CategoryPageTemplate } from "@/components/category-page-template"
import type { Metadata } from "next"

const products = [
  {
    id: 1,
    name: "Producto Ejemplo",
    price: "$99.999",
    priceValue: 99999,
    image: "/producto-ejemplo.png"
  },
  // ... más productos
]

export const metadata: Metadata = {
  title: "Nueva Categoría - AldeaTech E-Commerce",
  description: "Explora nuestra selección de productos en nueva categoría",
}

export default function NuevaCategoriaPage() {
  return (
    <CategoryPageTemplate
      title="Nueva Categoría"
      description="Descripción de la nueva categoría de productos"
      products={products}
    />
  )
}
```

##### Crear Nuevo Componente
```typescript
// components/mi-componente.tsx
"use client" // Solo si necesita interactividad

interface MiComponenteProps {
  title: string
  items?: string[]
  variant?: "default" | "featured"
}

export function MiComponente({ 
  title, 
  items = [], 
  variant = "default" 
}: MiComponenteProps) {
  return (
    <div className={cn(
      "container mx-auto px-4 py-8",
      variant === "featured" && "bg-muted/50"
    )}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

#### 4. Testing y Validación

##### Pre-commit Checklist
```bash
# Verificar TypeScript
pnpm tsc --noEmit

# Ejecutar linting
pnpm lint

# Verificar build
pnpm build

# Test visual en desarrollo
pnpm dev
# Navegar y probar funcionalidad manualmente
```

##### Pull Request Checklist
- [ ] Código sigue las convenciones del proyecto
- [ ] TypeScript compila sin errores
- [ ] ESLint pasa sin warnings
- [ ] Funcionalidad probada en desarrollo
- [ ] Responsive design verificado
- [ ] Componentes reutilizables cuando sea apropiado
- [ ] Documentación actualizada si es necesario

#### 5. Estructura de Commits

```bash
# Formato de commits
git commit -m "tipo: descripción concisa

Descripción más detallada si es necesario.

Fixes #123"

# Ejemplos
git commit -m "feat: agregar categoría de libros

- Crear página app/libros/page.tsx
- Agregar productos de ejemplo
- Actualizar navegación en header"

git commit -m "fix: corregir cálculo de impuestos en carrito

El cálculo de IVA no se aplicaba correctamente
para productos con descuento.

Fixes #45"

git commit -m "style: mejorar responsive design del header

- Optimizar menú móvil
- Ajustar espaciado en tablets"
```

### Tipos de Commits
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `style`: Cambios de estilo/UI
- `refactor`: Refactoring de código
- `docs`: Documentación
- `test`: Tests
- `chore`: Tareas de mantenimiento

## 🔧 Troubleshooting

### Problemas Comunes

#### 1. Error de Instalación de Dependencias
```bash
# Error: "Module not found" después de pnpm install
# Solución: Limpiar cache y reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 2. Error de TypeScript
```bash
# Error: "Cannot find module '@/components/ui/button'"
# Solución: Verificar paths en tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

#### 3. Problemas con Tailwind CSS
```bash
# Error: Clases de Tailwind no se aplican
# Solución: Verificar configuración en globals.css
@import "tailwindcss";

# Si el problema persiste
pnpm dev --turbo=false
```

#### 4. Error de Build de Next.js
```bash
# Error: "Module build failed" en producción
# Solución: Verificar imports y exports
pnpm tsc --noEmit  # Verificar TypeScript primero
pnpm build --debug # Build con información detallada
```

#### 5. Problemas con shadcn/ui
```bash
# Error: Componente shadcn/ui no funciona
# Solución: Verificar instalación
npx shadcn@latest add button --overwrite

# Verificar components.json
cat components.json
```

#### 6. Puerto en Uso
```bash
# Error: "Port 3000 is already in use"
# Soluciones:
pnpm dev --port 3001          # Usar otro puerto
kill -9 $(lsof -ti:3000)      # Liberar puerto 3000 (macOS/Linux)
```

### Debugging

#### 1. Debug de Componentes React
```typescript
// Usar React Developer Tools
// Agregar console.log temporal para debugging
export function MiComponente({ data }: Props) {
  console.log('MiComponente render:', { data })
  
  useEffect(() => {
    console.log('MiComponente mounted')
  }, [])
  
  return <div>...</div>
}
```

#### 2. Debug de Context API
```typescript
// En CartContext, agregar logging
function cartReducer(state: CartState, action: CartAction): CartState {
  console.log('Cart action:', action.type, action.payload)
  
  // ... lógica del reducer
  
  console.log('New cart state:', newState)
  return newState
}
```

#### 3. Debug de Estilos CSS
```bash
# Inspeccionar elementos en navegador
# F12 -> Elements -> ver clases aplicadas

# Verificar que Tailwind se está cargando
# En Network tab, buscar archivos CSS
```

### Performance Issues

#### 1. Bundle Size Análisis
```bash
# Instalar bundle analyzer
pnpm add -D @next/bundle-analyzer

# Configurar en next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Analizar
ANALYZE=true pnpm build
```

#### 2. Imágenes Optimización
```typescript
// Usar next/image en lugar de <img>
import Image from 'next/image'

<Image
  src="/producto.png"
  alt="Producto"
  width={300}
  height={200}
  className="object-cover"
/>
```

## 🗺️ Roadmap

### Versión Actual (v1.0) - MVP ✅
- [x] Estructura básica de e-commerce
- [x] 12 categorías de productos
- [x] Sistema de carrito funcional
- [x] Diseño responsive completo
- [x] Navegación entre páginas
- [x] Componentes UI con shadcn/ui

### Próxima Versión (v1.1) - Funcionalidad Básica

#### Backend y Datos 🗄️
- [x] **API Routes con Next.js** ✅
  - `app/api/products/route.ts` - Obtener productos con filtros
  - `app/api/categories/route.ts` - Gestión de categorías  
  - `app/api/brands/route.ts` - API de marcas
  - `app/api/colors/route.ts` - API de colores
  
- [x] **Base de Datos JSON** ✅
  - `src/lib/json-database.ts` - Servicio de base de datos
  - `data/database.json` - Almacenamiento de datos
  - Interfaces: Product, Category, Brand, Color
  - [ ] Migración futura a PostgreSQL

#### Autenticación 👤
- [ ] **Sistema de Usuarios**
  - NextAuth.js para autenticación
  - Providers: Google, GitHub, Credentials
  - Páginas: `/login`, `/register`, `/profile`
  
#### Búsqueda y Filtros 🔍
- [x] **UI de Búsqueda** ✅
  - Componente SearchBar en header (UI implementado)
- [ ] **Funcionalidad de Búsqueda Backend**
  - API de búsqueda con filtros avanzados
  - Página de resultados `/search`

### Versión 1.2 - E-Commerce Completo

#### Checkout y Pagos 💳
- [ ] **Proceso de Checkout**
  - Página `/checkout` con formularios
  - Validación de datos del cliente
  - Cálculo de envíos por ubicación
  
- [ ] **Integración de Pagos**
  - Stripe / Bancard / Pagopar para pagos con tarjeta
  - PayPal como alternativa

#### Gestión de Pedidos 📦
- [ ] **Sistema de Órdenes**
  - Modelo Order en base de datos
  - Estados: pending, confirmed, shipped, delivered
  - Email notifications con Resend
  
#### Panel de Administración 👨‍💼 (Maybe OctoberCMS)
- [ ] **Dashboard Admin**
  - `/admin` con autenticación
  - CRUD completo de productos
  - Gestión de órdenes y usuarios
  - Analytics básico con gráficos

### Versión 1.3 - Optimización y Experiencia

#### Performance 🚀
- [ ] **Optimizaciones Técnicas**
  - Image optimization con Cloudinary
  - Caching con Redis
  - CDN para assets estáticos
  - Service Worker para PWA
  
#### UX Mejorado 🎨
- [ ] **Funcionalidades Avanzadas**
  - Lista de deseos (Wishlist)
  - Comparación de productos
  - Reviews y ratings
  - Recomendaciones personalizadas

#### Analytics 📊
- [ ] **Métricas y Seguimiento**
  - Google Analytics 4
  - Conversion tracking
  - A/B testing con Vercel
  - Performance monitoring

### Versión 2.0 - Escalabilidad Enterprise

#### Microservicios 🏗️
- [ ] **Arquitectura Distribuida**
  - Separar servicios: Auth, Products, Orders
  - API Gateway con tRPC
  - Event-driven architecture
  
#### Internacionalización 🌍
- [ ] **Multi-idioma y Multi-moneda**
  - next-i18next para traducciones
  - Soporte para USD, ARS, COP
  - Localización de precios y envíos
  
#### Mobile App 📱 (Maybe)
- [ ] **React Native App**
  - Expo + React Native
  - Shared components con web
  - Push notifications
  - Offline capabilities

### Funcionalidades de Soporte Continuo

#### Testing 🧪
- [ ] **Cobertura de Tests Completa**
  - Jest + Testing Library para unit tests
  - Playwright para E2E testing
  - Storybook para component testing
  - Cypress para integration tests

#### DevOps 🔄
- [ ] **CI/CD Pipeline**
  - GitHub Actions
  - Automated testing en PRs
  - Deployment a Vercel
  - Database migrations automáticas

#### Monitoreo 📈
- [ ] **Observabilidad**
  - Error tracking con Sentry
  - Performance monitoring
  - Uptime monitoring
  - User behavior analytics

---

## 📞 Soporte y Contacto

### Reportar Problemas
- 🐛 **Issues**: [GitHub Issues](repository-issues-url)
- 💬 **Discusiones**: [GitHub Discussions](repository-discussions-url)
- 📧 **Email**: adc.3191@gmail.com

### Recursos de Aprendizaje
- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 📄 Licencia

Este proyecto es **libre y de código abierto** bajo la licencia MIT.

### MIT License

```
Copyright (c) 2024 AldeaTech E-Commerce

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Uso Libre y Comercial

✅ **Uso personal y comercial permitido**  
✅ **Modificación y distribución libre**  
✅ **Sin restricciones de uso**  
✅ **Perfecto como base para proyectos comerciales**

---

**Construido con ❤️ como proyecto de aprendizaje usando las mejores tecnologías web modernas.**
