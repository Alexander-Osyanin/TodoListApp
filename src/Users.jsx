import { useEffect, useState } from "react";

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Компонент появился");
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(error);
      }
    }
    loadUsers();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка загрузки: {error}</div>;
  } else {
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
