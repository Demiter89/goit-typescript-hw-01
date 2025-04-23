function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray("test"); // ["test"]
const booleanArray = wrapInArray(true); // [true]
