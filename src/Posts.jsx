import { useEffect, useState } from "react";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Компонент появился");
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadUsers();
  }, []);

  if (loading) {
    return <div>Загрузка</div>;
  } else {
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}
