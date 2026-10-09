/**
 * Google Apps Script webhook — appends estimate form rows to a spreadsheet.
 *
 * SETUP on the TARGET sheet (the one that should receive rows):
 * 1. Open THAT Google Sheet
 * 2. Extensions → Apps Script
 * 3. Paste this file (leave SPREADSHEET_ID empty to use this bound sheet)
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL → Cloudflare var ESTIMATE_SHEET_WEBHOOK
 *
 * TO SWITCH SHEETS:
 * - Open the new sheet → paste this script there (SPREADSHEET_ID empty) →
 *   Deploy → New deployment → update ESTIMATE_SHEET_WEBHOOK
 * - OR set SPREADSHEET_ID to the new file ID and Save (same deployment may work)
 *
 * If executions increase but the sheet looks empty: you are likely looking at a
 * different spreadsheet, or a different tab — check the JSON response fields
 * spreadsheetId / sheetName / url.
 */

const CONFIG = {
  // Target spreadsheet (from the sheet URL between /d/ and /edit).
  // VSA infinity - Leads:
  SPREADSHEET_ID: '1DluY1EOsbufpZBp1zkkMJZaAKyAkgoe60oBr0Cgtpr4',
  // Leave EMPTY to use the first sheet/tab (Аркуш1).
  SHEET_NAME: '',
  SHARED_SECRET: '',
};

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = JSON.parse(raw);

    if (CONFIG.SHARED_SECRET && data.secret !== CONFIG.SHARED_SECRET) {
      return json_({ ok: false, error: 'Unauthorized' });
    }

    const ss = getSpreadsheet_();
    const sheet = getTargetSheet_(ss);
    ensureHeader_(sheet);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.service || '',
      data.zip || '',
      data.notes || '',
    ]);

    const row = sheet.getLastRow();
    return json_({
      ok: true,
      spreadsheetId: ss.getId(),
      spreadsheetName: ss.getName(),
      sheetName: sheet.getName(),
      row: row,
      url: ss.getUrl(),
    });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  try {
    const ss = getSpreadsheet_();
    const sheet = getTargetSheet_(ss);
    return json_({
      ok: true,
      message: 'Estimate sheet webhook is running.',
      spreadsheetId: ss.getId(),
      spreadsheetName: ss.getName(),
      sheetName: sheet.getName(),
      url: ss.getUrl(),
      lastRow: sheet.getLastRow(),
    });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSpreadsheet_() {
  // Prefer the spreadsheet this container-bound script lives in.
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active && !CONFIG.SPREADSHEET_ID) {
    return active;
  }

  if (CONFIG.SPREADSHEET_ID) {
    return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  }

  if (active) {
    return active;
  }

  throw new Error(
    'No spreadsheet found. Open Apps Script from the target Google Sheet (Extensions → Apps Script), or set CONFIG.SPREADSHEET_ID.',
  );
}

function getTargetSheet_(ss) {
  if (CONFIG.SHEET_NAME) {
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    }
    return sheet;
  }

  // Default: first tab (what people usually look at)
  const sheet = ss.getSheets()[0];
  if (!sheet) {
    throw new Error('Spreadsheet has no sheets.');
  }
  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Service',
    'Location / Zip',
    'Notes',
  ]);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
