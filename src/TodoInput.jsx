import { useState } from "react";

export function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleClick() {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
}
