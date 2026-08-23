// ── EBF Servicios · Google Apps Script v3 ──
// Pegar en: script.google.com → tu proyecto → Code.gs
// Luego: Implementar → Nueva implementación → Aplicación web
//        Ejecutar como: Yo  |  Quién puede acceder: Cualquier persona
//        Copiar la URL nueva y pegarla en index.html como SCRIPT=

const SHEET_ID = ''; // ← PEGA AQUÍ tu ID de Google Sheet (el string largo de la URL)
const SHEET_CONTACTO = 'Contactos';
const SHEET_AGENDA   = 'Agenda';

function doPost(e) {
  return handle(e.postData ? e.postData.contents : '{}');
}

function doGet(e) {
  // Para llamadas desde dominio custom (no-cors GET)
  const raw = e.parameter && e.parameter.data ? e.parameter.data : '{}';
  return handle(raw);
}

function handle(raw) {
  try {
    const data = JSON.parse(raw);
    const ss   = SpreadsheetApp.openById(SHEET_ID);

    // Detectar si es agenda o contacto
    const isAgenda = !!data.horario;
    const sheetName = isAgenda ? SHEET_AGENDA : SHEET_CONTACTO;

    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Headers
      if (isAgenda) {
        sheet.appendRow(['Fecha Envío','Nombre','Correo','Servicio','Mensaje','Horario ISO','Horario Label']);
      } else {
        sheet.appendRow(['Fecha Envío','Nombre','Correo','Teléfono','Servicio','Consulta']);
      }
    }

    if (isAgenda) {
      sheet.appendRow([
        data.fecha || new Date().toLocaleString('es-CL'),
        data.nombre || '',
        data.correo || '',
        data.servicio || '',
        data.mensaje  || '',
        data.horario  || '',
        data.horario_label || ''
      ]);
    } else {
      sheet.appendRow([
        data.fecha    || new Date().toLocaleString('es-CL'),
        data.nombre   || '',
        data.correo   || '',
        data.telefono || '',
        data.servicio || '',
        data.consulta || ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false, error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
