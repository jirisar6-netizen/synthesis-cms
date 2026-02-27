import { zkontrolovatIntegritu } from './Dozor_Kontrola_Auditu.ts';

/**
 * Modul pro synchronizaci stavu do LocalStorage.
 * Generuje unikátní AUDIT_ID pro každou operaci.
 */
export function synchronizovatStav(akce: string, data: any): void {
  const auditId = `AISS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const zaznam = {
    AUDIT_ID: auditId,
    casove_razitko: new Date().toISOString(),
    posledni_akce: akce,
    data: data
  };

  if (zkontrolovatIntegritu(zaznam)) {
    localStorage.setItem('AISS_STATE', JSON.stringify(zaznam));
    console.log(`[G-SYNC] Synchronizováno: ${auditId}`);
  } else {
    console.error('[G-SYNC] Chyba integrity dat!');
  }
}
