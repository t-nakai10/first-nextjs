import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  )
}
