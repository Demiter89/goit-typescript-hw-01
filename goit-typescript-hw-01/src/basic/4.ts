/ Функція, яка нічого не повертає => тип повернення void
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка ніколи нічого не повертає, бо завжди кидає помилку => тип never
function customError(): never {
  throw new Error('Error');
}