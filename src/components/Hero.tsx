import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, ArrowDown, Mail, Github, Linkedin, Play, Check, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[250px] bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio and CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/70 text-slate-300 text-xs font-mono">
                <Terminal size={13} className="text-sky-400" />
                <span>python --version 3.12</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.status}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
                <MapPin size={12} className="text-slate-500" />
                <span>Teresina, PI</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
              Olá, eu sou <br />
              <span className="text-gradient">Nureyev Alencar</span>
            </h1>

            {/* Role Subheading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-5 font-mono text-sm text-sky-300">
              <Code2 size={16} className="text-sky-400" />
              <span>Desenvolvedor Python & Estudante de Sistemas</span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Estudante pelo <strong className="text-white font-semibold">Senac</strong> focado em desenvolvimento backend com <strong className="text-sky-400 font-semibold">Python</strong>, criação de APIs REST com <strong className="text-sky-300 font-semibold">Flask/FastAPI</strong>, manipulação de banco de dados <strong className="text-slate-100 font-semibold">SQL</strong> e automações.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start w-full sm:w-auto mb-8">
              <a
                id="hero-btn-projects"
                href="#projetos"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-sky-500/20 flex items-center gap-2 group"
              >
                <span>Explorar Projetos</span>
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                id="hero-btn-playground"
                href="#playground"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2"
              >
                <Play size={15} className="text-emerald-400 fill-emerald-400" />
                <span>Testar Python ao Vivo</span>
              </a>

              <button
                id="hero-btn-copy-email"
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 text-sm border border-slate-800 transition-colors flex items-center gap-1.5"
                title="Copiar e-mail"
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-mono">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail size={15} />
                    <span className="text-xs">Copiar Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Quick Links */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60 w-full justify-center lg:justify-start">
              <span className="text-xs text-slate-500 font-mono">Conectar:</span>
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-800/60 text-xs transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                id="hero-social-mail"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-800/60 text-xs transition-colors"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Dev Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md surface-card-static rounded-2xl p-6 border border-slate-800 relative shadow-2xl shadow-black/50">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-700 shadow-md bg-slate-800"
                      onError={(e) => {
                        // Fallback if avatar fails
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-sky-400 font-mono">@nureyevDev</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-mono">
                  Python 3.x
                </div>
              </div>

              {/* Code Snippet in Card */}
              <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800/80 mb-4 font-mono text-xs text-slate-300 space-y-1.5 leading-relaxed overflow-x-auto">
                <div className="text-slate-500 text-[11px]"># Perfil de Carreira</div>
                <div>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">JuniorDeveloper</span>:
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">formacao</span> ={' '}
                  <span className="text-emerald-300">"Senac - Dev Sistemas"</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack_primaria</span> = [
                  <span className="text-sky-300">"Python"</span>,{' '}
                  <span className="text-sky-300">"Flask"</span>,{' '}
                  <span className="text-sky-300">"SQL"</span>]
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">certificados</span> ={' '}
                  <span className="text-orange-400">9</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">disponivel</span> ={' '}
                  <span className="text-emerald-400">True</span>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-lg font-bold text-sky-400">9+</div>
                  <div className="text-[11px] text-slate-400">Certificados</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-lg font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400">Dedicado</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-lg font-bold text-indigo-400">WASM</div>
                  <div className="text-[11px] text-slate-400">Python Web</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
