import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Database, GitBranch, Layout, Sparkles, Terminal, CheckCircle2, Cpu, Filter } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

const CATEGORIES = [
  { id: 'all', label: 'Todas as Tecnologias' },
  { id: 'backend', label: 'Backend & Python' },
  { id: 'database', label: 'Banco de Dados' },
  { id: 'frontend', label: 'Frontend & Web' },
  { id: 'tools', label: 'Ferramentas & Git' },
  { id: 'fundamentals', label: 'Fundamentos' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getCategoryBadge = (category: Skill['category']) => {
    switch (category) {
      case 'backend':
        return { label: 'Backend', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' };
      case 'database':
        return { label: 'Dados', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      case 'frontend':
        return { label: 'Frontend', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'tools':
        return { label: 'Tools', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
      case 'fundamentals':
        return { label: 'Fundamentos', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' };
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Stack Tecnológica"
          title="Minhas"
          highlight="Habilidades & Ferramentas"
          subtitle="Conjunto de tecnologias que estudo, aplico em projetos e aprimoro continuamente."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const badge = getCategoryBadge(skill.category);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <h3 className="font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono text-[11px]">Nível</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium text-[11px]">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Highlight Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Terminal size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Diferencial Técnico em Python</h4>
              <p className="text-xs text-slate-400">
                Experiência com Pyodide para executar Python nativo no navegador do usuário via WebAssembly.
              </p>
            </div>
          </div>

          <a
            href="#playground"
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors whitespace-nowrap"
          >
            Experimentar no Playground
          </a>
        </div>
      </div>
    </section>
  );
}
