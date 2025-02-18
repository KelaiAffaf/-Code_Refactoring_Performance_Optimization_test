"use client";

import { useState, useEffect } from "react";
import { todoApi } from "../../utils/api";
import { TodoItem } from "./todo-item";
import { TodoError } from "./todo-error";
import { LoadingSpinner } from "../reusable_components/loading-spinner";
import type { Todo } from "../../types/todo";

interface TodoItemsProps {
  currentPage: number;
  itemsPerPage: number;
  setTotalTodos: (count: number) => void;
}

export function TodoItems({
  currentPage,
  itemsPerPage,
  setTotalTodos,
}: TodoItemsProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTodos() {
      const { data, error } = await todoApi.getTodos();
      if (error) {
        setError(error);
      } else if (data) {
        setTodos(data as Todo[]);
        setTotalTodos(data.length);
      }
      setLoading(false);
    }
    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <TodoError message={error} />;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTodos = todos.slice(startIndex, endIndex);

  return (
    <ul className="divide-y divide-gray-200">
      {paginatedTodos.length > 0 ? (
        paginatedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={(id) =>
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === id ? { ...t, completed: !t.completed } : t
                )
              )
            }
          />
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">No todos found.</p>
      )}
    </ul>
  );
}
