import { useState } from "react";
import Input from "./components/Input/Input";

const App: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 2</p>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p className="text-gray-600 text-xl mt-5">You typed: {name}</p>
    </div>
  );
};

export default App;
