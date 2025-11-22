export interface Skill {
  name: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
}

export interface Metric {
  value: string;
  label: string;
}