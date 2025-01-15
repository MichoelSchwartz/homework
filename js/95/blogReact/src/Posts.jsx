import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from './Post';

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setPosts(result);
      }
      catch (e) {
        console.error(e);
      }
    })();
  }, [id])

  return (
    <>
      {posts?.map(p => <Post key={p.id} post={p} />)}
    </>
  )
}
 