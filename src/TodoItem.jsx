export function TodoItem({ todo, delTodo, togTodo }) {
  return (
    <div>
      {todo.text}
      <button onClick={() => delTodo(todo.id)}>Удалить</button>
      <input type="checkbox" checked={todo.done} onChange={() => togTodo(todo.id)} />
    </div>
  )
}
