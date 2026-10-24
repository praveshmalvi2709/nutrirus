export type ProductCategory = 'all' | 'juices' | 'meals' | 'wraps' | 'cleanses';

export interface Product {
  id: string;
  name: string;
  category: 'juices' | 'meals' | 'wraps' | 'cleanses';
  tagline: string;
  volumeOrWeight: string;
  price: number;
  ingredients: string[];
  highlights: string[];
  description: string;
  nutrition: {
    calories: number;
    protein: string;
    carbs?: string;
    fat?: string;
    vitamins: string[];
  };
  colorTheme: {
    bg: string;
    accent: string;
    border: string;
    tagBg: string;
    text: string;
  };
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
