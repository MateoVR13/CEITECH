

import type React from 'react';

export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  sectors: string[];
  imageUrl: string;
  icon: React.ReactNode;
  demoUrl?: string;
  impact?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Client {
  name: string;
  logoUrl: string;
  width: number;
  height: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
