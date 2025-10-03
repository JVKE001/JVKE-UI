import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "My Modal",
  children,
  size = "md",
  className = "",
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 px-5 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.3 }}
        className={` bg-white rounded-xl shadow-lg w-full ${sizeClasses[size]} ${className}`}
      >
        {/* Header */}
        <div className="flex justify-between border-b px-6 py-3">
          {title && <h2 className="font-semibold text-xl">{title}</h2>}
          <button onClick={onClose}>
            <X size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4
        ">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
