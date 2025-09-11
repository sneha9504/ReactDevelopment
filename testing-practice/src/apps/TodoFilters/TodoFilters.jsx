import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoFilters() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const handleAdd = () => {
    // BUG #1 race: stale state
    setTodos([
      ...todos,
      { id: uuid(), title: text, completed: false },
      // duplicate may appear
    ]);
    setText("");
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const visible = {
    all: todos,
    active: todos.filter((t) => !t.completed),
    completed: todos.filter((t) => !t.completed), // BUG #2 predicate wrong
  }[filter];

  return (
    <div className="m-6 max-w-md">
      <div className="flex gap-2">
        <input
          className="flex-1 border px-2 py-1"
          placeholder="New todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-3"
          onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="flex gap-3 my-4">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            className={`px-2 ${
              filter === tab ? "font-bold underline" : ""
            }`}
            onClick={() => setFilter(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {visible.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2">
            {/* BUG #3 missing aria-label */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span
              className={
                todo.completed ? "line-through" : ""
              }>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
