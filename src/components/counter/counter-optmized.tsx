import React, { useState, useCallback, useRef, useEffect } from "react";

const Counter = React.memo(() => {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Counter component mounted");
  }, []);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Counter: <span className="text-blue-500">{count}</span>
      </h2>

      <button
        onClick={increment}
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Increment
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
});

export default Counter;
