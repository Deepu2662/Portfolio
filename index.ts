export interface Project {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  year: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  tag: string;
  read: string;
  href?: string;
}

export interface SkillCategory {
  [category: string]: string[];
}
