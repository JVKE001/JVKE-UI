import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title = "My Card",
  description = "I'm a reusable card component and it is Day 3 Series",
  imageUrl,
  buttonText = "Button",
  onButtonClick,
  className,
}) => {
  return (
    <motion.div
      className={`border border-black hover:shadow-2xl p-4 rounded-2xl max-w-[300px] md:max-w-sm flex flex-col cursor-pointer ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="rounded-xl mb-3" />
      )}

      <div className="flex items-center my-2">
        <hr className="flex-grow border-gray-300" />
        <h2 className={`px-2 text-2xl font-semibold text-center whitespace-nowrap truncate ${className}`}>
          {title}
        </h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      <p className={`text-md text-gray-700 line-clamp-2 ${className} `}>{description}</p>

      <motion.button
        onClick={onButtonClick}
        className="mt-3 p-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default Card;
