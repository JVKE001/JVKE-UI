import { useState } from "react";
import Toast from "./components/Toast/Toast";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 6</p>
      <button
        onClick={() => setShowToast(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>
      <AnimatePresence>
        {showToast && (
          <Toast
            message="This will disappear in 3 seconds!"
            type="success"
            // action={{
            //   label: "Undo",
            //   onClick: () => console.log("Undo clicked!"),
            // }}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
