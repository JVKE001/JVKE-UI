import Button from "./components/Button/Button";

const App: React.FC = () => {
  // Click the handler function
  const handleClick = () => {
    console.log("Button is clicked!");
  };
  return (
    <div className="p-10">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 1</p>
      <Button
        text="Click Me"
        type="button"
        onClick={handleClick}
        size="md"
        variant="outline"
      />
    </div>
  );
};

export default App;
