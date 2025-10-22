import Accordion from "./components/Accordion/Accordion";

const App = () => {
  const faqItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is TypeScript?",
      content: "TypeScript adds type safety and better tooling to JavaScript.",
    },
    {
      title: "What is Framer Motion?",
      content: "Framer Motion is a library for smooth animations in React.",
    },
  ];

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 8 (Accordion)</p>

      <Accordion items={faqItems} />
    </div>
  );
};

export default App;
