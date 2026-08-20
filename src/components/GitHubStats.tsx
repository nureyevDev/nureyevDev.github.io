import { useState, useEffect } from 'react';
import { Github, Star, GitFork, BookOpen, Users, Code, Activity, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

interface UserData {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export default function GitHubStats() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUser}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setUserData(data);
        }
      })
      .catch(() => {
        // Fallback
        setUserData({
          public_repos: 4,
          followers: 1,
          following: 0,
          created_at: '2026-01-01',
        });
      });
  }, []);

  const languageBreakdown = [
    { name: 'Python', percent: 65, color: 'bg-sky-500', textColor: 'text-sky-400' },
    { name: 'TypeScript / JS', percent: 20, color: 'bg-amber-400', textColor: 'text-amber-400' },
    { name: 'HTML & CSS', percent: 10, color: 'bg-emerald-400', textColor: 'text-emerald-400' },
    { name: 'Markdown / AI', percent: 5, color: 'bg-purple-400', textColor: 'text-purple-400' },
  ];

  return (
    <section id="github-stats" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Atividade Open Source"
          title="Métricas & Presença no"
          highlight="GitHub"
          subtitle="Acompanhamento contínuo de commits, repositórios e evolução técnica de @nureyevDev."
        />

        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {/* Main User Card (5 cols) */}
          <div className="md:col-span-5 surface-card-static rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                  <Github size={26} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{PERSONAL_INFO.name}</h3>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 font-mono hover:underline flex items-center gap-1"
                  >
                    <span>@{PERSONAL_INFO.githubUser}</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <BookOpen size={13} className="text-sky-400" />
                    <span>Repositórios</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {userData ? userData.public_repos : 4}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Users size={13} className="text-emerald-400" />
                    <span>Seguidores</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {userData ? userData.followers : 1}
                  </div>
                </div>
              </div>

              {/* Focus Banner */}
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <Activity size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <span>
                  Constante envio de código e commits organizados com mensagens semânticas no GitHub.
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700/80 transition-colors flex items-center justify-center gap-2"
              >
                <Github size={15} />
                <span>Ver Perfil Completo no GitHub</span>
              </a>
            </div>
          </div>

          {/* Languages & Activity Card (7 cols) */}
          <div className="md:col-span-7 surface-card-static rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-sky-400" />
                  <h4 className="font-bold text-white text-sm">Distribuição de Linguagens & Foco</h4>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Média Geral</span>
              </div>

              {/* Progress Multi-bar */}
              <div className="h-3 rounded-full bg-slate-900 overflow-hidden flex mb-5 border border-slate-800">
                {languageBreakdown.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percent}%` }}
                    className={`${lang.color} h-full`}
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Breakdown List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {languageBreakdown.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span className="text-xs text-slate-300 font-medium">{lang.name}</span>
                    </div>
                    <span className={`text-xs font-mono font-bold ${lang.textColor}`}>
                      {lang.percent}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Readme Stats Embed Clean Box */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h5 className="text-xs font-bold text-white mb-0.5">Repositórios Open Source</h5>
                  <p className="text-[11px] text-slate-400">
                    Projetos abertos para consulta, bifurcação e contribuições comunitárias.
                  </p>
                </div>
                <a
                  href={`https://github.com/${PERSONAL_INFO.githubUser}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono hover:bg-sky-500/20 transition-colors whitespace-nowrap"
                >
                  Listar Repos →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
