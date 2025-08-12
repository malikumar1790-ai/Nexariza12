export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  images: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface ProjectBuilderData {
  projectType: string;
  complexity: string;
  timeline: string;
  features: string[];
  requirements: string;
  budget: number;
}

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  completedDate?: string;
  paymentStatus: 'pending' | 'paid';
  paymentAmount: number;
}