export interface Document {
  id: string;
  path: string;
  title: string;
  content: string;
  children?: Document[];
}
