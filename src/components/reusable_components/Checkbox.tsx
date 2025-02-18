import { useState } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (newCheckedState: boolean) => void; // Passes updated state to parent
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
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheckedChange(newCheckedState); // Send updated state to parent
  };

  return (
    <div className="relative flex items-center">
      {/* Hidden Input for Accessibility */}
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className="hidden peer"
      />

      
      <label
        htmlFor={id}
        className={`flex h-6 w-6 items-center justify-center border rounded-md cursor-pointer transition-all
          ${
            isChecked
              ? "bg-blue-500 border-blue-500 text-white"
              : "bg-white border-gray-300 hover:border-gray-400"
          }
          peer-focus:ring-2 peer-focus:ring-blue-300 shadow-sm hover:shadow-md ${className}`}
        aria-label={ariaLabel}
        onClick={handleChange} 
      >
       
        <span
          className={`block h-3 w-3 rounded-sm transition-all ${
            isChecked ? "bg-white" : "bg-transparent"
          }`}
        />
      </label>
    </div>
  );
}
