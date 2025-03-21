export interface Image {
  id: number;
  src: string;
  description: string;
  name: string;
  link: string;
  srcModal?: string;
  descriptionModal?: string;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  images: Image[];
}
export interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  link: string;
  sections: Section[];
}
