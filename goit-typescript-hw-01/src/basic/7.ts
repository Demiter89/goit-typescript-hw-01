
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; 
};

// Масив товарів
const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 1500,
    description: 'High performance laptop'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 800
  },
  {
    id: 3,
    name: 'Tablet',
    price: 600,
    description: 'Compact and powerful'
  }
];