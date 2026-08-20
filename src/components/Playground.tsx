import { useState, useRef, useCallback } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Sparkles, Loader2, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PLAYGROUND_SNIPPETS } from '../data/portfolioData';

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<any>;
  }
}

export default function Playground() {
  const [selectedSnippetIdx, setSelectedSnippetIdx] = useState(0);
  const [code, setCode] = useState(PLAYGROUND_SNIPPETS[0].code);
  const [output, setOutput] = useState('Pronto para execução. Clique em "Executar Código" para rodar.');
  const [pyodide, setPyodide] = useState<any>(null);
  const [loadingPyodide, setLoadingPyodide] = useState(false);
  const [running, setRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [hasError, setHasError] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initPyodide = useCallback(async () => {
    if (pyodide) return pyodide;
    setLoadingPyodide(true);
    setOutput('⏳ Inicializando runtime do Python (Pyodide via WebAssembly)... Pode levar alguns segundos no primeiro carregamento.');
    try {
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        document.head.appendChild(script);
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Falha ao carregar script do Pyodide CDN'));
        });
      }

      const py = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
      });
      setPyodide(py);
      setOutput('✅ Pyodide carregado com sucesso! Clique em "Executar Código" para ver a saída.');
      setHasError(false);
      return py;
    } catch (err: any) {
      setOutput(`❌ Falha ao carregar ambiente Pyodide: ${err?.message || 'Verifique sua conexão'}`);
      setHasError(true);
      return null;
    } finally {
      setLoadingPyodide(false);
    }
  }, [pyodide]);

  const handleRunCode = async () => {
    let py = pyodide;
    if (!py) {
      py = await initPyodide();
      if (!py) return;
    }

    setRunning(true);
    setHasError(false);
    setOutput('Executando script...');
    const startTime = performance.now();

    try {
      // Setup stdout redirection
      py.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);
      py.runPython(code);
      const stdout = py.runPython('sys.stdout.getvalue()');
      const stderr = py.runPython('sys.stderr.getvalue()');
      const duration = performance.now() - startTime;
      setExecutionTime(Math.round(duration));

      if (stderr && stderr.trim()) {
        setOutput(`${stdout ? stdout + '\n' : ''}${stderr}`);
        setHasError(true);
      } else {
        setOutput(stdout || '(Script executado sem saída no stdout)');
        setHasError(false);
      }
    } catch (err: any) {
      const duration = performance.now() - startTime;
      setExecutionTime(Math.round(duration));
      setOutput(`❌ Erro de Execução (Traceback):\n${err?.message || err}`);
      setHasError(true);
    } finally {
      setRunning(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectSnippet = (idx: number) => {
    setSelectedSnippetIdx(idx);
    setCode(PLAYGROUND_SNIPPETS[idx].code);
    setOutput('Snippet carregado. Clique em "Executar Código".');
    setExecutionTime(null);
    setHasError(false);
  };

  const handleResetSnippet = () => {
    setCode(PLAYGROUND_SNIPPETS[selectedSnippetIdx].code);
    setOutput('Código redefinido para o snippet original.');
    setExecutionTime(null);
    setHasError(false);
  };

  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  return (
    <section id="playground" className="py-20 bg-slate-950/80 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="WebAssembly / Pyodide"
          title="Playground"
          highlight="Python ao Vivo"
          subtitle="Execute código Python real diretamente no seu navegador, sem simulações ou dependência de servidor externo."
        />

        {/* Snippet Picker Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PLAYGROUND_SNIPPETS.map((snippet, idx) => (
            <button
              key={snippet.id}
              type="button"
              onClick={() => handleSelectSnippet(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedSnippetIdx === idx
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {snippet.title}
            </button>
          ))}
        </div>

        {/* Editor & Console Container */}
        <div className="surface-card-static rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Editor Toolbar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 font-semibold flex items-center gap-1.5">
                <Terminal size={14} className="text-sky-400" />
                <span>playground.py</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 border border-slate-700/60 transition-colors"
                title="Copiar código"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>

              <button
                type="button"
                onClick={handleResetSnippet}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 border border-slate-700/60 transition-colors"
                title="Restaurar snippet"
              >
                <RotateCcw size={13} />
                <span>Restaurar</span>
              </button>
            </div>
          </div>

          {/* Code Editor Body */}
          <div className="grid lg:grid-cols-12 min-h-[360px] bg-slate-950">
            {/* Left: Code Area (7 cols) */}
            <div className="lg:col-span-7 flex border-b lg:border-b-0 lg:border-r border-slate-800 relative bg-slate-950">
              {/* Line Numbers */}
              <div className="select-none py-4 px-3 bg-slate-950/80 text-right text-slate-600 font-mono text-xs border-r border-slate-900 w-11 flex-shrink-0 leading-[1.6]">
                {lineNumbers.map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full p-4 bg-transparent text-sky-200 font-mono text-xs leading-[1.6] resize-none focus:outline-none focus:ring-0 selection:bg-sky-500/30"
                style={{ tabSize: 4 }}
              />
            </div>

            {/* Right: Output Console (5 cols) */}
            <div className="lg:col-span-5 flex flex-col bg-slate-950/90">
              <div className="px-4 py-2.5 bg-slate-900/70 border-b border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal size={13} />
                  <span>Console Output</span>
                </span>
                {executionTime !== null && (
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock size={11} className="text-sky-400" />
                    <span>{executionTime}ms</span>
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 overflow-auto font-mono text-xs leading-relaxed max-h-[300px] lg:max-h-none">
                <pre className={`whitespace-pre-wrap ${hasError ? 'text-rose-400' : 'text-emerald-300'}`}>
                  {output}
                </pre>
              </div>
            </div>
          </div>

          {/* Action Bar Footer */}
          <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs font-mono">
              {pyodide ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Runtime Python Pronto</span>
                </span>
              ) : loadingPyodide ? (
                <span className="inline-flex items-center gap-1.5 text-amber-400 animate-pulse">
                  <Loader2 size={13} className="animate-spin" />
                  <span>Carregando Pyodide WASM...</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>Python pronto para inicializar</span>
                </span>
              )}
            </div>

            <button
              id="playground-run-btn"
              type="button"
              onClick={handleRunCode}
              disabled={running || loadingPyodide}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
            >
              {running || loadingPyodide ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>{loadingPyodide ? 'Carregando Pyodide...' : 'Executando...'}</span>
                </>
              ) : (
                <>
                  <Play size={15} className="fill-slate-950" />
                  <span>Executar Código</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
