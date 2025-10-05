import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an Option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="border rounded-xl p-2 min-w-[150px] text-left flex justify-between items-center"
      >
        <span>
          {options.find((opt) => opt.value === value)?.label || placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full border rounded-xl bg-white shadow-xl"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
