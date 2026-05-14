export interface IProducts {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
}

export interface ICategory {
  slug: string;
  name: string;
  url: string;
}
