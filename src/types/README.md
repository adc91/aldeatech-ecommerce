# Types System

Este directorio contiene todas las definiciones de tipos TypeScript centralizadas

## Estructura de Tipos

### Tipos Principales

#### Productos
- **`Product`**: Interfaz completa del producto como existe en la base de datos
- **`ProductWithDetails`**: Producto con detalles adicionales de categorías  
- **`ProductDisplay`**: Versión simplificada para mostrar en componentes frontend

#### Categorías y Navegación
- **`Category`**: Categoría principal de productos
- **`Subcategory`**: Subcategorías dentro de las categorías principales
- **`CategoryConfig`**: Configuración de categorías para navegación
- **`ProductCategory`**: Categoría para frontend con conteo de productos

#### Colores y Marcas
- **`Color`**: Color completo con metadatos de base de datos
- **`ColorSimple`**: Color simplificado para páginas estáticas
- **`Brand`**: Marca con metadatos completos

#### Carrito de Compras
- **`CartItem`**: Item individual en el carrito
- **`CartState`**: Estado completo del carrito
- **`CartAction`**: Acciones de Redux para el carrito

#### API y Respuestas
- **`ApiResponse<T>`**: Respuesta estándar de la API con paginación
- **`ApiError`**: Respuesta de error de la API
- **`DatabaseData`**: Estructura completa de la base de datos JSON

#### Filtros y Búsqueda
- **`CategoryFilter`**: Filtros para productos por categoría
- **`ProductFilters`**: Filtros avanzados con rango de precio

#### Propiedades de Componentes
- **`CategoryPageProps`**: Props para el template de página de categoría
- **`ProductCardProps`**: Props para tarjetas de producto

## Importación de Tipos

### Importación desde el sistema centralizado:
```typescript
import type { Product, Color, CartItem } from '@/src/types'
```

### Re-exportación desde features:
```typescript
// Los archivos de feature re-exportan desde el sistema central
import type { Product } from '@/features/products/types'
```

## Migración Completada

✅ **Eliminación de duplicación**: Se eliminaron 6+ definiciones duplicadas de interfaces  
✅ **Centralización**: Todos los tipos están en `/src/types/index.ts`  
✅ **Compatibilidad**: Se mantiene retrocompatibilidad con re-exportaciones  
✅ **API**: Funcionalidad verificada y operativa  

## Beneficios del Sistema Unificado

1. **Single Source of Truth**: Una sola definición por tipo
2. **Mantenibilidad**: Cambios en un solo lugar se propagan automáticamente
3. **Consistencia**: Garantía de tipos consistentes en toda la app
4. **Developer Experience**: Mejor autocompletado y verificación de tipos
5. **Escalabilidad**: Fácil agregar nuevos tipos sin duplicación

## Convenciones

- **Interfaces completas**: Para datos de base de datos (e.g., `Product`)  
- **Interfaces Display**: Para componentes frontend (e.g., `ProductDisplay`)
- **Interfaces Simple**: Para datos estáticos (e.g., `ColorSimple`)  
- **Props interfaces**: Sufijo `Props` para propiedades de componentes
- **Action types**: Sufijo `Action` para acciones de Redux/Context
