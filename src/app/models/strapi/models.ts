export interface WorkExperience {
  id: number;
  attributes: {
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
    tools?: { data: Tool[] };
  };
}

export interface Project {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    description: string;
    codeUrl?: string;
    tools?: { data: Tool[] };
    imageUrl?: string;
    hostedUrl?: string;
  };
}

export interface Tool {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    name: string;
    work_experiences?: { data: WorkExperience[] };
    projects?: { data: Project[] };
  };
}
