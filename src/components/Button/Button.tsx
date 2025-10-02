import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Optional 'cuz I've a default value
  text?: string; // Optional 'cuz I've a default value
  onClick: () => void; // Required
  className?: string; // Optional
  size?: "sm" | "md" | "lg"; // Optional
  variant?: "solid" | "ghost" | "outline"; // Optional
}

// Use the interface in the component
const Button: React.FC<ButtonProps> = ({
  type = "submit",
  text = "Button",
  onClick,
  className = "btn",
  size,
  variant,
}) => {
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-1 text-base",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-2xl",
  };

  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    solid:
      "bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-lg shadow-blue-500/50",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  // Use a fallback size if size is undefined
  const appliedSize = size ? sizeClasses[size] : sizeClasses.md;

  const appliedVariant = variant
    ? variantClasses[variant]
    : variantClasses.solid;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${appliedSize} ${appliedVariant} ${className} border rounded-xl cursor-pointer`}
      whileHover={{ scale: 1.1 }} // grows on hover
      whileTap={{ scale: 0.95 }} // shrinks on click
      initial={{ opacity: 0, y: -10 }} // initial animation
      animate={{ opacity: 1, y: 0 }} // animate to this state
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
