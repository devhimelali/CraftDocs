export interface Document {
  id: string;
  title: string;
  date: string;
  parent?: string;
  order: number;
  author: string;
  category?: string;
  tags: string[];
}
