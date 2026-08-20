import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Oportunidade de Estágio / Desenvolvedor Júnior');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Olá Nureyev,\n\nMeu nome é ${senderName || 'Visitante do Portfólio'}.\n\n${message || 'Gostaria de conversar sobre oportunidades de trabalho ou projetos.'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyFormattedMessage = () => {
    const text = `Para: ${PERSONAL_INFO.email}\nAssunto: ${subject}\n\nOlá Nureyev,\nMeu nome é ${senderName || 'Visitante'}.\n\n${message || 'Gostaria de entrar em contato para conversar sobre uma oportunidade.'}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  const contactChannels = [
    {
      id: 'email',
      icon: <Mail size={20} className="text-sky-400" />,
      title: 'E-mail Principal',
      value: PERSONAL_INFO.email,
      actionText: copiedEmail ? 'Copiado!' : 'Copiar E-mail',
      onClick: handleCopyEmail,
      isCopy: true,
      badge: 'Resposta Rápida',
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={20} className="text-sky-400" />,
      title: 'LinkedIn',
      value: 'in/nureyev-alencar-108495418',
      href: PERSONAL_INFO.linkedinUrl,
      actionText: 'Acessar Perfil',
      badge: 'Rede Profissional',
    },
    {
      id: 'github',
      icon: <Github size={20} className="text-white" />,
      title: 'GitHub',
      value: `@${PERSONAL_INFO.githubUser}`,
      href: PERSONAL_INFO.githubUrl,
      actionText: 'Ver Repositórios',
      badge: 'Código Aberto',
    },
    {
      id: 'location',
      icon: <MapPin size={20} className="text-emerald-400" />,
      title: 'Localização',
      value: PERSONAL_INFO.location,
      badge: 'Presencial & Remoto',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Vamos Conversar"
          title="Entre em"
          highlight="Contato"
          subtitle="Estou disponível para vagas de estágio, desenvolvedor júnior e projetos em Python. Envie uma mensagem!"
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="surface-card-static rounded-2xl p-6 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2">Canais Diretos</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Fique à vontade para me contatar por e-mail ou conectar no LinkedIn para networking e oportunidades.
              </p>

              <div className="space-y-3.5">
                {contactChannels.map((c) => (
                  <div
                    key={c.id}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60 flex-shrink-0">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white truncate">{c.title}</span>
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded">
                            {c.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono truncate">{c.value}</p>
                      </div>
                    </div>

                    {c.isCopy ? (
                      <button
                        type="button"
                        onClick={c.onClick}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 flex items-center gap-1 flex-shrink-0 transition-colors"
                      >
                        {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                        <span className={copiedEmail ? 'text-emerald-400' : ''}>
                          {c.actionText}
                        </span>
                      </button>
                    ) : c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-300 transition-colors flex-shrink-0"
                        title={c.actionText}
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div className="text-xs text-emerald-300">
                <strong className="font-semibold text-emerald-200">Pronto para início imediato:</strong> Buscando oportunidades para somar, aprender e crescer na equipe.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="surface-card-static rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-sky-400" />
                  <h3 className="text-base font-bold text-white">Compor Mensagem Rápida</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">Direto para o e-mail</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Seu Nome ou Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Recrutador(a) / Empresa"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Assunto
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Oportunidade de Estágio / Desenvolvedor Júnior">
                        Oportunidade de Estágio / Júnior
                      </option>
                      <option value="Proposta de Projeto / Freelance Python">
                        Proposta de Projeto / Freelance
                      </option>
                      <option value="Conversa Técnica / Dúvida sobre o Portfólio">
                        Conversa Técnica / Networking
                      </option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Olá Nureyev, vi seu portfólio e gostaria de conversar sobre..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 leading-relaxed resize-y"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    {copiedMessage ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Mensagem Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copiar Texto Formatado</span>
                      </>
                    )}
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <Send size={14} />
                    <span>Enviar via Cliente de Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
