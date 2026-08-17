import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star, GitFork, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  updated_at: string;
}

const languageColors: Record<string, string> = {
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  HTML: '#e34f26',
  CSS: '#1572b6',
  Shell: '#89e051',
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    fetch('https://api.github.com/users/nureyevDev/repos?sort=updated&per_page=10')
      .then(r => r.json())
      .then((data: Repo[]) => {
        const filtered = data.filter(r => !r.name.includes('.github.io'));
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GitHub API"
          title="Meus"
          highlight="Projetos"
          subtitle="Carregados dinamicamente via GitHub REST API"
        />

        <div ref={ref}>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                  <div className="h-6 bg-slate-700/50 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-slate-700/30 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-700/30 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : repos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Code2 size={20} />
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {repo.name.replace(/_/g, ' ')}
                  </h3>

                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {repo.description || 'Sem descrição disponível'}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: languageColors[repo.language] || '#6b7280' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mx-auto mb-6 text-4xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Construindo meu portfólio</h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Ainda estou construindo meu portfólio de projetos no GitHub — enquanto isso, teste o{' '}
                <a href="#playground" className="text-blue-400 hover:underline">
                  Playground Python
                </a>{' '}
                acima para ver código real em ação.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
