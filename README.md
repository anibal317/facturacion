# Facturación - Next.js

Este proyecto es una aplicación de facturación desarrollada con [Next.js](https://nextjs.org), utilizando TypeScript, Tailwind CSS y varias integraciones modernas.

## Estructura del Proyecto

- `/app`: Páginas principales y rutas (ej. `products/invoices`, `contact`, etc.).
- `/components`: Componentes reutilizables (ej. `MainFeatures`, `Benefits`, `Contacto`, etc.).
- `/data`: Datos estáticos y mockups.
- `/public`: Recursos estáticos (imágenes, íconos).
- `/api`: Endpoints internos para navegación, planes, beneficios, etc.

## Funcionalidades

- **Facturación y gestión de productos**: Página de facturas y productos.
- **Página de contacto**: Formulario con integración EmailJS.
- **Planes y beneficios**: Visualización dinámica desde APIs internas.
- **Animaciones y UI moderna**: Usando Tailwind CSS y animaciones.
- **Alertas**: Integración con SweetAlert para notificaciones.

## Tecnologías

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) (envío de correos desde el formulario de contacto)
- [SweetAlert](https://sweetalert.js.org/) (alertas personalizadas)

## Variables de Entorno

Configura las siguientes variables en tu archivo `.env`:

```env
EMAILJS_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
```

## Instalación y Desarrollo

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

Recomendado desplegar en [Vercel](https://vercel.com/). Consulta la [documentación oficial](https://nextjs.org/docs/app/building-your-application/deploying).

## Contribuir

Las contribuciones son bienvenidas. Abre un issue o pull request para sugerencias y mejoras.

## Licencia

MIT
