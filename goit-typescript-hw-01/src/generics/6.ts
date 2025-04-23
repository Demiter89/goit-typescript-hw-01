async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: T = await response.json();
  return data;
}


type Post = {
  id: number;
  title: string;
  body: string;
};

fetchData<Post>('https://jsonplaceholder.typicode.com/posts/1')
  .then(post => {
    console.log(post.title);
  })
  .catch(error => {
    console.error(error);
  });
