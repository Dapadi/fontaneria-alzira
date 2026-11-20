# Fontanería Alzira — Web Corporativa Premium

Sitio web corporativo y comercial de alta conversión y acabado visual premium para **Fontanería Alzira**, empresa de fontanería profesional que opera en Alzira y en la comarca de La Ribera Alta (Valencia).

Desarrollado con arquitectura nativa modular: **HTML5 semántico**, **CSS3 puro y personalizado**, **TypeScript**, **Vite**, **GSAP**, **ScrollTrigger**, **Lenis** y **Lucide Icons**, cumpliendo con los estándares de **WCAG 2.2 AA**, **Core Web Vitals** y optimización avanzada para motores de búsqueda tradicionales (**SEO local**) y motores de inteligencia artificial (**GEO - Generative Engine Optimization**).

---

## 1. Stack Tecnológico

- **HTML5**: Semántica estricta (un solo `<h1>` por página, `<article>`, `<section>`, `<nav>`, `<aside>`, `role`, `aria-*`).
- **CSS3 Puro**: Variables CSS nativas (`variables.css`), reset accesible, fluid clamp (`typography.css`), layout modular, microinteracciones y compatibilidad con `prefers-reduced-motion`.
- **TypeScript**: Control estricto de tipos (`strict: true`), validación de formularios, gestión de eventos y medición analítica.
- **Vite 6**: Entorno de desarrollo ultrarrápido y compilación estática multipágina optimizada (`rollupOptions.input`).
- **GSAP & ScrollTrigger**: Entrada progresiva del Hero, revelado de titulares, animaciones escalonadas de tarjetas, galería horizontal fijada por scroll y barra de progreso temporal interactiva.
- **Lenis**: Smooth scrolling suave y accesible (desactivado automáticamente si el usuario tiene activado *reduced motion*).
- **Lucide Icons**: Iconografía moderna y ligera.
- **Schema.org JSON-LD**: Marcado semántico enriquecido con `Plumber`, `LocalBusiness`, `Organization`, `Service`, `BreadcrumbList`, `WebSite` y `FAQPage`.
- **Vercel**: Configuración de cabeceras de seguridad HTTP (`X-Frame-Options`, `CSP`, `nosniff`), caché inmutable para assets y URLs limpias (`cleanUrls: true`).

---

## 2. Estructura de Directorios

```text
fontaneria-alzira/
├── index.html                           # Portada principal
├── servicios/
│   ├── index.html                       # Catálogo de servicios
│   ├── reparacion-fugas/index.html      # Fugas de agua y detección acústica
│   ├── desatascos/index.html            # Desatascos y desobstrucciones
│   ├── instalaciones-fontaneria/index.html # Redes completas y acometidas
│   ├── reformas-banos/index.html        # Baños y platos de ducha
│   └── mantenimiento/index.html         # Comunidades y administradores
├── zonas/
│   ├── index.html                       # Áreas de servicio
│   ├── alzira/index.html                # Fontanero en Alzira (Sede)
│   ├── carcaixent/index.html            # Fontanero en Carcaixent
│   ├── algemesi/index.html              # Fontanero en Algemesí
│   └── alberic/index.html               # Fontanero en Alberic
├── trabajos/index.html                  # Casos reales y comparador antes/después
├── sobre-nosotros/index.html            # Filosofía, oficio y valores
├── contacto/index.html                  # Solicitud de presupuesto
├── blog/index.html                      # Consejos técnicos de fontanería
├── aviso-legal/index.html               # Cumplimiento LSSI-CE
├── privacidad/index.html                # Cumplimiento RGPD / LOPDGDD
├── cookies/index.html                   # Política de cookies
├── public/
│   ├── images/                          # Fotografías de alta resolución
│   ├── icons/                           # Recursos iconográficos
│   ├── favicon.svg                      # Favicon vectorial de marca
│   ├── robots.txt                       # Directivas SEO y GEO (OAI-SearchBot, etc.)
│   ├── sitemap.xml                      # Mapa del sitio XML completo
│   └── llms.txt                         # Documento de contexto para LLMs
├── src/
│   ├── styles/
│   │   ├── variables.css                # Paleta, espaciado y tipografía clamp
│   │   ├── reset.css                    # Reset moderno y accesible
│   │   ├── typography.css               # Jerarquía tipográfica y etiquetas
│   │   ├── layout.css                   # Header, footer, contenedores y barras fijas
│   │   ├── components.css               # Botones, tarjetas, acordeón y slider
│   │   ├── sections.css                 # Hero, galería horizontal y timeline
│   │   ├── animations.css               # GSAP, máscaras y microinteracciones
│   │   └── responsive.css               # Adaptaciones de 320px a ultrawide
│   ├── scripts/
│   │   ├── main.ts                      # Punto de entrada de inicialización
│   │   ├── navigation.ts                # Header sticky y drawer móvil accesible
│   │   ├── animations.ts                # GSAP + Lenis + ScrollTrigger
│   │   ├── gallery.ts                   # Galería horizontal y slider antes/después
│   │   ├── accordion.ts                 # Acordeón accesible WAI-ARIA
│   │   ├── contact.ts                   # Validación de formulario en TypeScript
│   │   └── analytics.ts                 # Medición de eventos de conversión (CRO)
│   └── config/
│       └── business.ts                  # Datos comerciales centralizados
├── package.json
├── vite.config.ts                       # Configuración multipágina
├── tsconfig.json                        # Configuración estricta de TypeScript
├── vercel.json                          # Configuración de despliegue en Vercel
├── .gitignore
└── README.md
```

---

## 3. Instalación y Ejecución Local

### Requisitos previos
- Node.js (v18 o superior).
- Gestor de paquetes `npm`.

### Comandos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo en local
npm run dev

# 3. Compilar para producción (TypeScript + Vite)
npm run build

# 4. Previsualizar la versión de producción
npm run preview
```

El servidor local se iniciará habitualmente en `http://localhost:5173`.

---

## 4. Configuración de Datos Comerciales

Todos los datos corporativos, teléfonos, enlaces de WhatsApp con mensajes precargados por servicio, horarios, zonas y preguntas frecuentes están centralizados en:

👉 `src/config/business.ts`

### Modificación de datos clave:
- **Teléfono comercial**: Modificar `phoneDisplay` y `phoneCall`.
- **Número de WhatsApp**: Modificar `whatsappNumber` (formato internacional sin signos, ej. `34600000000`).
- **Email**: Modificar `email`.
- **Horarios**: Modificar las propiedades de `hours`.
- **Zonas y servicios**: Añadir o editar los arrays `services` y `zones`.

> **Nota:** Todos los datos provisorios están identificados con marcadores como `[PENDIENTE DE CONFIRMAR]` o números simulados para garantizar que no se indexe información comercial no contrastada.

---

## 5. Sustitución de Fotografías

Las imágenes se alojan en la carpeta `public/images/`:

- `hero.jpg`: Fotografía del fontanero trabajando bajo el fregadero con iluminación natural.
- `service-fugas.jpg`: Primer plano de localización acústica y tuberías de cobre.
- `service-desatascos.jpg`: Limpieza mecánica de desagües con tobera espiral.
- `service-instalaciones.jpg`: Colector de fontanería con llaves de paso y manómetro.
- `service-reformas.jpg`: Baño contemporáneo con plato de ducha plano.
- `service-termos.jpg`: Termo eléctrico mural de alta eficiencia con válvulas.
- `about-team.jpg`: Retrato cercano del profesional fontanero.
- `project-before.jpg` / `project-after.jpg`: Imágenes para el comparador antes/después.

Para reemplazarlas, simplemente coloca los archivos optimizados (en formato JPG, WebP o AVIF) con los mismos nombres en `public/images/`.

---

## 6. Integración del Formulario de Contacto

El formulario en `contacto/index.html` y en la portada principal valida los siguientes campos mediante TypeScript (`src/scripts/contact.ts`):
- Nombre y apellidos (mínimo 2 letras).
- Teléfono español válido (fijo o móvil de 9 dígitos).
- Localidad del trabajo.
- Tipo de servicio requerido.
- Descripción de la avería (mínimo 8 caracteres).
- Consentimiento de política de privacidad.

### Conexión con un backend real:
Para conectar el formulario con un servicio de correo o CRM en producción:
1. Crear una función serverless en Vercel (`api/contact.ts`) o enlazar con servicios como Formspree, Resend o EmailJS.
2. En `src/scripts/contact.ts`, reemplazar el `console.info` por una llamada `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`.

---

## 7. Despliegue en Vercel

El proyecto incluye el archivo `vercel.json` preconfigurado:

1. Conectar el repositorio de GitHub/GitLab con Vercel.
2. Vercel detectará automáticamente el comando de compilación: `npm run build` y el directorio de salida: `dist`.
3. El despliegue generará automáticamente las URLs limpias sin extensión `.html` y aplicará las cabeceras de seguridad y optimización de caché.

---

## 8. Checklist SEO y GEO (Optimizaciones Realizadas)

- [x] **Arquitectura semántica**: Un solo `<h1>` por página, jerarquía correcta `<h2>` y `<h3>`.
- [x] **Metadatos completos**: Titles únicos con foco local, meta descriptions persuasivas y directas.
- [x] **Open Graph & Twitter**: Tarjetas optimizadas para compartir en redes y mensajería.
- [x] **Sitemap XML**: `public/sitemap.xml` con todas las 19 rutas compilables.
- [x] **Robots.txt**: Permisos específicos para Googlebot, Bingbot, OAI-SearchBot y PerplexityBot; bloqueo de rastreo para entrenamiento masivo indiscriminado.
- [x] **Datos estructurados Schema.org**: JSON-LD con `Plumber`, `LocalBusiness`, `Service`, `BreadcrumbList` y `FAQPage`.
- [x] **Archivo `llms.txt`**: Resumen conciso y estructurado para modelos generativos de IA (Perplexity, ChatGPT, Claude, Gemini).
- [x] **Contenido GEO**: Definiciones autónomas y directas en las preguntas frecuentes para facilitar la extracción de fragmentos por asistentes de IA.
- [x] **Accesibilidad WCAG 2.2 AA**: Contraste superior a 4.5:1, etiquetas ARIA, navegación por teclado y respeto por `prefers-reduced-motion`.
- [x] **CRO (Conversión)**: Botón de WhatsApp accesible en un clic, barra flotante inferior en móviles y mensajes personalizados por servicio.
