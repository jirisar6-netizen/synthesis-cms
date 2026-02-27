import './styles/ubuntu_theme.css';
import { synchronizovatStav } from './moduly/G_Sync_Synchronizace.ts';

/**
 * Hlavní komponenta aplikace AISS-OS.
 * Zajišťuje základní layout a interakci se systémem.
 */
export default function App() {
  const spustitSync = () => {
    synchronizovatStav('UZIVATELSKA_INTERAKCE', { status: 'OK' });
  };

  return (
    <div className="flex flex-col min-h-screen p-4 space-y-6">
      <header className="py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#e95420]">AISS-OS v1.0</h1>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="glass-panel w-full max-w-md text-center space-y-4">
          <h2 className="text-xl">Systémová Správa Modulů</h2>
          <p className="opacity-70">Režim: SSM (Aktivní)</p>
          <button 
            onClick={spustitSync}
            className="bg-[#e95420] hover:bg-[#c7461b] px-6 py-3 rounded-lg font-bold transition-colors w-full"
          >
            SPOUSTIT G-SYNC
          </button>
        </div>
      </main>

      <footer className="py-4 text-center text-sm opacity-50">
        © 2026 AISS-OS | Systémová Integrita Zajištěna
      </footer>
    </div>
  );
}
