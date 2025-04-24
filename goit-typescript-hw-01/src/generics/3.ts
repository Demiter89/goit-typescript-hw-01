// src/generics/3.ts

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання
const merged = merge({ name: 'Alice' }, { age: 25 });
console.log('Merged:', merged);