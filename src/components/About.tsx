import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, BookOpen, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface GitHubData {
  public_repos: number;
  followers: number;
}

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold gradient-text">{count}+</div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ghData, setGhData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/nureyevDev')
      .then(r => r.json())
      .then(data => setGhData(data))
      .catch(() => {});
  }, []);

  const highlights = [
    { icon: <Code2 size={24} />, title: 'Python First', desc: 'Foco principal em Python, Flask, FastAPI e SQL' },
    { icon: <BookOpen size={24} />, title: 'Aprendizado Contínuo', desc: '9 certificações na área de TI conquistadas' },
    { icon: <Rocket size={24} />, title: 'Projetos Práticos', desc: 'Portfólio com projetos reais e código ao vivo' },
  ];

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Sobre" highlight="mim" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">desenvolvedor.py</span>
              </div>
              <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">Desenvolvedor</span>
                  <span className="text-slate-400">:</span>{'\n'}
                  {'  '}<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-300">__init__</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-red-400">self</span>
                  <span className="text-slate-400">):</span>{'\n'}
                  {'    '}self.nome = <span className="text-green-400">"Nureyev Alencar"</span>{'\n'}
                  {'    '}self.foco = <span className="text-green-400">"Python"</span>{'\n'}
                  {'    '}self.stack = [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Flask"</span>, <span className="text-green-400">"FastAPI"</span>, <span className="text-green-400">"SQL"</span>]{'\n'}
                  {'    '}self.buscando_vaga = <span className="text-orange-400">True</span>{'\n'}
                  {'\n'}
                  {'  '}<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-300">objetivo</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-red-400">self</span>
                  <span className="text-slate-400">):</span>{'\n'}
                  {'    '}<span className="text-purple-400">return</span>{' '}
                  <span className="text-green-400">"Primeira oportunidade em TI"</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Sou estudante de <strong className="text-white">Desenvolvimento de Sistemas</strong> pelo Senac,
              com certificações na área de TI, focado em iniciar minha carreira em tecnologia como desenvolvedor.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Tenho conhecimento em <strong className="text-blue-400">Python</strong>,{' '}
              <strong className="text-yellow-400">JavaScript</strong>, HTML5, CSS, SQL, lógica de programação e
              análise de dados. Meu objetivo é conquistar minha primeira oportunidade em TI, aprender na prática e
              evoluir rapidamente.
            </p>

            {/* Highlight cards */}
            <div className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{h.title}</div>
                    <div className="text-slate-400 text-xs">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-800/20 border border-slate-700/30">
              <AnimatedCounter target={ghData?.public_repos ?? 4} label="Repositórios" />
              <AnimatedCounter target={ghData?.followers ?? 0} label="Seguidores" />
              <AnimatedCounter target={9} label="Certificados" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
