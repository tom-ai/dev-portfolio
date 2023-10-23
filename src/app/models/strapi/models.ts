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
    image?: { data: Media };
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

export interface Media {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: MediaFormat;
      small: MediaFormat;
      medium: MediaFormat;
      large: MediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}
