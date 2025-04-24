type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використовуємо Omit для створення типу Params, який містить усі властивості з Form, крім 'errors'
type Params = Omit<Form, 'errors'>;

// Функція, що використовує Params як параметр
function processFormData(params: Params) {
  // Тепер можна використовувати params замість Form, без поля errors
  console.log(params.email);
  console.log(params.firstName);
  console.log(params.lastName);
  console.log(params.phone);
}

// Приклад виклику функції з типом Params
const formData: Params = {
  email: 'example@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890'
};

processFormData(formData);
