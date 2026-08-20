import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star, GitFork, Code2, Search, Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FEATURED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { GithubRepo, Project } from '../types';

export default function Projects() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  useEffect(() => {
    fetch('https://api.github.com/users/nureyevDev/repos?sort=updated&per_page=12')
      .then((res) => {
        if (!res.ok) throw new Error('Falha na requisição');
        return res.json();
      })
      .then((data: GithubRepo[]) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(() => {
        // Safe fallback if rate-limited
        setRepos([
          {
            id: 101,
            name: 'logica_programacao_python',
            full_name: 'nureyevDev/logica_programacao_python',
            html_url: 'https://github.com/nureyevDev/logica_programacao_python',
            description: 'Algoritmos e estruturas de dados essenciais desenvolvidos em Python.',
            language: 'Python',
            stargazers_count: 1,
            forks_count: 0,
            updated_at: new Date().toISOString(),
          },
          {
            id: 102,
            name: 'caderno-tematico-engenharia-prompts',
            full_name: 'nureyevDev/caderno-tematico-engenharia-prompts',
            html_url: 'https://github.com/nureyevDev/caderno-tematico-engenharia-prompts',
            description: 'Estudos e anotações estruturadas sobre Prompt Engineering com IA e NotebookLM.',
            language: 'Markdown',
            stargazers_count: 0,
            forks_count: 0,
            updated_at: new Date().toISOString(),
          },
          {
            id: 103,
            name: 'nureyevDev.github.io',
            full_name: 'nureyevDev/nureyevDev.github.io',
            html_url: 'https://github.com/nureyevDev/nureyevDev.github.io',
            description: 'Código fonte deste portfólio moderno com Pyodide Python Playground integrado.',
            language: 'TypeScript',
            stargazers_count: 1,
            forks_count: 0,
            updated_at: new Date().toISOString(),
          },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  const languages = ['all', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLanguage === 'all' || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="projetos" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfólio Prático"
          title="Projetos &"
          highlight="Repositórios em Destaque"
          subtitle="Aplicações que demonstram lógica de programação, arquitetura de software e uso de tecnologias modernas."
        />

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="surface-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
                    {project.language}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Ver no GitHub"
                    >
                      <Github size={17} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-1.5 rounded-lg text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 transition-colors"
                        title="Ver demonstração"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-sky-400 font-bold">✓</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] font-mono border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live GitHub Repositories Explorer */}
        <div className="surface-card-static rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Github size={20} className="text-sky-400" />
                <h3 className="text-lg font-bold text-white">Explorador de Repositórios GitHub</h3>
              </div>
              <p className="text-xs text-slate-400">
                Sincronizado diretamente com a API do perfil <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">@{PERSONAL_INFO.githubUser}</a>
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar repo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              {languages.length > 1 && (
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
                >
                  <option value="all">Todas Linguagens</option>
                  {languages.filter((l) => l !== 'all').map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Repos Grid */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 animate-pulse h-28" />
              ))}
            </div>
          ) : filteredRepos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <Code2 size={15} className="text-sky-400 flex-shrink-0" />
                        <span className="font-mono font-semibold text-xs text-white group-hover:text-sky-300 truncate transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink size={13} className="text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                      {repo.description || 'Sem descrição cadastrada no GitHub.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800/60">
                    <span className="text-sky-400/90">{repo.language || 'Geral'}</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Star size={11} />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-slate-400 text-xs">
              Nenhum repositório encontrado com esse filtro.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
