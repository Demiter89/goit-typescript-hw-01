function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Приклади використання
const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray("test"); // ["test"]
const booleanArray = wrapInArray(true); // [true]
