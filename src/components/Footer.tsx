import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Terminal size={16} />
            </div>
            <div>
              <span className="font-mono font-bold text-sm text-white">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-xs text-slate-500">Desenvolvedor Python & Estudante de Sistemas</p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors ml-2 flex items-center gap-1 text-xs font-mono"
              title="Voltar ao topo"
            >
              <ArrowUp size={15} />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px]">
            Construído com React, TypeScript, Tailwind CSS &amp; WebAssembly Pyodide
          </p>
        </div>
      </div>
    </footer>
  );
}
