// Створюємо інтерфейс для адреси
interface Address {
  city: string;
  country: string;
}

// Створюємо інтерфейс User
interface User {
  name: string;
  age: number;
  email: string;
  address?: Address; // поле необов’язкове
}

// Типізуємо об'єкти
const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const poly: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com'
};