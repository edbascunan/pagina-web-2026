# EBF Servicios — Página Web 2026

**Landing page profesional para EBF Servicios · Arquitectura BIM · Chile**

🌐 **Ver página en vivo:** https://edbascunan.github.io/pagina-web-2026

## Stack
- HTML5 + CSS3 puro (sin dependencias, carga instantánea)
- JavaScript vanilla
- Google Apps Script → Google Sheets (formulario en tiempo real)
- Compatible con GitHub Pages, Netlify, Firebase

## Características
- ✅ 15 proyectos reales con flip cards + visor A360
- ✅ Logos de clientes en marquee animado  
- ✅ Formulario → Google Sheets en tiempo real
- ✅ Sistema de agendamiento de reuniones integrado
- ✅ WhatsApp flotante (+56968010204)
- ✅ Bilingüe ES/EN
- ✅ Cursor personalizado + ticker animado
- ✅ Responsive mobile/desktop

## Deploy rápido

### GitHub Pages (gratis)
1. Settings → Pages → Branch: main → Save
2. URL: https://edbascunan.github.io/pagina-web-2026

### Netlify (drag & drop)
1. netlify.com → "Add new site" → "Deploy manually"
2. Arrastra la carpeta con index.html

## Agregar proyecto nuevo
En index.html busca el array const PJS=[ y agrega:
`js
{
  cat: 'BIM',
  nm: 'Nombre del proyecto',
  desc: 'Descripción detallada.',
  img: 'URL_imagen_portada',
  imgs: ['URL1','URL2'],
  a360: 'https://a360.co/XXXXX', // null si no tiene
  client: 'Cliente',
  date: '2025',
  loc: 'Santiago',
  svs: ['Modelo 3D','Coordinación BIM']
},
`

---
© 2026 EBF Servicios · Santiago, Chile