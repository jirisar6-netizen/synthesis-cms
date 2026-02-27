import { zkontroluj_vykon } from './Google_Telemetrie.ts';
import { nacti_obsah } from './Textovy_Manazer.ts';
import { zkontrolovatIntegritu } from './Dozor_Kontrola_Auditu.ts';

/**
 * Hlavní zavaděč systému AISS-OS.
 * Provádí sekvenční bootování modulů a kontrolu integrity.
 */
export async function nastartuj_system(): Promise<void> {
  console.log('[BOOT] Inicializace AISS-OS...');

  // KROK 1: Telemetrie výkonu
  const rezim = zkontroluj_vykon();
  if (rezim === "USPORNY_REZIM") {
    console.warn('[VAROVÁNÍ] Detekován nízký výkon. 144Hz animace omezeny.');
  }

  // KROK 2: Načtení obsahu a audit
  const obsah = await nacti_obsah();
  const je_v_poradku = zkontrolovatIntegritu({
    AUDIT_ID: 'BOOT-CHECK',
    casove_razitko: new Date().toISOString(),
    posledni_akce: 'SYSTEM_BOOT',
    ...obsah
  });

  // KROK 3: Finální aktivace
  if (je_v_poradku) {
    console.log('%c AISS-OS JÁDRO AKTIVNÍ: Vítejte ve Studiu Synthesis ', 
      'background: #300a24; color: #e95420; font-weight: bold; padding: 5px;');
    
    const root = document.getElementById('aiss-os-root');
    if (root) {
      root.innerHTML = `
        <h1 style="color: #e95420; font-size: 1.5rem; margin-bottom: 1rem;">
          ${obsah?.hlavni_stranka?.nadpis || 'AISS-OS'}
        </h1>
        <p>${obsah?.hlavni_stranka?.podnadpis || ''}</p>
      `;
    }
  }
}
