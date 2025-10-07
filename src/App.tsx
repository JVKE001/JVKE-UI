import Tooltip from "./components/Tooltip/Tooltip";

const App = () => {
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 7</p>

      <Tooltip text="Delete item" position="top">
        <button className="p-2 bg-red-500 text-white rounded">🗑️</button>
      </Tooltip>
    </div>
  );
};

export default App;
