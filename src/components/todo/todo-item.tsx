import { useState } from "react";
import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(todo.id);
  };

  return (
    <li
      className={`flex items-center gap-3 py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-all list-none`}
    >
      {/* Native Checkbox */}
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={isChecked}
        onChange={handleToggle}
        className="h-5 w-5 cursor-pointer border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
      />

      {/* Todo Title (Fixed Line-Through Issue) */}
      <label
        htmlFor={`todo-${todo.id}`}
        onClick={handleToggle}
        className={`flex-1 text-base font-medium cursor-pointer transition-all ${
          isChecked
            ? "line-through decoration-gray-500 text-gray-500"
            : "text-gray-900"
        }`}
      >
        {todo.title}
      </label>
    </li>
  );
}
