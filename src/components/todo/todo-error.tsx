import { AlertCircle } from "lucide-react";

interface TodoErrorProps {
  message: string;
}

export function TodoError({ message }: TodoErrorProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg">
      <AlertCircle className="h-5 w-5" />
      <div>
        <p className="font-semibold">Error</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
