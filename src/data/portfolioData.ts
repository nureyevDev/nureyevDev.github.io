import { Certificate, CodeSnippet, Project, Skill, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Nureyev Alencar',
  role: 'Desenvolvedor Python & Estudante de Sistemas',
  shortBio: 'Estudante de Desenvolvimento de Sistemas no Senac, com foco em Python, APIs REST (Flask/FastAPI), SQL e automação. Apaixonado por código limpo e resolução de problemas.',
  location: 'Teresina, PI — Brasil',
  email: 'nureyev.dev@gmail.com',
  githubUser: 'nureyevDev',
  githubUrl: 'https://github.com/nureyevDev',
  linkedinUrl: 'https://www.linkedin.com/in/nureyev-alencar-108495418',
  status: 'Disponível para Estágio & Júnior',
  avatarUrl: 'https://avatars.githubusercontent.com/nureyevDev',
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'Python',
    category: 'backend',
    level: 'Intermediário',
    percentage: 85,
    iconName: 'python',
    highlight: true,
    description: 'POO, estruturas de dados, manipulação de arquivos, automação e scripts.',
  },
  {
    name: 'Flask & FastAPI',
    category: 'backend',
    level: 'Intermediário',
    percentage: 70,
    iconName: 'server',
    highlight: true,
    description: 'Construção de rotas REST, middlewares, validação de schemas e integração com banco.',
  },
  {
    name: 'SQL & Modelagem',
    category: 'database',
    level: 'Intermediário',
    percentage: 65,
    iconName: 'database',
    highlight: true,
    description: 'Consultas complexas, JOINs, PostgreSQL, SQLite e modelagem relacional.',
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Intermediário',
    percentage: 75,
    iconName: 'git',
    highlight: true,
    description: 'Controle de versão, branches, pull requests e boas práticas de commits.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Intermediário',
    percentage: 65,
    iconName: 'js',
    description: 'Manipulação de DOM, Promises, async/await e integração com APIs REST.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Intermediário',
    percentage: 80,
    iconName: 'layout',
    description: 'Semântica acessível, Flexbox, Grid e layouts responsivos.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Intermediário',
    percentage: 75,
    iconName: 'palette',
    description: 'Estilização ágil de interfaces modernas e consistentes.',
  },
  {
    name: 'Lógica & Algoritmos',
    category: 'fundamentals',
    level: 'Avançado',
    percentage: 85,
    iconName: 'cpu',
    highlight: true,
    description: 'Resolução de problemas, estruturas condicionais, laços e modularização.',
  },
  {
    name: 'Ciência de Dados & AI',
    category: 'fundamentals',
    level: 'Iniciante',
    percentage: 60,
    iconName: 'sparkles',
    description: 'Noções de Engenharia de Prompts com IA e análise de dados introdutória.',
  },
  {
    name: 'Linux & Terminal',
    category: 'tools',
    level: 'Intermediário',
    percentage: 70,
    iconName: 'terminal',
    description: 'Navegação em linha de comando, bash scripts e gerenciamento de pacotes.',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pyodide-playground',
    title: 'Python WebAssembly Playground',
    description: 'Ambiente interativo que compila e executa código Python real diretamente no navegador do usuário utilizando Pyodide e WebAssembly, sem necessidade de servidor backend.',
    detailedDescription: 'Integração de WebAssembly para executar scripts Python com captura de stdout/stderr, manipulação de saída em tempo real e catálogo de algoritmos para demonstração.',
    tags: ['Python', 'WebAssembly', 'Pyodide', 'React', 'TypeScript'],
    category: 'python',
    githubUrl: 'https://github.com/nureyevDev/nureyevDev.github.io',
    liveUrl: '#playground',
    featured: true,
    highlights: ['Execução no cliente via WASM', 'Captura de logs stdout/stderr', 'Carregamento assíncrono sob demanda'],
    language: 'Python / TS',
  },
  {
    id: 'logica-programacao-python',
    title: 'Lógica & Estruturas de Dados em Python',
    description: 'Repositório abrangente com exercícios, algoritmos clássicos, manipulação de coleções, matrizes e desafios de lógica de programação resolvidos em Python.',
    detailedDescription: 'Coleção modular cobrindo desde fundamentos até manipulação avançada de listas, tuplas, dicionários, recursão e funções de alta ordem.',
    tags: ['Python', 'Algoritmos', 'Data Structures', 'Clean Code'],
    category: 'python',
    githubUrl: 'https://github.com/nureyevDev/logica_programacao_python',
    featured: true,
    highlights: ['Mais de 50 algoritmos documentados', 'Testes e boas práticas', 'Funções modularizadas'],
    language: 'Python',
  },
  {
    id: 'caderno-engenharia-prompts',
    title: 'Caderno Temático — Engenharia de Prompts',
    description: 'Projeto explorando técnicas de Prompt Engineering com IA, sintetização de dados, fluxos de raciocínio estruturados e integração com ferramentas como NotebookLM.',
    detailedDescription: 'Estudo prático de como orquestrar modelos de linguagem, criar instruções de sistema de alto impacto e estruturar saídas JSON preditivas.',
    tags: ['AI / LLM', 'Prompt Engineering', 'NotebookLM', 'Documentação'],
    category: 'ai',
    githubUrl: 'https://github.com/nureyevDev/caderno-tematico-engenharia-prompts',
    featured: true,
    highlights: ['Técnicas Few-Shot e Chain-of-Thought', 'Integração com NotebookLM', 'Guia prático de engenharia'],
    language: 'Markdown / AI',
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-senac-dev',
    name: 'Desenvolvimento de Sistemas',
    issuer: 'Senac',
    year: '2026',
    hours: 'Em andamento',
    category: 'fundamentals',
  },
  {
    id: 'cert-python3',
    name: 'Python 3 — Do Básico ao Avançado',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '120h',
    category: 'python',
  },
  {
    id: 'cert-logica',
    name: 'Lógica de Programação',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '40h',
    category: 'fundamentals',
  },
  {
    id: 'cert-algoritmos',
    name: 'Algoritmos & Resolução de Problemas',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '40h',
    category: 'fundamentals',
  },
  {
    id: 'cert-sql',
    name: 'Banco de Dados & SQL Relacional',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '40h',
    category: 'database',
  },
  {
    id: 'cert-git',
    name: 'Git & GitHub — Controle de Versão Profissional',
    issuer: 'DIO',
    year: '2026',
    hours: '20h',
    category: 'fundamentals',
  },
  {
    id: 'cert-html-css',
    name: 'HTML5 & CSS3 — Design Responsivo',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '80h',
    category: 'web',
  },
  {
    id: 'cert-js',
    name: 'JavaScript Moderno (ES6+)',
    issuer: 'Curso em Vídeo',
    year: '2026',
    hours: '40h',
    category: 'web',
  },
  {
    id: 'cert-data-science',
    name: 'Introdução à Ciência de Dados com Python',
    issuer: 'DIO',
    year: '2026',
    hours: '30h',
    category: 'python',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'tl-1',
    type: 'education',
    title: 'Curso Técnico em Desenvolvimento de Sistemas',
    institution: 'Senac Brasil',
    period: '2026 — Presente',
    location: 'Teresina, PI',
    description: 'Formação técnica abrangendo ciclo completo de desenvolvimento de software, arquitetura orientada a objetos, banco de dados relacional, APIs e metodologias ágeis.',
    skills: ['Python', 'SQL', 'Lógica de Programação', 'Análise de Sistemas', 'Git'],
    status: 'Em andamento',
  },
  {
    id: 'tl-2',
    type: 'experience',
    title: 'Desenvolvedor Python & Autônomo',
    institution: 'Projetos Pessoais & Estudos Práticos',
    period: '2026 — Presente',
    location: 'Remoto / Teresina, PI',
    description: 'Construção de aplicações práticas, automação de rotinas, desenvolvimento de scripts com WebAssembly/Pyodide e aprofundamento em frameworks web como Flask e FastAPI.',
    skills: ['Flask', 'FastAPI', 'Pyodide', 'PostgreSQL', 'Automação'],
    status: 'Atual',
  },
  {
    id: 'tl-3',
    type: 'milestone',
    title: 'Especialização & Formações Complementares',
    institution: 'Curso em Vídeo · Digital Innovation One (DIO)',
    period: '2026',
    location: 'Online',
    description: 'Conquista de 9 certificações em tecnologias essenciais, consolidando bases em lógica, algoritmos, SQL, Git e desenvolvimento web.',
    skills: ['Python 3', 'SQL', 'Algoritmos', 'JavaScript', 'Git'],
    status: 'Concluído',
  },
];

export const PLAYGROUND_SNIPPETS: CodeSnippet[] = [
  {
    id: 'dev-profile',
    title: '🐍 Perfil do Desenvolvedor',
    category: 'POO',
    description: 'Demonstração de Programação Orientada a Objetos com classes e métodos.',
    code: `# Programação Orientada a Objetos em Python
class Desenvolvedor:
    def __init__(self, nome: str, stack: list[str], foco: str):
        self.nome = nome
        self.stack = stack
        self.foco = foco
        self.disponivel = True
        
    def apresentar(self) -> str:
        techs = ", ".join(self.stack)
        status = "🟢 Disponível para Estágio/Júnior" if self.disponivel else "🔴 Ocupado"
        return f"=== Perfil do Desenvolvedor ===\\nNome: {self.nome}\\nFoco: {self.foco}\\nStack: {techs}\\nStatus: {status}"

dev = Desenvolvedor(
    nome="Nureyev Alencar",
    stack=["Python", "Flask", "FastAPI", "SQL", "Git", "JavaScript"],
    foco="Python Backend & APIs"
)

print(dev.apresentar())
print(f"\\nTotal de tecnologias listadas: {len(dev.stack)}")
`,
  },
  {
    id: 'fibonacci',
    title: '🔢 Fibonacci & Métricas',
    category: 'Algoritmos',
    description: 'Geração da sequência de Fibonacci com análise estatística dos valores.',
    code: `# Cálculo de Fibonacci e análise estatística em Python
def gerar_fibonacci(n: int) -> list[int]:
    if n <= 0:
        return []
    if n == 1:
        return [0]
    seq = [0, 1]
    for _ in range(2, n):
        seq.append(seq[-1] + seq[-2])
    return seq

n_termos = 14
resultado = gerar_fibonacci(n_termos)

print(f"Sequência de Fibonacci ({n_termos} primeiros termos):")
print(resultado)
print(f"\\n--- Estatísticas ---")
print(f"• Soma total: {sum(resultado)}")
print(f"• Valor máximo: {max(resultado)}")
print(f"• Média aritmética: {sum(resultado)/len(resultado):.2f}")
print(f"• Números pares: {[x for x in resultado if x % 2 == 0]}")
`,
  },
  {
    id: 'data-analysis',
    title: '📊 Análise de Dados Simples',
    category: 'Dados',
    description: 'Processamento e filtragem de um conjunto de dados tabulares em memória.',
    code: `# Processamento de dados de repositórios e notas
dados_projetos = [
    {"projeto": "API Flask", "linguagem": "Python", "commits": 38, "nota": 9.5},
    {"projeto": "Playground WASM", "linguagem": "Python/TS", "commits": 45, "nota": 9.8},
    {"projeto": "Algoritmos & Estruturas", "linguagem": "Python", "commits": 60, "nota": 9.2},
    {"projeto": "Portal Web", "linguagem": "JavaScript", "commits": 22, "nota": 8.7},
]

total_commits = sum(p["commits"] for p in dados_projetos)
projetos_python = [p for p in dados_projetos if "Python" in p["linguagem"]]
media_notas = sum(p["nota"] for p in dados_projetos) / len(dados_projetos)

print(f"=== Relatório de Projetos ===")
print(f"Total de projetos analisados: {len(dados_projetos)}")
print(f"Total de commits: {total_commits}")
print(f"Média geral de qualidade: {media_notas:.2f}/10")
print(f"\\nProjetos com foco em Python ({len(projetos_python)}):")
for p in projetos_python:
    print(f"  → {p['projeto']} ({p['commits']} commits) - Nota: {p['nota']}")
`,
  },
  {
    id: 'list-comprehension',
    title: '⚡ List Comprehensions & Primos',
    category: 'Otimização',
    description: 'Filtragens expressivas e verificação de números primos com sintaxe idiomática.',
    code: `# Poder da sintaxe idiomática do Python
def eh_primo(num: int) -> bool:
    if num < 2:
        return False
    return all(num % i != 0 for i in range(2, int(num**0.5) + 1))

intervalo = range(1, 40)
primos = [n for n in intervalo if eh_primo(n)]
quadrados_primos = {n: n**2 for n in primos[:6]}

print(f"Números primos entre 1 e 40:")
print(primos)
print(f"\\nQuadrados dos primeiros primos:")
for num, quad in quadrados_primos.items():
    print(f"  {num}² = {quad}")
`,
  },
];
