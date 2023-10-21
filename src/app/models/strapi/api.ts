export interface WorkExperience {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  company: string;
  from: Date;
  to: Date;
  current: boolean;
  description: string;
  url?: string;
  tools?: Tool_Plain[];
}

export interface Project {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  description: string;
  codeUrl?: string;
  tools?: Tool_Plain[];
  imageUrl?: string;
  hostedUrl?: string;
}

export interface Tool_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  tool: string;
  work_experiences?: WorkExperience[];
  projects?: Project[];
}
