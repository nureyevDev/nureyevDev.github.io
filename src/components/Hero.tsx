import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail } from 'lucide-react';

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

const carouselImages = [
  {
    src: 'https://avatars.githubusercontent.com/nureyevDev',
    alt: 'Nureyev Alencar',
    label: '👨‍💻 Nureyev',
  },
  {
    src: '/images/tux.png',
    alt: 'Tux Linux',
    label: '🐧 Linux',
  },
  {
    src: '/images/octocat.png',
    alt: 'GitHub Octocat',
    label: '🐙 Octocat',
  },
  {
    src: '/images/hacker.png',
    alt: 'Cybersecurity Hacker',
    label: '🛡️ CyberSec',
  },
  {
    src: '/images/python.png',
    alt: 'Python',
    label: '🐍 Python',
  },
  {
    src: '/images/html5.png',
    alt: 'HTML5',
    label: '🌐 HTML5',
  },
  {
    src: '/images/css3.png',
    alt: 'CSS3',
    label: '🎨 CSS3',
  },
  {
    src: '/images/aws.png',
    alt: 'Amazon Web Services',
    label: '☁️ AWS',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage(prev => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Terminal tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            &gt;&gt;&gt; import desenvolvedor
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white">Olá, eu sou</span>
            <br />
            <span className="gradient-text">Nureyev Alencar</span>
          </h1>

          <div className="text-xl sm:text-2xl text-slate-400 font-mono mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Desenvolvedor Python 🐍',
                2000,
                'Estudante de Sistemas 📚',
                2000,
                'Futuro Full Stack Dev 🚀',
                2000,
                'Apaixonado por código 💻',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
            Estudante de Desenvolvimento de Sistemas focado em <strong className="text-blue-400">Python</strong>.
            Role até o <strong className="text-cyan-400">Playground</strong> abaixo
            e execute código Python de verdade, rodando ao vivo no seu navegador.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projetos"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center gap-2"
            >
              Ver Projetos
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2"
            >
              <Mail size={18} />
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/nureyevDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nureyevDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:contato@nureyev.dev"
              className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Avatar Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />

            {/* Carousel Container */}
            <div
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-slate-800 animate-pulse-glow cursor-pointer"
              onClick={nextImage}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={carouselImages[currentImage].src}
                  alt={carouselImages[currentImage].alt}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.15, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: -5 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {carouselImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentImage
                      ? 'w-8 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-400'
                      : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={img.label}
                />
              ))}
            </div>

            {/* Current image label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-2"
              >
                <span className="text-xs font-mono text-slate-500">
                  {carouselImages[currentImage].label}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm"
            >
              <span className="text-green-400 text-sm font-mono font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Disponível
              </span>
            </motion.div>

            {/* Floating Python badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute -top-2 -left-4 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm"
            >
              <span className="text-yellow-400 text-sm font-mono">🐍 Python</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-mono">scroll</span>
          <ArrowDown size={16} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
