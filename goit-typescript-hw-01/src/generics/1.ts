// Універсальна функція
function identity<T>(value: T): T {
  return value;
}

// Приклади використання
const numberResult = identity<number>(10);
const stringResult = identity<string>("Hello");
const booleanResult = identity<boolean>(true);
