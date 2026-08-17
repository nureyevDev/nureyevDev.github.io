import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

const certs = [
  { name: 'Lógica de Programação', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'Python 3', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'Algoritmos', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'HTML5 & CSS3', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'JavaScript', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'Git & GitHub', issuer: 'DIO', year: '2026' },
  { name: 'Banco de Dados SQL', issuer: 'Curso em Vídeo', year: '2026' },
  { name: 'Desenvolvimento de Sistemas', issuer: 'Senac', year: '2026' },
  { name: 'Introdução à Ciência de Dados', issuer: 'DIO', year: '2026' },
];

export default function Certifications() {
  return (
    <section id="certificacoes" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={`${certs.length} certificados`}
          title="Licenças &"
          highlight="Certificados"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl p-5 group cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
