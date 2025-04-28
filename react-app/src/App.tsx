import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AdviceCard } from "./card";

const sampleDeck = [
  {
    title: "The Rubber Duck",
    message: "Explain your bug to an inanimate object. It will solve itself.",
  },
  {
    title: "The Refactor",
    message: "You are tempted to rewrite. Sometimes evolution > revolution.",
  },
  {
    title: "The Commit",
    message: "Commit messages are like love letters to your future self.",
  },
];

function App() {
  const [card, setCard] = useState<{ title: string; message: string } | null>(
    null
  );

  const drawCard = () => {
    const random = sampleDeck[Math.floor(Math.random() * sampleDeck.length)];
    setCard(random);
  };

  return (
    <main className="App">
      <h1 >Taroh Card</h1>
      {card ? (
        <>
          <AdviceCard title={card.title} message={card.message} />
          <button onClick={drawCard}>Draw Another Card</button>
        </>
      ) : (
        <button onClick={drawCard}>Draw a Card</button>
      )}
    </main>
  );
}

export default App;
