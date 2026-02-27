/**
 * Modul pro správu a načítání textového obsahu.
 * Načítá data z externího JSON souboru.
 */
export async function nacti_obsah() {
  try {
    // V produkci/Vite prostředí musí být cesta přístupná
    const odpoved = await fetch('/data/obsah.json');
    if (!odpoved.ok) throw new Error('Soubor nenalezen');
    
    const data = await odpoved.json();
    const audit_id = `TXTM-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    console.log(`[AUDIT] Načten obsah: ${audit_id}`);
    return data;
  } catch (chyba) {
    console.error('[CHYBA] Textový manažer selhal:', chyba);
    return null;
  }
}
