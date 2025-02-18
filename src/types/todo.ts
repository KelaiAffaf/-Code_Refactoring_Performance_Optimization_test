export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export type TodoError = {
  message: string;
  code?: string;
};
