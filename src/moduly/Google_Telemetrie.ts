/**
 * Modul pro sledování výkonu zařízení.
 * Optimalizováno pro HW Xiaomi 13T Pro (144Hz).
 */
export function zkontroluj_vykon(): string {
  const pocet_jader = navigator.hardwareConcurrency || 4;
  
  if (pocet_jader >= 8) {
    console.log('[TELEMETRIE] Detekován VYSOKÝ VÝKON');
    return "VYSOKY_VYKON";
  }
  
  console.log('[TELEMETRIE] Aktivován ÚSPORNÝ REŽIM');
  return "USPORNY_REZIM";
}
