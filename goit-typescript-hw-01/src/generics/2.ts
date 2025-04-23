function getArray<T>(items: T[]): T[] {
  return [...items];
}


const numberArray = getArray<number>([1, 2, 3]);
const stringArray = getArray<string>(["a", "b", "c"]);
