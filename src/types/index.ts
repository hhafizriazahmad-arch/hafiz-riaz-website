export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Web Design' | 'Digital Product' | 'Creative Tech' | 'Brand Systems';
  year: string;
  summary: string;
  description: string;
  role: string;
  deliverables: string[];
  techStack: string[];
  featured: boolean;
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  skills: string[];
}

export interface HighlightItem {
  metric: string;
  label: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  inquiryType: 'general' | 'project' | 'collaboration' | 'advisory';
  message: string;
}
