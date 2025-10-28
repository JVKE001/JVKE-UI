import Tabs from "./components/Tabs/Tabs";

const App: React.FC = () => {
  const tabs = [
    {
      label: "Overview",
      content: "This is the Overview section — you can add summary info here.",
    },
    {
      label: "Features",
      content: "Here you can describe your product or app features.",
    },
    {
      label: "Pricing",
      content: "Simple and clear pricing information goes here.",
    },
  ];

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">
        Component Series · Day 9 (Tabs)
      </p>

      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
