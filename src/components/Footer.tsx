import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="font-mono text-sm font-bold">
              <span className="text-blue-400">&gt;_ Py</span>
              <span className="text-slate-400">Folio</span>
            </span>
          </a>

          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Feito com <Heart size={14} className="text-red-500 fill-red-500" /> por{' '}
            <span className="text-blue-400 font-semibold">Nureyev Alencar</span>
            {' '}usando React + Tailwind CSS
          </p>

          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
