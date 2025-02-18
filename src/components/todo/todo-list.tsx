"use client";

import { useState } from "react";
import { TodoItems } from "./todo-items";

const ITEMS_PER_PAGE = 10;

export function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);

  const totalPages = Math.ceil(totalTodos / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-xl font-bold text-gray-800">Todo List</h2>
      </div>
      <div className="p-4">
        <TodoItems
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          setTotalTodos={setTotalTodos}
        />
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        <button
          onClick={handlePrev}
          disabled={currentPage <= 1}
          className={`px-4 py-2 rounded-md transition-all ${
            currentPage > 1
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-700 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages}
          className={`px-4 py-2 rounded-md transition-all ${
            currentPage < totalPages
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-700 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
