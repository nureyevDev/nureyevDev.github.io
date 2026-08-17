import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  badge?: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, highlight, subtitle }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
