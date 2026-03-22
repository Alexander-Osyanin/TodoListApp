import { TodoItem } from "./TodoItem";

export function TodoList({ todos, delTodo, togTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} delTodo={delTodo} togTodo={togTodo}/>
      ))}
    </div>
  );
}
