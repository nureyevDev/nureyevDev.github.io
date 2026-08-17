import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
  icon: string;
}

const skillCategories = [
  {
    title: 'Linguagens',
    skills: [
      { name: 'Python', level: 85, color: '#3776ab', icon: '🐍' },
      { name: 'JavaScript', level: 65, color: '#f7df1e', icon: '⚡' },
      { name: 'HTML5', level: 80, color: '#e34f26', icon: '🌐' },
      { name: 'CSS3', level: 70, color: '#1572b6', icon: '🎨' },
      { name: 'SQL', level: 60, color: '#00758f', icon: '🗃️' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'Flask', level: 70, color: '#000000', icon: '🧪' },
      { name: 'FastAPI', level: 65, color: '#009688', icon: '🚀' },
      { name: 'Git / GitHub', level: 75, color: '#f05032', icon: '📦' },
      { name: 'React', level: 40, color: '#61dafb', icon: '⚛️' },
      { name: 'Pyodide/WASM', level: 50, color: '#654ff0', icon: '🔧' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Resolução de Problemas', level: 85, color: '#10b981', icon: '🧠' },
      { name: 'Aprendizado Rápido', level: 90, color: '#3b82f6', icon: '📚' },
      { name: 'Comunicação', level: 75, color: '#8b5cf6', icon: '💬' },
      { name: 'Trabalho em Equipe', level: 80, color: '#f59e0b', icon: '🤝' },
      { name: 'Organização', level: 70, color: '#ec4899', icon: '📋' },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-800/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
          }}
        >
          <div className="absolute inset-0 rounded-full opacity-50" style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
            animation: 'shimmer 2s infinite',
          }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tech Stack"
          title="Minhas"
          highlight="Habilidades"
          subtitle="Tecnologias e ferramentas que utilizo no dia a dia"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
