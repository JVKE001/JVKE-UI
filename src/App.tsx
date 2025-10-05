import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";

const App: React.FC = () => {
  const [country, setCountry] = useState("");

  const countries = [
    { label: "USA", value: "US" },
    { label: "UK", value: "UK" },
    { label: "Japan", value: "JP" },
  ];

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 5</p>
      <Dropdown
        options={countries}
        value={country}
        onChange={(val) => setCountry(String(val))}
        placeholder="Select a country"
      />
      <p className="mt-3">Selected: {country}</p>
    </div>
  );
};

export default App;
