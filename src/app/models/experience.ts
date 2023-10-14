export interface Experience {
  id: number;
  title: string;
  company: string;
  from: Date;
  to: Date;
  current: boolean;
  description: string;
  url: string;
  tools?: string[];
}
