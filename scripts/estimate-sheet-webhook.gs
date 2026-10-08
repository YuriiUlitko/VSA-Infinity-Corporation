/**
 * Google Apps Script webhook — appends estimate form rows to a spreadsheet.
 *
 * SETUP (once):
 * 1. Open the target Google Sheet
 * 2. Extensions → Apps Script
 * 3. Paste this file, set CONFIG below
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL into Cloudflare Worker var ESTIMATE_SHEET_WEBHOOK
 *    (and matching ESTIMATE_SHEET_SECRET if you set SHARED_SECRET here)
 *
 * TO SWITCH TO ANOTHER SHEET later:
 * - Change CONFIG.SPREADSHEET_ID below and Save (no Worker changes), OR
 * - Paste this script into the new sheet, leave SPREADSHEET_ID empty,
 *   redeploy the web app, and update ESTIMATE_SHEET_WEBHOOK in Cloudflare.
 */

const CONFIG = {
  // Spreadsheet from the shared link (change this to retarget another file)
  SPREADSHEET_ID: '1AaD7BpUBSuxhsEJqy_S3WyH_LGIfYD3cc4JuDNW3CVg',
  // Tab name — created automatically with headers if missing
  SHEET_NAME: 'Requests',
  // Optional: must match Worker var ESTIMATE_SHEET_SECRET when non-empty
  SHARED_SECRET: '',
};

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = JSON.parse(raw);

    if (CONFIG.SHARED_SECRET && data.secret !== CONFIG.SHARED_SECRET) {
      return json_({ ok: false, error: 'Unauthorized' });
    }

    const sheet = getTargetSheet_();
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

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    message: 'Estimate sheet webhook is running.',
    spreadsheetId: CONFIG.SPREADSHEET_ID || '(bound spreadsheet)',
    sheet: CONFIG.SHEET_NAME,
  });
}

function getTargetSheet_() {
  const ss = CONFIG.SPREADSHEET_ID
    ? SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error('No spreadsheet available. Set CONFIG.SPREADSHEET_ID or bind this script to a sheet.');
  }

  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
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
