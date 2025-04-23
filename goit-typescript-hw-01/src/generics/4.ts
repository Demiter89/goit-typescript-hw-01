function identity<T>(value: T): T {
  return value;
}


const num = identity<number>(10); 
const str = identity<string>("Hello"); 
const bool = identity(true); 