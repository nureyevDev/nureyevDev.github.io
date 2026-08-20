import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, BookOpen, Rocket, CheckCircle2, Copy, Check, Terminal, Database, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

const ABOUT_TABS = [
  {
    id: 'bio',
    label: 'perfil.py',
    code: `# Perfil Técnico de Nureyev Alencar
class Desenvolvedor:
    def __init__(self):
        self.nome = "Nureyev Alencar"
        self.localizacao = "Teresina, PI — Brasil"
        self.formacao = "Desenvolvimento de Sistemas (Senac)"
        self.foco_principal = "Python Backend & APIs REST"
        self.stack = ["Python", "Flask", "FastAPI", "SQL", "Git", "JS"]
        self.disponibilidade = "Estágio / Júnior Presencial ou Remoto"

    def objetivo(self) -> str:
        return "Aplicar lógica sólida, boas práticas e evoluir na área de TI."
`,
  },
  {
    id: 'skills',
    label: 'competencias.py',
    code: `# Competências e Ferramentas Práticas
stack_backend = {
    "linguagem": "Python 3 (POO, Decorators, Generics)",
    "frameworks": ["Flask", "FastAPI"],
    "bancos": ["PostgreSQL", "SQLite", "Modelagem ER"],
    "versionamento": "Git, GitHub Flow & PRs",
    "diferencial": "Execução de Python no browser via WebAssembly (Pyodide)"
}

print(f"Stack ativa: {list(stack_backend.keys())}")
`,
  },
  {
    id: 'goals',
    label: 'metas.py',
    code: `# Metas de Curto & Médio Prazo
metas_2026 = [
    "✅ Concluir Curso Técnico de Dev Sistemas (Senac)",
    "✅ Conquistar primeira oportunidade como Dev Júnior/Estagiário",
    "🚀 Construir APIs robustas e microsserviços com FastAPI",
    "🚀 Aprofundar em Docker, testes automatizados e deploy em nuvem"
]

for meta in metas_2026:
    print(meta)
`,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ABOUT_TABS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    {
      icon: <Terminal className="text-sky-400" size={20} />,
      title: 'Especialização em Python',
      desc: 'Foco no ecossistema Python moderno: scripts, lógica avançada e APIs.',
    },
    {
      icon: <Database className="text-emerald-400" size={20} />,
      title: 'Bancos de Dados & SQL',
      desc: 'Consultas estruturadas, integridade relacional e integração com ORMs.',
    },
    {
      icon: <BookOpen className="text-indigo-400" size={20} />,
      title: 'Formação Senac & 9 Certificações',
      desc: 'Base teórica sólida complementada por cursos especializados em tecnologia.',
    },
    {
      icon: <Rocket className="text-amber-400" size={20} />,
      title: 'Orientado a Resultados & Prática',
      desc: 'Construção contínua de projetos reais, repositórios abertos e código limpo.',
    },
  ];

  return (
    <section id="sobre" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Apresentação"
          title="Sobre"
          highlight="Minha Trajetória"
          subtitle="Conheça minha dedicação aos estudos, foco técnico e como posso somar à sua equipe."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Code Preview Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="surface-card-static rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              {/* Tab Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {ABOUT_TABS.map((tab, idx) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap ${
                        activeTab === idx
                          ? 'bg-slate-800 text-sky-400 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors ml-2"
                  title="Copiar código"
                  aria-label="Copiar código"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 bg-slate-950/95 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed min-h-[290px]">
                <pre>
                  <code>{ABOUT_TABS[activeTab].code}</code>
                </pre>
              </div>

              {/* Footer Indicator */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>UTF-8 • Python 3.12</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Pronto para execução
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Sou estudante do curso técnico em <strong className="text-white font-semibold">Desenvolvimento de Sistemas pelo Senac</strong> em Teresina, Piauí. Tenho direcionado meus estudos com rigor para o universo <strong className="text-sky-400 font-semibold">Python</strong>, focando em arquitetura limpa, lógica estruturada e construção de serviços web.
              </p>
              <p>
                Além das aulas, realizei <strong className="text-slate-100 font-semibold">9 certificações complementares</strong> em plataformas renomadas como Curso em Vídeo e DIO, cobrindo desde lógica algorítmica até modelagem de banco de dados relacional (SQL) e boas práticas com Git.
              </p>
            </div>

            {/* Structured Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60">
                      {h.icon}
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-tight">{h.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 via-slate-900/50 to-indigo-950/40 border border-sky-900/30 flex items-center justify-around text-center">
              <div>
                <div className="text-xl font-bold text-sky-400 font-mono">9+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Cursos & Certs</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Foco Prático</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <div className="text-xl font-bold text-indigo-400 font-mono">Senac</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Formação Oficial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
