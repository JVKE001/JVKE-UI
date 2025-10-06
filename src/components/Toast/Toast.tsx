import React from "react";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  id?: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  action,
}) => {
  // Auto close after duration
  React.useEffect(() => {
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Map icon for each type
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-100" />,
    error: <XCircle className="w-5 h-5 text-red-100" />,
    info: <Info className="w-5 h-5 text-blue-100" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-100" />,
  };

  // Background colors
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <motion.div
      className={`fixed top-4 left-1/2 -translate-x-1/2 ${colors[type]} 
      text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {icons[type]}
      <span className="font-medium">{message}</span>
      {action && (
        <button
          onClick={action.onClick}
          className="ml-2 underline text-sm text-white/90 hover:text-white"
        >
          {action.label}
        </button>
      )}
    </motion.div>
  );
};

export default Toast;
