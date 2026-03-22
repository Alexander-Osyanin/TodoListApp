import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useState } from "react";
import { Users } from "./Users";
import { Posts } from "./Posts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Позавтракать", done: false },
    { id: 2, text: "Погулять", done: false },
  ]);

  function addTodo(text) {
    const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]);
  }

  function delTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function togTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/users">Пользователи</Link>
      <Link to="/posts">Посты</Link>
      <Link to="/register">Форма регистрации</Link>
    </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TodoList todos={todos} delTodo={delTodo} togTodo={togTodo} />
              <TodoInput onAdd={addTodo} />
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
