// import { useState } from "react";
import Card from "./components/Card/Card";
import img from "./assets/img/img1.jpg";

const App: React.FC = () => {
  const onClick = () => {
    console.log("You clicked the card button")
  }
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <h1 className="mb-3 text-2xl font-bold">JVKE UI Library</h1>
      <p className="text-gray-600 text-xl mb-10">Component Series · Day 3</p>
      <Card
        imageUrl={img}
        title="My Card"
        description="I'm a reusable card component and it is Day 3 Series"
        buttonText="Button"
        onButtonClick={onClick}
      />
    </div>
  );
};

export default App;
