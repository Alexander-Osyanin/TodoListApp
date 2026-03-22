import { useEffect, useState } from "react";

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Компонент появился");
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
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
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
