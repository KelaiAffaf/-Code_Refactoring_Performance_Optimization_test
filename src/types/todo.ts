export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export type TodosResponse = Todo[];

export type ToggleTodoParams = {
  id: number;
  completed: boolean;
};
