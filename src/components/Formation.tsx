import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const timeline = [
  {
    type: 'education' as const,
    icon: <GraduationCap size={24} />,
    title: 'Formação Acadêmica',
    org: 'Senac Brasil',
    role: 'Desenvolvimento de Sistemas',
    period: 'Desde 2026',
    location: undefined,
    description: 'Curso focado em desenvolvimento de sistemas, lógica de programação, análise de dados e boas práticas com Git.',
    items: [],
  },
  {
    type: 'work' as const,
    icon: <Briefcase size={24} />,
    title: 'Experiência',
    org: 'Projetos Pessoais · Autônomo',
    role: 'Desenvolvedor Full Stack',
    period: 'Desde jan de 2026',
    location: 'Teresina, Piauí, Brasil',
    description: undefined,
    items: [
      'Desenvolvimento de projetos utilizando JavaScript e Python',
      'Aplicação de lógica de programação na resolução de problemas',
      'Criação de soluções práticas para aprendizado contínuo',
    ],
  },
];

export default function Formation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="formacao" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Formação &" highlight="Experiência" />

        <div ref={ref} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-purple-500/50 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 z-10 hidden md:block" />

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)] w-full">
                  <div className="glass-card rounded-2xl p-6 hover:border-blue-500/40">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.type === 'education'
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'bg-purple-500/10 text-purple-400'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-blue-400 font-semibold">{item.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 font-medium mb-1">{item.org}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {item.location}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    )}

                    {item.items.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {item.items.map((li, j) => (
                          <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="md:w-[calc(50%-2rem)] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
