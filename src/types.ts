export interface Image {
  id: number;
  src: string;
  description: string;
  descriptionKey?: string;
  name: string;
  link: string;
  srcModal?: string;
  descriptionModal?: string;
  descriptionModalKey?: string;
}

export interface Section {
  id: number;
  title: string;
  titleKey?: string;
  description: string;
  descriptionKey?: string;
  images: Image[];
}
export interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  descriptionKey?: string;
  link: string;
  sections: Section[];
}
