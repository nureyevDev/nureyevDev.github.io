import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Copy, Check, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const EXAMPLES = [
  {
    label: '🐍 Hello World',
    code: `# Olá, Mundo em Python!
print("Olá, eu sou Nureyev!")
print("Bem-vindo ao meu portfólio 🚀")

for i in range(1, 4):
    print(f"  Habilidade #{i}: Python é incrível!")`,
  },
  {
    label: '📊 Fibonacci',
    code: `# Sequência de Fibonacci
def fibonacci(n):
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

seq = fibonacci(15)
print("Fibonacci (15 termos):")
print(seq)
print(f"\\nSoma total: {sum(seq)}")`,
  },
  {
    label: '🎯 List Comprehension',
    code: `# Poder do Python: List Comprehensions
numeros = list(range(1, 21))

pares = [n for n in numeros if n % 2 == 0]
quadrados = [n**2 for n in range(1, 11)]
fizzBuzz = ["FizzBuzz" if n%15==0 else "Fizz" if n%3==0 else "Buzz" if n%5==0 else n for n in range(1, 16)]

print(f"Pares: {pares}")
print(f"Quadrados: {quadrados}")
print(f"FizzBuzz: {fizzBuzz}")`,
  },
  {
    label: '🏗️ Classes',
    code: `# POO em Python
class Desenvolvedor:
    def __init__(self, nome, stack):
        self.nome = nome
        self.stack = stack
        self.disponivel = True

    def apresentar(self):
        techs = ", ".join(self.stack)
        status = "✅ Disponível" if self.disponivel else "❌ Ocupado"
        return f"{self.nome} | Stack: {techs} | {status}"

dev = Desenvolvedor("Nureyev", ["Python", "Flask", "FastAPI", "SQL"])
print(dev.apresentar())
print(f"\\nTotal de tecnologias: {len(dev.stack)}")`,
  },
];

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<any>;
  }
}

export default function Playground() {
  const [code, setCode] = useState(EXAMPLES[0].code);
  const [output, setOutput] = useState('Aguardando execução...');
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const loadPyodideRuntime = useCallback(async () => {
    if (pyodide) return;
    setLoading(true);
    setOutput('⏳ Carregando Python (Pyodide)... Primeira vez pode levar alguns segundos.');

    try {
      // Load script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      document.head.appendChild(script);

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Falha ao carregar Pyodide'));
      });

      const py = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
      });

      setPyodide(py);
      setOutput('✅ Python carregado! Clique em "Executar" para rodar seu código.');
    } catch (err) {
      setOutput('❌ Erro ao carregar Python. Tente recarregar a página.');
    } finally {
      setLoading(false);
    }
  }, [pyodide]);

  const runCode = async () => {
    if (!pyodide) {
      await loadPyodideRuntime();
      return;
    }

    setRunning(true);
    setOutput('');

    try {
      // Redirect stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      pyodide.runPython(code);

      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const stderr = pyodide.runPython('sys.stderr.getvalue()');

      setOutput(stdout || stderr || '(Nenhuma saída)');
    } catch (err: any) {
      setOutput(`❌ Erro:\n${err.message || err}`);
    } finally {
      setRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 code-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diferencial"
          title="Playground"
          highlight="Python ao vivo"
          subtitle="Isso não é uma simulação — é Python real rodando no seu navegador via WebAssembly (Pyodide)"
        />

        {/* Examples selector */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.label}
              onClick={() => {
                setActiveExample(i);
                setCode(ex.code);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeExample === i
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-500 font-mono">playground.py</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyCode}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
                title="Copiar código"
              >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
              <button
                onClick={() => {
                  setCode(EXAMPLES[activeExample].code);
                  setOutput('Aguardando execução...');
                }}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
                title="Resetar"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* Code Area */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              className="w-full min-h-[250px] p-6 bg-transparent text-green-300 font-mono text-sm leading-relaxed resize-y focus:outline-none"
              style={{ tabSize: 4 }}
            />
          </div>

          {/* Run Button */}
          <div className="px-4 py-3 border-t border-slate-700/50 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              {pyodide ? '🟢 Python pronto' : '🟡 Clique para carregar Python'}
            </span>
            <button
              onClick={runCode}
              disabled={running || loading}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all disabled:opacity-50 disabled:cursor-wait"
            >
              {running || loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {loading ? 'Carregando...' : 'Executando...'}
                </>
              ) : (
                <>
                  <Play size={16} />
                  Executar
                </>
              )}
            </button>
          </div>

          {/* Output */}
          <div className="border-t border-slate-700/50">
            <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-700/30">
              <span className="text-xs font-mono text-slate-400">📟 Saída / Console</span>
            </div>
            <pre className="p-6 font-mono text-sm text-slate-300 min-h-[100px] max-h-[300px] overflow-auto whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
