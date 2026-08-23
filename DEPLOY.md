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

## Deploy en Cloudflare Pages
1. `dash.cloudflare.com` → Workers & Pages → tu proyecto
2. Deployments → Upload assets
3. Arrastra los archivos al root
4. Deploy site → listo en ~30 segundos

## Conectar GitHub a Cloudflare (deploy automático)
1. En Cloudflare Pages → Settings → Builds & deployments
2. Connect to Git → selecciona `edbascunan/pagina-web-2026`
3. Branch: `main` | Build command: (vacío) | Output: (vacío)
4. Cada `git push` dispara un deploy automático sin tocar Cloudflare

## Google Apps Script — Pasos para reparar formularios
1. Ir a script.google.com → abrir el proyecto EBF
2. Reemplazar todo el código con el contenido de `google_apps_script.js`
3. Pegar el ID de tu Google Sheet en `SHEET_ID` (línea 5)
4. Implementar → Nueva implementación → Aplicación web
   - Ejecutar como: **Yo**
   - Acceso: **Cualquier persona**
5. Copiar la nueva URL (empieza con `https://script.google.com/macros/s/...`)
6. En `index.html` línea ~580: reemplazar `const SCRIPT='...'` con la nueva URL

## n8n — Verificar webhooks activos
1. Ir a edbascunan.app.n8n.cloud
2. Workflows → EBF Contacto → asegurarse que esté **Active** (no Test)
3. Workflows → EBF Agenda Reserva → mismo check
4. Si dice "Inactive": clic en el toggle → Activate
