type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// T обмежується ключами AllType
function compare<
  T extends Pick<AllType, 'name' | 'color'>,
  U extends Pick<AllType, 'position' | 'weight'>
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання
const result = compare(
  { name: 'Box', color: 'Red' },
  { position: 1, weight: 50 }
);

console.log('Compare result:', result);