import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 4</p>

      {/* Open Modal Button */}
      <Button
        text="Open Login Modal"
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      />

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Login">
        <Input
          type="email"
          placeholder="Enter your email"
          className="border p-2 mb-3 w-full rounded"
          required
        />
        <Input
          type="password"
          placeholder="Enter your password"
          className="border p-2 mb-3 w-full rounded"
          required
        />
        <Button text="Login" type="submit" className="w-full" />
      </Modal>
    </div>
  );
};

export default App;
