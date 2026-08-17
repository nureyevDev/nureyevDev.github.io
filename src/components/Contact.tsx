import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'nureyevalencar@email.com',
    href: 'mailto:nureyevalencar@email.com',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    icon: <GithubIcon size={24} />,
    label: 'GitHub',
    value: '@nureyevDev',
    href: 'https://github.com/nureyevDev',
    color: 'from-slate-500/20 to-gray-500/20',
    borderColor: 'hover:border-slate-400/40',
  },
  {
    icon: <LinkedinIcon size={24} />,
    label: 'LinkedIn',
    value: '/in/nureyevDev',
    href: 'https://linkedin.com/in/nureyevDev',
    color: 'from-blue-600/20 to-blue-400/20',
    borderColor: 'hover:border-blue-400/40',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Localização',
    value: 'Teresina, PI — Brasil',
    href: undefined,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-500/40',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 code-bg" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Vamos"
          highlight="Conversar?"
          subtitle="Estou disponível para estágio, oportunidades júnior e projetos com Python."
        />

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactMethods.map((method, i) => {
            const Tag = method.href ? 'a' : 'div';
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Tag
                  {...(method.href ? { href: method.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`glass-card rounded-xl p-5 flex items-center gap-4 ${method.borderColor} block`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-slate-300 flex-shrink-0`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{method.label}</div>
                    <div className="text-white font-semibold mt-0.5">{method.value}</div>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Pronto para colaborar!</h3>
            <p className="text-slate-400 mb-6">
              Se você está procurando um desenvolvedor júnior motivado, dedicado e com paixão por Python,
              vamos conversar!
            </p>
            <a
              href="mailto:nureyevalencar@email.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all text-lg"
            >
              <Send size={20} />
              Enviar Mensagem
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
