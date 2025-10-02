import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface InputProps {
  type?: "text" | "password" | "email" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter your name",
  value,
  onChange,
  disabled = false,
  className = "border border-gray-600 rounded md:rounded-xl p-2 w-full md:w-md shadow focus:outline-none",
}) => {
  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileFocus={{
        scale: 1.03,
        borderColor: "#3b82f6",
        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default Input;
