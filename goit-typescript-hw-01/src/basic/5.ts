// Оголошуємо тип для користувача
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

// Типізуємо об'єкт user
const user: User = {
  name: 'John',
  age: 30,
  isAdmin: true,
};