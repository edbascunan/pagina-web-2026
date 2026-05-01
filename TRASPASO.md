# 📋 DOCUMENTO DE TRASPASO — EBF SERVICIOS

## 🌐 LINKS CLAVE
- **Página en vivo**: https://edbascunan.github.io/pagina-web-2026/
- **Repositorio**: https://github.com/edbascunan/pagina-web-2026
- **Repo original Astro**: https://github.com/edbascunan/P-gina-web-100-_En-linea

## 🔑 CREDENCIALES
- GitHub usuario: `edbascunan` / email: `ed.bascunan@gmail.com`
- GitHub token: `*** VER CREDENTIAL MANAGER DE WINDOWS ***`
- WhatsApp: `+56 9 6801 0204`
- Email: `contacto@ebfservicios.cl`
- Google Script: `https://script.google.com/macros/s/AKfycbw4CXSjTRlXAQOm8lNJMuuCGxbJ1Uqq2fRMlJS5dSqriyFNM-LV4laLdBxXT9EUvIRM/exec`
- n8n: `https://edbascunan.app.n8n.cloud/mcp-server/http`

## ⚙️ STACK
- HTML5 + CSS3 + JS vanilla (sin frameworks) en un solo `index.html`
- GitHub Pages (deploy automático al hacer push a main)
- Google Apps Script → Google Sheets (formulario + agendamiento)
- Autodesk A360 (iframe con sandbox)

## 🃏 FÓRMULA CRÍTICA — FLIP CARDS (NO CAMBIAR)

### CSS:
```css
.pcard { height: 600px; perspective: 1000px; }
.pcard-inner { position:relative; width:100%; height:100%; transition:transform .5s; transform-style:preserve-3d; }
.pcard.flipped .pcard-inner { transform: rotateY(180deg); }
.pcard-front, .pcard-back { position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:12px; overflow:hidden; }
.pcard-back { transform: rotateY(180deg); }
```

### JS:
```javascript
const ST = {};
function getState(i) { if(!ST[i]) ST[i]={isFlipped:false,showModel:false,currentSlide:0}; return ST[i]; }
function showService(i,e) { e&&e.stopPropagation(); const s=getState(i); s.isFlipped=true; s.showModel=false; renderPJ(); }
function showModel3D(i,e) { e&&e.stopPropagation(); const s=getState(i); s.isFlipped=true; s.showModel=true; renderPJ(); }
function flipBack(i,e) { e&&e.stopPropagation(); getState(i).isFlipped=false; renderPJ(); }
```

### iframe A360 (sandbox exacto):
```html
<iframe src="https://a360.co/XXXXX"
  allow="fullscreen; accelerometer; autoplay; camera; gyroscope; microphone; xr-spatial-tracking"
  allowfullscreen
  sandbox="allow-scripts allow-same-origin allow-popups allow-forms">
</iframe>
```

### Lógica dorso:
```javascript
const back = (!has3d || !st.showModel)
  ? `descripción texto`
  : `<iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" ...>`;
```

## 📋 FORMULARIO → GOOGLE SHEETS

```javascript
await fetch(SCRIPT, {
  method: 'POST',
  mode: 'no-cors',  // CRÍTICO
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({ nombre, correo, telefono, servicio, consulta, fecha })
});
```

## 🚀 DEPLOY

```powershell
$token = "*** VER CREDENTIAL MANAGER DE WINDOWS ***"
cd C:\Users\56968\AppData\Local\Temp\ebf-deploy-149823440
git add index.html
git commit -m "descripcion"
git push "https://edbascunan:$token@github.com/edbascunan/pagina-web-2026.git" main
```

## 🤖 MCP DISPONIBLES
- **Windows MCP**: archivos, PowerShell, git
- **n8n**: automatizaciones, flujos WhatsApp
- **Canva**: diseño gráfico
- **Google Drive**: sheets, archivos

## ⚠️ ERRORES CONOCIDOS
| Error | Solución |
|---|---|
| Página blanca | Hacer push del index.html correcto |
| A360 no carga | Verificar sandbox: `allow-scripts allow-same-origin allow-popups allow-forms` |
| Formulario 403 | Normal desde servidor — funciona desde browser con no-cors |
