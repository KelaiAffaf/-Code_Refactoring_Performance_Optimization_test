export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};

export class ApiError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = "ApiError";
  }
}
