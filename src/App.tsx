import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/tailwind.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 ">
      <div className="flex gap-6 mb-6">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-20 w-20 transition-transform duration-300 hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-20 w-20 transition-transform duration-300 hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-md p-6 rounded-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
        >
          Count is {count}
        </button>
      </div>

      <p className="mt-6 text-gray-600">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
