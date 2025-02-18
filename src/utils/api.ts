import { ApiError, type ApiResponse } from "../types/api";
import type { Todo, TodosResponse, ToggleTodoParams } from "../types/todo";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError("API request failed", response.status, "API_ERROR");
    }

    const data: T = await response.json();
    return { data, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof ApiError
        ? error.message
        : "An unexpected error occurred";

    return { data: null, error: errorMessage };
  }
}

export const todoApi = {
  async getTodos(): Promise<ApiResponse<TodosResponse>> {
    return fetchApi<TodosResponse>("/todos");
  },

  async getTodoById(id: number): Promise<ApiResponse<Todo>> {
    return fetchApi<Todo>(`/todos/${id}`);
  },

  async toggleTodo({
    id,
    completed,
  }: ToggleTodoParams): Promise<ApiResponse<Todo>> {
    return fetchApi<Todo>(`/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed }),
    });
  },

  async createTodo(todo: Omit<Todo, "id">): Promise<ApiResponse<Todo>> {
    return fetchApi<Todo>("/todos", {
      method: "POST",
      body: JSON.stringify(todo),
    });
  },
};
