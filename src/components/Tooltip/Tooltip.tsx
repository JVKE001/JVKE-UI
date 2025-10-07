import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  children: React.ReactNode;
  className?: string; // ✅ Custom class
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  delay = 100,
  children,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            className={`absolute z-50 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-md ${className} ${
              position === "top"
                ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                : position === "bottom"
                ? "top-full mt-2 left-1/2 -translate-x-1/2"
                : position === "left"
                ? "right-full mr-2 top-1/2 -translate-y-1/2"
                : "left-full ml-2 top-1/2 -translate-y-1/2"
            }`}
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
