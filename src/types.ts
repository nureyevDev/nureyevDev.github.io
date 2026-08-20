export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'tools' | 'database' | 'fundamentals';
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  percentage: number;
  iconName: string;
  highlight?: boolean;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  category: 'python' | 'web' | 'ai' | 'backend';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  language: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: 'Senac' | 'Curso em Vídeo' | 'DIO' | 'Outro';
  year: string;
  hours?: string;
  category: 'python' | 'web' | 'fundamentals' | 'database';
  credentialUrl?: string;
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'milestone';
  title: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
  status?: 'Concluído' | 'Em andamento' | 'Atual';
}

export interface CodeSnippet {
  id: string;
  title: string;
  category: string;
  description: string;
  code: string;
}
