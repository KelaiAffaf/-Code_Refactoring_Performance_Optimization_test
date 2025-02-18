import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/tailwind.css";
import { TodoList } from "./components/todo/todo-list";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Todo List</h1>
        <p className="text-gray-600 text-lg mt-2">
          Stay organized and productive!
        </p>
      </header>

      {/* Todo List Container */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <TodoList />
      </div>

      {/* Footer */}
      <footer className="mt-8 text-gray-500 text-sm text-center">
        Click on the Vite and React logos to learn more.
      </footer>
    </div>
  );
}

export default App;
