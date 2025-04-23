type Pair<T, U> = {
  first: T;
  second: U;
};


const pair1: Pair<number, string> = {
  first: 42,
  second: "answer",
};

const pair2: Pair<boolean, number[]> = {
  first: true,
  second: [1, 2, 3],
};