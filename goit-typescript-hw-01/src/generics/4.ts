function identity<T>(value: T): T {
  return value;
}

// Приклади використання
const num = identity<number>(10); // 10
const str = identity<string>("Hello"); // "Hello"
const bool = identity(true); // TypeScript сам визначить тип: boolean
