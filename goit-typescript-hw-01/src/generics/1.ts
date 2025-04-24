import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function runExample() {
  const user = await fetchData<User>('https://jsonplaceholder.typicode.com/users/1');
  console.log('Fetched user:', user);
}

runExample();
