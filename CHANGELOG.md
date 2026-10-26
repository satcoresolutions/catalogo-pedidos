# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added

- Espacio reservado para nuevas funcionalidades.
- Integración con Google Drive para cargar los productos y la configuración del catálogo desde un archivo Excel.

### Changed

- Espacio reservado para mejoras en la interfaz, la experiencia de usuario y la gestión del catálogo.

### Fixed

- Espacio reservado para correcciones de errores.

### Removed

- Espacio reservado para funcionalidades eliminadas.

### Security

- Mejoras relacionadas con la protección de la configuración y el acceso a los datos del catálogo.

---

## [1.0.0] - 2026-10-26

### Added

- Lanzamiento inicial de Catálogo Digital de SatCore Solutions.
- Visualización de productos con nombre, categoría, descripción, precio y fotografía.
- Indicador de disponibilidad de los productos.
- Organización de productos por categorías.
- Configuración del nombre del negocio, eslogan, moneda y datos de contacto.
- Integración prevista con WhatsApp para consultas sobre productos.
- Configuración de la aplicación web progresiva (PWA).
- Manifest para la instalación de la aplicación en dispositivos compatibles.
- Tema visual oscuro con posibilidad de adaptación a un tema claro.
- Configuración centralizada de metadatos SEO.
- Preparación para cargar productos y configuración desde un archivo Excel alojado en Google Drive.
- Variables de entorno para configurar la URL del archivo remoto.
- Interfaz desarrollada con Next.js, React, TypeScript y Tailwind CSS.

### Changed

- No aplica en la versión inicial.

### Fixed

- No aplica en la versión inicial.

### Removed

- No aplica en la versión inicial.

### Security

- La URL del archivo Excel se configura mediante una variable de entorno del servidor.
- La variable `GOOGLE_DRIVE_EXCEL_URL` no utiliza el prefijo `NEXT_PUBLIC_`.
- Se recomienda mantener `.env.local` excluido del control de versiones.
- El acceso al archivo de Google Drive debe configurarse según las necesidades de publicación del catálogo.
- No se deben publicar datos privados o información confidencial en archivos accesibles públicamente.
