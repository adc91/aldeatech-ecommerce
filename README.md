# 🛍️ [AldeaTech](https://aldeatech.co) E-Commerce

Una aplicación de comercio electrónico moderna construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

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
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)

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
├── 📂 app/                      # Next.js App Router
│   ├── 📄 layout.tsx            # Layout raíz con providers
│   ├── 📄 page.tsx              # Página principal (homepage)
│   ├── 📄 globals.css           # Estilos Tailwind globales
│   │
│   ├── 📂 carrito/              # Carrito de compras
│   │   └── 📄 page.tsx
│   │
│   ├── 📂 electronics/          # Categorías de productos
│   ├── 📂 celulares/
│   ├── 📂 televisores/
│   ├── 📂 consolas/
│   ├── 📂 deportes/
│   ├── 📂 calzados-deportivos/
│   ├── 📂 automotriz/
│   ├── 📂 muebles/
│   │
│   ├── 📂 contactanos/          # Páginas corporativas
│   ├── 📂 nosotros/
│   └── 📂 preguntas-frecuentes/
│
├── 📂 components/               # Componentes React
│   ├── 📂 ui/                   # Componentes base (shadcn/ui)
│   │   ├── 📄 button.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 carousel.tsx
│   │   ├── 📄 dialog.tsx
│   │   └── ... (20+ componentes)
│   │
│   ├── 📄 category-page-template.tsx    # Template de categorías
│   ├── 📄 e-commerce-header.tsx         # Header principal
│   ├── 📄 e-commerce-footer.tsx         # Footer
│   ├── 📄 featured-products.tsx         # Productos destacados
│   ├── 📄 shopping-cart-modal.tsx       # Modal del carrito
│   ├── 📄 hero-carousel.tsx             # Carrusel principal
│   └── 📄 customer-testimonials.tsx     # Testimonios
│
├── 📂 lib/                      # Utilidades y configuración
│   ├── 📄 cart-context.tsx      # Context del carrito (estado global)
│   └── 📄 utils.ts              # Utilidades (cn function)
│
├── 📂 hooks/                    # Custom hooks
│   ├── 📄 use-mobile.ts         # Detectar dispositivos móviles
│   └── 📄 use-toast.ts          # Sistema de notificaciones
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

### Explicación de Directorios Clave

#### `app/` - Next.js App Router
- **Layout y Páginas**: Cada carpeta representa una ruta
- **file-system routing**: `app/categoria/page.tsx` = `/categoria`
- **layout.tsx**: Layout compartido con providers globales
- **globals.css**: Estilos Tailwind y CSS variables personalizadas

#### `components/` - Componentes React
- **`ui/`**: Componentes base de shadcn/ui (botones, cards, etc.)
- **Componentes de negocio**: Específicos para e-commerce
- **Patrón de nomenclatura**: PascalCase para componentes, kebab-case para archivos

#### `lib/` - Lógica de Negocio
- **`cart-context.tsx`**: Estado global del carrito con Context API
- **`utils.ts`**: Utilidades compartidas (función `cn` para clases CSS)

#### `hooks/` - Custom Hooks
- Lógica reutilizable extraída de componentes
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
- [ ] **API Routes con Next.js**
  - `app/api/products/route.ts` - CRUD de productos
  - `app/api/categories/route.ts` - Gestión de categorías
  - `app/api/cart/route.ts` - Persistencia de carrito
  
- [ ] **Base de Datos**
  - Prisma + SQLite para desarrollo
  - PostgreSQL para producción
  - Modelos: Product, Category, CartItem

#### Autenticación 👤
- [ ] **Sistema de Usuarios**
  - NextAuth.js para autenticación
  - Providers: Google, GitHub, Credentials
  - Páginas: `/login`, `/register`, `/profile`
  
#### Búsqueda y Filtros 🔍
- [ ] **Funcionalidad de Búsqueda**
  - Componente SearchBar funcional
  - API de búsqueda con filtros
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

---

**Construido con ❤️ por el equipo de [AldeaTech](https://aldeatech.co) usando las mejores tecnologías web modernas.**
