/**
 * Modul pro kontrolu integrity auditních dat.
 * Prověřuje, zda data obsahují povinné klíče.
 */
export function zkontrolovatIntegritu(data: any): boolean {
  if (!data) return false;
  
  const povinneKlice = [
    'AUDIT_ID', 
    'casove_razitko', 
    'posledni_akce'
  ];

  return povinneKlice.every(klic => 
    Object.prototype.hasOwnProperty.call(data, klic)
  );
}
