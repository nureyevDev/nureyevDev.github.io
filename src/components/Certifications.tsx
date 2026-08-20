import { useState } from 'react';
import { Award, CheckCircle, ShieldCheck, Filter } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CERTIFICATES_DATA } from '../data/portfolioData';

const CERT_CATEGORIES = [
  { id: 'all', label: 'Todos os Certificados' },
  { id: 'python', label: 'Python & Dados' },
  { id: 'fundamentals', label: 'Lógica & Fundamentos' },
  { id: 'database', label: 'Banco de Dados SQL' },
  { id: 'web', label: 'Web & JavaScript' },
];

export default function Certifications() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredCerts = selectedCat === 'all'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((c) => c.category === selectedCat);

  return (
    <section id="certificados" className="py-20 bg-slate-950/70 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={`${CERTIFICATES_DATA.length} Certificações`}
          title="Licenças &"
          highlight="Certificados Conquistados"
          subtitle="Formações complementares concluídas com foco em excelência técnica e domínio de ferramentas."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CERT_CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? CERTIFICATES_DATA.length
              : CERTIFICATES_DATA.filter((c) => c.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCat === cat.id
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid of Certs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="surface-card rounded-2xl p-5 border border-slate-800 flex items-start gap-3.5 group hover:border-sky-500/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Award size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-sky-400 border border-slate-800">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug line-clamp-2">
                  {cert.name}
                </h3>

                {cert.hours && (
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">
                    Carga Horária: {cert.hours}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
