
<div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Catálogo Digital

**Microaplicación para publicar productos, consultar precios y disponibilidad, y facilitar el contacto entre negocios y clientes.**

Catálogo Digital es una aplicación web progresiva (PWA) desarrollada para presentar productos de forma organizada, mostrar sus precios, fotografías, categorías y disponibilidad, y facilitar las consultas de los clientes mediante WhatsApp. El proyecto contempla la carga de productos y configuraciones desde un archivo Excel alojado en Google Drive, para simplificar la actualización del catálogo.

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**SATCORE SOLUTIONS**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

[![License](https://img.shields.io/badge/License-SCSAL%201.0-000000.svg)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-SatCore%20Solutions-181717?logo=github)](https://github.com/satcoresolutions)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa)](https://web.dev/explore/progressive-web-apps)
[![WhatsApp](https://img.shields.io/badge/Contact-WhatsApp-25D366?logo=whatsapp)](https://www.whatsapp.com/)

</div>

---

# Sobre el proyecto

**Catálogo Digital** es una microaplicación desarrollada por **SatCore Solutions**, dentro del ecosistema tecnológico de **SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**.

El proyecto busca facilitar la presentación digital de productos y servicios comerciales mediante un catálogo organizado, accesible desde distintos dispositivos y orientado a simplificar las consultas entre negocios y clientes.

Su propósito principal es:

> Proporcionar a pequeños negocios y emprendedores una herramienta digital para mostrar sus productos, mantener organizada su información comercial y facilitar el contacto con sus clientes.

La aplicación contempla información como nombres, categorías, descripciones, precios, fotografías y disponibilidad. También incorpora configuración del negocio y mecanismos para iniciar consultas por WhatsApp.

El proyecto está preparado para utilizar un archivo Excel alojado en Google Drive como fuente de información. La descarga, lectura y actualización efectiva de los datos deberán validarse en el entorno correspondiente antes de considerar esta integración lista para producción.

Este repositorio forma parte de los proyectos tecnológicos de **SatCore Solutions**. Su utilización, modificación y redistribución están sujetas a los términos de la licencia aplicable al proyecto y a las licencias de sus dependencias.

---

# SatCore Solutions

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**Nombre comercial:** SatCore Solutions

**Eslogan:**

> *Soluciones digitales seguras, accesibles y funcionales para todos.*

SatCore Solutions desarrolla soluciones digitales orientadas al software, la automatización, la inteligencia artificial, la ciberseguridad, la formación tecnológica y las herramientas digitales.

El ecosistema se estructura alrededor de cinco áreas principales:

### Desarrollo

Creación de sitios web, aplicaciones, herramientas digitales, plataformas y soluciones de software.

### Automatizador

Automatización de procesos, agentes inteligentes, integración de APIs y sistemas capaces de ejecutar tareas de manera automatizada.

### Seguridad

Ciberseguridad, auditoría, análisis de vulnerabilidades, hardening, monitoreo y protección de sistemas.

### Estudio

Formación, documentación, recursos educativos, tutoriales y proyectos orientados al aprendizaje tecnológico.

### Marketing

Diseño de marca, presencia digital, contenido tecnológico, analítica y herramientas digitales para comunicación y posicionamiento.

---

# Características

- **Catálogo de productos:** presentación organizada de los productos registrados en la fuente de datos.
- **Información comercial:** visualización del nombre, descripción y precio de cada producto.
- **Categorías:** clasificación de productos para facilitar la navegación.
- **Fotografías:** posibilidad de mostrar imágenes mediante las URL configuradas para los productos.
- **Disponibilidad:** indicador para identificar los productos disponibles y aquellos marcados como agotados o no disponibles.
- **Configuración del negocio:** nombre comercial, eslogan, número de WhatsApp, moneda y mensaje de consulta.
- **Contacto por WhatsApp:** preparación de enlaces para facilitar las consultas de los clientes.
- **Configuración centralizada:** valores predeterminados para los datos del catálogo.
- **Integración con Excel:** lectura de datos desde un archivo `.xlsx` alojado en Google Drive, mediante una URL configurada en el servidor.
- **Aplicación web progresiva (PWA):** configuración para instalar la aplicación en dispositivos compatibles.
- **Interfaz adaptable:** diseño orientado a distintos tamaños de pantalla.
- **Modo claro y oscuro:** soporte visual sujeto a la configuración de los componentes del proyecto.
- **SEO:** metadatos centralizados para describir el catálogo y mejorar la presentación de sus páginas en buscadores.
- **Variables de entorno:** configuración de la dirección del archivo remoto y de la URL pública del sitio cuando corresponda.
- **Arquitectura modular:** separación de componentes visuales, tipos, utilidades y lógica de lectura de datos.

**Nota:** las funciones descritas corresponden al alcance previsto del proyecto y a la estructura de código documentada. Deben verificarse en la aplicación antes de considerarlas completamente implementadas.

---

# Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- Next.js 15 con App Router.
- React 19.
- TypeScript.
- Tailwind CSS v4.
- JavaScript y APIs del navegador.
- Progressive Web App (PWA).
- Service Worker.
- Web App Manifest.
- Google Drive como ubicación prevista del archivo Excel.
- `read-excel-file` para interpretar el archivo `.xlsx`.
- Variables de entorno para configurar recursos del servidor.
- WhatsApp mediante enlaces de contacto.
- npm para la gestión de dependencias.

### Tecnologías principales

**Next.js**

Framework de React utilizado para estructurar la aplicación, gestionar las rutas y organizar los componentes. También permite ejecutar funciones del lado del servidor para obtener y procesar los datos del catálogo.

**React**

Biblioteca utilizada para construir los componentes interactivos de la aplicación.

**TypeScript**

Lenguaje utilizado para definir tipos, estructuras de datos y contratos entre los componentes y la lógica de la aplicación.

**Tailwind CSS v4**

Sistema de utilidades CSS empleado para implementar los estilos y la interfaz adaptable.

**Google Drive y Excel**

El proyecto contempla la descarga de un archivo `.xlsx` desde Google Drive. El archivo contiene hojas para los productos y la configuración comercial.

La disponibilidad de esta integración depende de que el enlace configurado permita descargar el archivo y de que el contenido respete la estructura esperada.

**WhatsApp**

Se utiliza mediante enlaces de contacto para facilitar que los clientes inicien una conversación con el negocio.

**Progressive Web App (PWA)**

Tecnologías web que permiten instalar la aplicación en dispositivos compatibles. El manifiesto y el Service Worker deben estar correctamente configurados para ofrecer las funciones previstas.

---

# Requisitos

Antes de ejecutar el proyecto, asegúrate de contar con las siguientes herramientas:

- Node.js en una versión compatible con Next.js 15; se recomienda Node.js 18.18 o superior, preferiblemente una versión LTS compatible.
- npm.
- Git, si vas a clonar el repositorio.
- Un navegador web moderno.
- Acceso a internet para descargar el archivo Excel remoto, cuando se utilice esa integración.
- Un archivo Excel válido con las hojas y columnas esperadas.

Se recomienda comprobar las versiones definidas en `package.json` antes de actualizar las herramientas o instalar dependencias en un entorno diferente.

Para probar la instalación de la PWA, se requiere un contexto seguro compatible, como HTTPS en un entorno desplegado o `localhost` durante el desarrollo.

---

# Instalación

### 1. Clonar el repositorio

Sustituye `[REPOSITORIO]` por el nombre real del repositorio cuando esté confirmado.

```bash
git clone https://github.com/satcoresolutions/[REPOSITORIO].git
```

### 2. Acceder al proyecto

```bash
cd [NOMBRE-DEL-PROYECTO]
```

### 3. Instalar las dependencias

```bash
npm install
```

Este comando instala las dependencias declaradas en el archivo `package.json`.

### 4. Configurar las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto, junto a `package.json`, y configura las variables necesarias.

Consulta la sección [Configuración](#configuración) para conocer los valores esperados.

---

# Configuración

## Variables de entorno

La aplicación contempla variables de entorno para configurar el archivo Excel remoto y la URL pública del sitio.

Crea el archivo `.env.local` en la raíz del proyecto:

```env
GOOGLE_DRIVE_EXCEL_URL="URL_DIRECTA_DE_DESCARGA_DEL_EXCEL"
NEXT_PUBLIC_SITE_URL="https://tu-dominio.com"
```

### `GOOGLE_DRIVE_EXCEL_URL`

Dirección utilizada por el servidor para descargar el archivo Excel que contiene los productos y la configuración comercial.

El archivo debe ser accesible desde el servidor sin depender de una sesión interactiva de Google. El enlace debe devolver el archivo `.xlsx`, no una página HTML de vista previa.

Un enlace compartido de Google Drive puede tener esta forma:

```text
https://drive.google.com/file/d/ID_DEL_ARCHIVO/view
```

Para ciertos archivos, puede utilizarse una URL de descarga con esta estructura:

```text
https://drive.google.com/uc?export=download&id=ID_DEL_ARCHIVO
```

Sustituye `ID_DEL_ARCHIVO` por el identificador real. Google Drive puede requerir confirmaciones adicionales de descarga, por lo que el enlace debe probarse desde la aplicación.

**Importante:** si el código de lectura del catálogo utiliza `GOOGLE_DRIVE_EXCEL_URL`, configura exactamente ese nombre. No uses el prefijo `NEXT_PUBLIC_` para esta variable, ya que la URL se utiliza en el servidor.

### `NEXT_PUBLIC_SITE_URL`

URL pública del catálogo. Se utiliza para generar metadatos y direcciones absolutas del sitio.

En desarrollo puede omitirse si el proyecto define `http://localhost:3000` como valor predeterminado. En producción, reemplaza el ejemplo por el dominio real.

Esta variable lleva el prefijo `NEXT_PUBLIC_` porque así se ha definido para la configuración SEO del proyecto. No la utilices para almacenar secretos.

## Estructura del archivo Excel

El archivo debe contener las hojas `Productos` y `Configuracion`.

### Hoja `Productos`

La primera fila contiene los encabezados. Se esperan las siguientes columnas:

| Columna | Descripción |
|---|---|
| `Nombre` | Nombre del producto. Es obligatorio. |
| `Categoria` | Categoría del producto. |
| `Descripcion` | Descripción comercial. |
| `Precio` | Precio numérico del producto. |
| `Foto` | URL de la imagen del producto. |
| `Disponible` | Indica si el producto está disponible. |

Ejemplo:

| Nombre | Categoria | Descripcion | Precio | Foto | Disponible |
|---|---|---|---:|---|---|
| Producto de ejemplo | General | Descripción del producto | 25000 | https://ejemplo.com/producto.jpg | Sí |

Los valores de la tabla son ilustrativos y deben sustituirse por los productos reales.

Los valores `no`, `0`, `false` y `agotado` se interpretan como indicación de que un producto no está disponible. Otros valores se consideran disponibles según la lógica de lectura descrita.

### Hoja `Configuracion`

Esta hoja contiene dos columnas: una para la clave y otra para su valor.

| Clave | Valor de ejemplo |
|---|---|
| `negocio` | Mi negocio |
| `eslogan` | Calidad y confianza |
| `whatsapp` | Número de contacto |
| `moneda` | COP |
| `mensaje` | Hola, me interesa {producto} ({precio}). ¿Está disponible? |

Si se utiliza la versión del lector que incorpora configuración de pedidos, también pueden existir las claves `costo_domicilio` y `pedido_minimo`. Estas deben documentarse y utilizarse únicamente si forman parte de los tipos y funcionalidades de la versión desplegada.

Los nombres de las hojas y las columnas deben coincidir con lo esperado por el código de lectura.

## Seguridad de la configuración

- Mantén `.env.local` excluido del control de versiones.
- No almacenes credenciales, contraseñas ni tokens en el README.
- No uses una variable `NEXT_PUBLIC_` para información que deba permanecer exclusivamente en el servidor.
- No publiques información privada en el archivo Excel.
- Recuerda que un archivo de Google Drive accesible públicamente puede ser descargado por otras personas.
- Si el archivo requiere autenticación, será necesario implementar un método de acceso compatible con el servidor.

**Nunca publiques credenciales, tokens, claves privadas, contraseñas u otros secretos en el repositorio.**

Después de cambiar las variables de entorno, reinicia el servidor de desarrollo.

---

# Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

Después, abre la siguiente dirección:

```text
http://localhost:3000
```

El servidor de desarrollo permite probar la interfaz, comprobar la presentación de los productos, revisar los precios y verificar los mecanismos de contacto.

Cuando se utilice el archivo Excel remoto, comprueba también que la aplicación pueda descargarlo e interpretar correctamente sus hojas.

Durante el desarrollo, los cambios en el código se reflejan en el entorno local según el comportamiento de Next.js.

---

# Producción

Para generar la compilación de producción:

```bash
npm run build
```

Después, inicia el servidor:

```bash
npm run start
```

La aplicación estará disponible en el puerto configurado, normalmente:

```text
http://localhost:3000
```

Antes de publicar, verifica:

1. Que las variables de entorno estén configuradas.
2. Que la URL del archivo Excel sea accesible desde el servidor.
3. Que el archivo contenga las hojas esperadas.
4. Que los precios y la disponibilidad se interpreten correctamente.
5. Que las imágenes se carguen desde sus direcciones configuradas.
6. Que los enlaces de WhatsApp utilicen el número correcto.
7. Que el manifiesto y el Service Worker funcionen.
8. Que el tema visual se conserve al navegar y recargar la aplicación.
9. Que los metadatos SEO utilicen el dominio de producción.

### Verificación de la PWA

Para probar las funcionalidades de instalación:

1. Genera la compilación con `npm run build`.
2. Inicia la aplicación con `npm run start`.
3. Abre la aplicación en un navegador compatible.
4. Comprueba que el manifiesto y el Service Worker se carguen correctamente.
5. Verifica el comportamiento del botón de instalación, si está disponible.
6. Comprueba que la aplicación pueda abrirse después de instalarla.

Para instalarla en un dispositivo real mediante una dirección desplegada, utiliza HTTPS y verifica que el navegador cumpla los requisitos de instalación de la PWA.

---

# Instalar en el celular

Catálogo Digital puede instalarse como una aplicación web progresiva en los dispositivos y navegadores compatibles, siempre que la configuración de la PWA cumpla los requisitos del navegador.

### Android — Chrome

1. Abre Catálogo Digital en Chrome.
2. Utiliza el botón **Instalar app** cuando esté disponible.
3. Como alternativa, abre el menú del navegador y selecciona la opción de instalación correspondiente, si aparece.

### iPhone — Safari

1. Abre Catálogo Digital en Safari.
2. Pulsa el botón **Compartir**.
3. Selecciona **Añadir a pantalla de inicio**.
4. Confirma la operación.

Las opciones disponibles pueden variar según la versión del sistema operativo y del navegador.

---

# Cómo funciona

## 1. Visualización del catálogo

La aplicación presenta los productos registrados en la fuente de datos.

Cada producto puede incluir:

- Nombre.
- Categoría.
- Descripción.
- Precio.
- Fotografía.
- Disponibilidad.

La información que aparece depende de los datos cargados y de los componentes implementados en la versión del catálogo.

## 2. Categorías y productos

Los productos pueden organizarse mediante categorías para facilitar su consulta.

La categoría `General` se utiliza como valor predeterminado cuando un producto no tiene una categoría especificada, según la lógica de lectura descrita.

Los registros sin nombre se excluyen de la lista de productos cargados.

## 3. Consulta de precios y disponibilidad

Los precios se interpretan a partir de los valores de la hoja `Productos` y se presentan con la moneda configurada para el negocio.

La disponibilidad se determina mediante la columna `Disponible`. Los productos marcados como no disponibles pueden identificarse mediante el indicador correspondiente de la interfaz.

El catálogo no debe interpretarse como un sistema de inventario en tiempo real, salvo que se implemente y verifique expresamente esa capacidad.

## 4. Contacto por WhatsApp

La configuración del negocio contempla un número de WhatsApp y un mensaje para iniciar consultas.

El propósito es permitir que el cliente solicite información sobre un producto directamente al negocio.

El envío del mensaje depende de que el usuario abra el enlace y complete la acción en WhatsApp o en la aplicación compatible. La presencia de un enlace no implica que se realicen pedidos, pagos o transacciones automáticamente.

## 5. Actualización mediante Google Drive

La integración prevista utiliza un archivo Excel alojado en Google Drive como fuente de información.

El proceso esperado es:

1. El responsable del negocio actualiza los productos o la configuración en el Excel.
2. Guarda los cambios en el archivo.
3. El servidor de la aplicación descarga el archivo mediante la URL configurada.
4. La aplicación interpreta las hojas y transforma los registros al formato esperado.
5. Los datos se presentan en el catálogo.

La actualización efectiva depende de la accesibilidad del enlace, de la implementación de carga del servidor y de la estrategia de caché de la aplicación. Los cambios en Google Drive pueden tardar en reflejarse.

Esta integración debe probarse en desarrollo y producción antes de garantizar que cualquier modificación del Excel se refleje inmediatamente.

---

# Estructura del proyecto

La organización funcional descrita para el proyecto es la siguiente:

```text
catalogo-digital/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts
│   └── globals.css
│
├── components/
│   ├── Header
│   ├── ProductCard
│   ├── ProductList
│   ├── CategoryFilter
│   ├── ThemeToggle
│   ├── InstallPWAButton
│   ├── WhatsAppButton
│   └── ServiceWorkerRegister
│
├── lib/
│   ├── excel.ts
│   ├── constants.ts
│   ├── format.ts
│   ├── whatsapp.ts
│   ├── seo.ts
│   └── ui.ts
│
├── types/
│   └── index.ts
│
├── public/
│   ├── icons/
│   ├── logo.png
│   └── recursos públicos
│
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── ...
```

**Nota:** este árbol representa una estructura de referencia basada en los módulos descritos. Los nombres exactos y la existencia de cada componente deben verificarse en el repositorio real antes de utilizarlo como inventario definitivo.

### Responsabilidad de las principales áreas

| Área | Responsabilidad |
|---|---|
| `app/` | Entrada de la aplicación, layout, página principal, manifiesto y estilos globales. |
| `components/` | Componentes visuales, presentación de productos y controles de usuario. |
| `lib/excel.ts` | Descarga y lectura del archivo Excel remoto. |
| `lib/constants.ts` | Valores predeterminados y constantes compartidas. |
| `lib/format.ts` | Normalización de textos y procesamiento de precios. |
| `lib/whatsapp.ts` | Construcción de enlaces de contacto. |
| `lib/seo.ts` | Metadatos y configuración central de SEO. |
| `lib/ui.ts` | Clases y estilos reutilizables. |
| `types/` | Tipos y contratos de datos de la aplicación. |
| `public/` | Iconos, logotipo y recursos públicos. |

---

# Arquitectura

Catálogo Digital utiliza una arquitectura organizada por responsabilidades, separando la interfaz, la lógica de lectura de datos, el procesamiento de la información y los recursos públicos.

```text
Usuario
   │
   ▼
Interfaz de usuario
   │
   ▼
Componentes React
   │
   ├── Presentación de productos
   ├── Categorías
   ├── Precios y disponibilidad
   ├── Tema visual
   └── Enlaces de WhatsApp
   │
   ▼
Lógica de aplicación
   │
   ├── Tipos y configuración
   ├── Normalización de datos
   ├── Formateo de precios
   └── Lectura del catálogo
   │
   ▼
Servidor Next.js
   │
   ▼
Archivo Excel remoto
   │
   ▼
Google Drive
```

Este diagrama representa el flujo previsto cuando se utiliza la integración remota con Google Drive. La arquitectura efectiva debe comprobarse en el código de la versión publicada.

### Interfaz

La capa visual permite consultar productos y utilizar los controles disponibles mediante componentes React.

### Datos y procesamiento

Los módulos de `lib/` concentran la lectura del Excel, la normalización de textos, el procesamiento de precios, la configuración y la construcción de enlaces.

### Fuente de datos

Cuando se utiliza Google Drive, el archivo Excel actúa como fuente de productos y configuración. La aplicación depende de que su estructura y su acceso sean compatibles con el lector.

### PWA

El manifiesto y el Service Worker proporcionan las capacidades web progresivas que estén configuradas para el proyecto.

---

# Datos y privacidad

Catálogo Digital utiliza información comercial para presentar los productos y facilitar el contacto con el negocio.

Los datos pueden incluir nombres de productos, descripciones, precios, fotografías, disponibilidad, nombre comercial y número de WhatsApp.

Cuando el catálogo obtiene los datos desde Google Drive, deben tenerse en cuenta las siguientes consideraciones:

- El acceso al archivo depende de sus permisos y de la URL configurada.
- Un archivo publicado o compartido públicamente puede ser descargado por terceros.
- No deben incluirse credenciales, información personal innecesaria ni datos comerciales confidenciales en un archivo público.
- Las URL de las fotografías deben corresponder a recursos que puedan cargarse desde el navegador.
- El número de WhatsApp configurado puede quedar visible para los visitantes del catálogo.
- Los datos comerciales mostrados deben mantenerse actualizados por la persona responsable del negocio.

Si el archivo Excel se configura para acceso público, publica únicamente la información necesaria para el funcionamiento del catálogo.

---

# Seguridad

La seguridad forma parte de los principios de desarrollo de SatCore Solutions.

Para utilizar Catálogo Digital de forma responsable, se recomienda:

- Mantener actualizadas las dependencias del proyecto.
- Revisar las vulnerabilidades reportadas por las herramientas de desarrollo.
- Mantener las variables privadas fuera del repositorio.
- Validar la URL del archivo remoto y el contenido que devuelve.
- Evitar procesar como Excel una respuesta HTML de Google Drive.
- No publicar datos privados en el archivo fuente.
- Verificar las URL de las fotografías y los recursos externos.
- Utilizar HTTPS cuando la aplicación se encuentre desplegada.
- Comprobar que el Service Worker y los recursos de la PWA procedan del origen esperado.
- Revisar los permisos del archivo Excel y limitar la exposición de información comercial.

Si encuentras una vulnerabilidad relacionada con este proyecto, evita publicar detalles técnicos sensibles antes de que pueda evaluarse.

**Email de contacto:** [satcoresolutions@gmail.com](mailto:satcoresolutions@gmail.com)

Incluye, cuando sea posible:

- Descripción del problema.
- Impacto potencial.
- Pasos generales para reproducirlo.
- Versión afectada.
- Información adicional relevante.

No incluyas credenciales reales ni información personal innecesaria.

---

# Desarrollo y contribuciones

Las contribuciones, correcciones, mejoras y adaptaciones son bienvenidas siempre que respeten la licencia aplicable al proyecto.

Antes de realizar cambios importantes, se recomienda:

- Revisar la arquitectura existente.
- Mantener la separación entre componentes y lógica de negocio.
- Conservar los tipos de TypeScript actualizados.
- Verificar la interpretación de los precios.
- Probar la lectura del Excel remoto.
- Comprobar la respuesta ante enlaces incorrectos o archivos inaccesibles.
- Verificar los indicadores de disponibilidad.
- Probar los enlaces de WhatsApp.
- Comprobar el comportamiento del tema visual.
- Verificar el manifiesto y el Service Worker en producción.
- Mantener actualizadas las dependencias y la documentación.

Los cambios en la estructura del Excel deben acompañarse de las modificaciones correspondientes en el lector y de pruebas de los datos resultantes.

Las contribuciones no eliminan ni sustituyen la autoría original de SatCore Solutions.

---

# Proyectos derivados

Catálogo Digital puede servir como referencia o punto de partida para desarrollar soluciones relacionadas con catálogos comerciales, presentación de productos o herramientas digitales para pequeños negocios, sujeto a los términos de la licencia aplicable.

Cuando los términos de la licencia lo permitan, los proyectos derivados deberán reconocer claramente a **SatCore Solutions** como fuente original cuando utilicen una parte sustancial del proyecto.

Ejemplo de atribución:

> Basado en Catálogo Digital, desarrollado originalmente por SatCore Solutions.

Cuando esté disponible el repositorio público original, incluye también su dirección:

```text
https://github.com/satcoresolutions/[REPOSITORIO]
```

La atribución no deberá presentarse de forma que implique que SatCore Solutions respalda, patrocina, mantiene o garantiza un proyecto derivado cuando esa relación no exista.

---

# Atribución

La atribución debe realizarse de acuerdo con las condiciones de la licencia aplicable al proyecto.

Cuando el código se copie, modifique, integre o redistribuya de manera sustancial, deberá conservarse una referencia razonablemente visible a **SatCore Solutions** como desarrollador original, en los términos que establezca la licencia.

Una atribución recomendada es:

> Este proyecto está basado en Catálogo Digital, desarrollado originalmente por SatCore Solutions.

**Proyecto original:**

```text
https://github.com/satcoresolutions/[REPOSITORIO]
```

**SatCore Solutions:**

```text
https://github.com/satcoresolutions
```

La atribución no deberá implicar respaldo oficial, mantenimiento, patrocinio o garantía por parte de SatCore Solutions si esa relación no existe.

---

# Marca y propiedad intelectual

El código fuente de este proyecto se distribuye conforme a los términos de la licencia que acompañe al repositorio.

Si el repositorio incluye la **SatCore Solutions Attribution License — SCSAL 1.0**, deberá consultarse su archivo `LICENSE` para determinar las condiciones exactas de uso, modificación y redistribución.

La licencia del código no transfiere automáticamente derechos sobre:

- SatCore Solutions.
- SOFTWARE AND TECHNOLOGY CORE SOLUTIONS.
- Logotipos.
- Identidad visual.
- Nombres comerciales.
- Marcas.
- Dominios.
- Elementos gráficos.
- Otros signos distintivos asociados con SatCore Solutions.

El uso del código no constituye autorización para representar una relación oficial con SatCore Solutions.

La creación de un proyecto derivado tampoco otorga derechos para registrar o reclamar como propios los signos distintivos de SatCore Solutions.

---

# Dependencias de terceros

Este proyecto utiliza tecnologías y puede incorporar bibliotecas, frameworks, paquetes, iconos, fuentes u otros componentes desarrollados por terceros.

Entre las tecnologías identificadas se encuentran:

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.
- `read-excel-file`.

Cada componente de terceros permanece sujeto a su propia licencia y condiciones de uso.

La licencia del proyecto no modifica ni reemplaza las licencias de terceros. Los usuarios y distribuidores deberán respetar las condiciones correspondientes a las dependencias efectivamente incluidas en el repositorio.

Para revisar las dependencias instaladas y sus versiones, consulta:

```text
package.json
```

También puede utilizarse el archivo de bloqueo de dependencias presente en el repositorio, si existe.

---

# Despliegue

Catálogo Digital puede desplegarse en una plataforma compatible con Next.js.

Entre las opciones posibles se encuentran Vercel y otros proveedores que soporten el modo de despliegue configurado para la aplicación.

### Proceso general

1. Crear o seleccionar el repositorio.
2. Configurar el proveedor de infraestructura.
3. Instalar las dependencias.
4. Configurar las variables de entorno en el proveedor.
5. Comprobar el acceso al archivo Excel remoto.
6. Ejecutar la compilación de producción.
7. Publicar la aplicación.
8. Configurar HTTPS y el dominio.
9. Verificar el manifiesto y el Service Worker.
10. Probar el catálogo desde un dispositivo externo.
11. Verificar que las imágenes y los enlaces de WhatsApp funcionen.
12. Comprobar la actualización de los datos después de modificar el Excel.

### Variables de entorno en producción

Configura en el proveedor las variables que utiliza la aplicación:

- `GOOGLE_DRIVE_EXCEL_URL`
- `NEXT_PUBLIC_SITE_URL`

La primera debe configurarse como variable de servidor y no debe utilizar el prefijo `NEXT_PUBLIC_`.

La segunda debe contener la URL pública real del sitio.

No publiques los valores de configuración privados en el repositorio.

### Consideraciones sobre la actualización de datos

La descarga del archivo puede utilizar una estrategia sin caché en el servidor. Sin embargo, esto no garantiza que Google Drive publique los cambios de forma instantánea ni que todos los niveles de la aplicación se actualicen automáticamente.

La estrategia de renderizado de Next.js y el comportamiento de la página que carga los datos deben revisarse para asegurar que el catálogo se vuelva a consultar cuando corresponda.

---

# Estado del proyecto

**Estado:** En desarrollo; integración con Google Drive y funcionalidades pendientes de validación.

**Versión:** Por confirmar en el repositorio.

**Última actualización del README:** 2026-10-26.

La versión oficial y el estado de publicación deberán confirmarse con los archivos y etiquetas existentes en el repositorio.

---

# Roadmap

Los siguientes puntos son propuestas de evolución y no deben interpretarse como funcionalidades ya verificadas.

- [ ] Validar la lectura del Excel desde Google Drive.
- [ ] Comprobar la interpretación de productos, categorías, precios y disponibilidad.
- [ ] Validar la carga de fotografías desde URL externas.
- [ ] Verificar la configuración comercial y los mensajes de WhatsApp.
- [ ] Probar el comportamiento cuando el archivo remoto no esté disponible.
- [ ] Comprobar la actualización de los datos después de editar el Excel.
- [ ] Validar el diseño adaptable en distintos dispositivos.
- [ ] Verificar la instalación de la PWA.
- [ ] Revisar los metadatos SEO y el dominio de producción.
- [ ] Mantener actualizadas las dependencias y la documentación técnica.

---

# Licencia

El proyecto deberá distribuirse conforme a los términos de la licencia incluida en el repositorio.

Si el archivo `LICENSE` contiene la **SatCore Solutions Attribution License — SCSAL 1.0**, consulta dicho archivo para conocer las condiciones completas de uso, modificación, atribución y redistribución.

```text
LICENSE
```

La documentación de esta licencia no sustituye su texto legal. Antes de publicar o distribuir el proyecto, verifica que el archivo `LICENSE` exista, corresponda a la versión prevista y coincida con las condiciones indicadas en este README.

---

# Autoría

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

**GitHub:**

https://github.com/satcoresolutions

**Email:**

[satcoresolutions@gmail.com](mailto:satcoresolutions@gmail.com)

**Sitio web:**

https://satcore.solutions

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

**© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos mediante la licencia aplicable.**

---

### Contacto y autoría

| Medio | Información |
|---|---|
| Correo | [satcoresolutions@gmail.com](mailto:satcoresolutions@gmail.com) |
| WhatsApp | [+57 302 201 6072](https://wa.me/573022016072) |
| Sitio web | [satcore.solutions](https://satcore.solutions) |
| Instagram | [@satcore_solutions](https://www.instagram.com/satcore_solutions) |
| TikTok | [@satcore_solutions](https://www.tiktok.com/@satcore_solutions) |
| YouTube | [@SatCore_Solutions](https://www.youtube.com/@SatCore_Solutions) |
| GitHub | [satcoresolutions](https://github.com/satcoresolutions) |
| Facebook | SatCore Solutions |

Para consultas sobre el proyecto, autorizaciones de uso, colaboraciones o información corporativa, utiliza los canales oficiales.

---

**Hecho con 💚 por SatCore Solutions**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

© SatCore Solutions — Todos los derechos reservados.

</div>
