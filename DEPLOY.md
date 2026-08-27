# EBF Servicios — Deploy Guide

## Archivos del proyecto
| Archivo | Descripción |
|---|---|
| `index.html` | Página web principal |
| `blog/index.html` | Índice del blog |
| `blog/*.html` | Artículos del blog |
| `sitemap.xml` | Para Google Search |
| `robots.txt` | Para crawlers |
| `404.html` | Página de error personalizada |

## Arquitectura actual (agosto 2026)

**Hosting:** Cloudflare Workers (Static Assets) — proyecto `paginaweb-ebf-2026`
**Dominio:** ebf.cl (Custom Domain, único — sin rutas duplicadas)
**Deploy:** automático en cada `git push` a `main` (Workers Builds conectado a GitHub)
**Backend del formulario:** 100% Make.com — sin Google Apps Script, sin EmailJS, sin n8n

## Deploy en Cloudflare Workers
El deploy es automático: cualquier `git push origin main` dispara un build nuevo en Cloudflare (Workers Builds). No requiere subir archivos a mano.

Para verificar que el deploy está al día:
1. `dash.cloudflare.com` → Workers & Pages → `paginaweb-ebf-2026` → pestaña **Deployments**
2. El commit más reciente debe coincidir con el último commit de `main` en GitHub
3. Pestaña **Dominios** → debe haber **solo una** entrada para `ebf.cl` (Entorno: Producción). Si aparece también una fila de tipo "Ruta" (`*.ebf.cl/*`), eliminarla — genera conflictos de versión.

## Formulario de contacto — Make.com
El escenario "Integration Webhooks, Gmail" (Make, scenario ID 6038342) recibe el POST del formulario vía webhook y:
1. Escribe una fila en Google Sheets (pestaña "Contactos")
2. Envía correo de notificación
3. Envía correo de confirmación al cliente

La URL del webhook está hardcodeada en `index.html` en la constante `SCRIPT`. Si se regenera el webhook en Make, hay que actualizar esa constante y hacer commit.

Para revisar el estado del escenario o sus ejecuciones: `us2.make.com` → Scenarios → "Integration Webhooks, Gmail".

## Visor 3D — Autodesk A360
Los links de cada proyecto (`a360Link` en `index.html`) deben ser el link de tipo **Embed** (Compartir → pestaña Embed), no el link de compartir estándar — solo el de Embed permite incrustar el visor interactivo dentro de la página.
