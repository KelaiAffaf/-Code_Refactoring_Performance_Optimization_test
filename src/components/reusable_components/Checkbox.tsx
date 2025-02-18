import { useState } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  className?: string;
  ariaLabel?: string;
}

export function Checkbox({
  id,
  checked,
  onCheckedChange,
  className,
  ariaLabel,
}: CheckboxProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onCheckedChange}
        className={`peer hidden`}
      />
      <label
        htmlFor={id}
        className={`flex h-5 w-5 items-center justify-center border-2 rounded-md transition-all cursor-pointer
          ${
            checked
              ? "bg-primary border-primary text-white"
              : "bg-white border-gray-300 hover:border-gray-400"
          }
          peer-focus:ring-2 peer-focus:ring-primary ${className}`}
        aria-label={ariaLabel}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </label>
    </div>
  );
}
