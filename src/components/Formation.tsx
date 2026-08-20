import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { TIMELINE_DATA } from '../data/portfolioData';

export default function Formation() {
  return (
    <section id="formacao" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Jornada Profissional"
          title="Formação Acadêmica &"
          highlight="Experiência Prática"
          subtitle="Minha trajetória de estudos no Senac e dedicação contínua em projetos e código real."
        />

        <div className="space-y-6">
          {TIMELINE_DATA.map((item, index) => {
            const isEducation = item.type === 'education';
            const isExperience = item.type === 'experience';

            return (
              <div
                key={item.id}
                className="surface-card rounded-2xl p-6 sm:p-7 border border-slate-800 relative transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                        isEducation
                          ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                          : isExperience
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      }`}
                    >
                      {isEducation ? (
                        <GraduationCap size={22} />
                      ) : isExperience ? (
                        <Briefcase size={22} />
                      ) : (
                        <Award size={22} />
                      )}
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-sky-400 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Status & Period Badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:self-start">
                    {item.status && (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                          item.status === 'Em andamento'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : item.status === 'Atual'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar size={12} className="text-slate-500" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 pl-0 sm:pl-14">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-14">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
