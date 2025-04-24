type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Тут могла б бути логіка оновлення
  console.log("Updating user with:", initialValues);
}

// Приклад оновлення лише частини полів
createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123'
});