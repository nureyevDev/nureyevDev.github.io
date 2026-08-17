import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const GITHUB_USER = 'nureyevDev';

export default function GitHubStats() {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=60a5fa&text_color=94a3b8&icon_color=06b6d4`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=tokyonight&hide_border=true&background=0d1117&ring=60a5fa&fire=06b6d4&currStreakLabel=60a5fa`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=60a5fa&text_color=94a3b8`;

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Estatísticas do"
          highlight="GitHub"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="glass-card rounded-2xl p-4 flex items-center justify-center">
            <img
              src={statsUrl}
              alt="GitHub Stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
          <div className="glass-card rounded-2xl p-4 flex items-center justify-center">
            <img
              src={streakUrl}
              alt="GitHub Streak"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 glass-card rounded-2xl p-4 flex items-center justify-center max-w-md mx-auto"
        >
          <img
            src={langsUrl}
            alt="Top Languages"
            className="w-full max-w-sm"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
