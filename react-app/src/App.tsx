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
      <h1 className="App-header">Taroh Card</h1>
      {card ? (
        <>
          <AdviceCard title={card.title} message={card.message} />
          <button className="btn" id="card" onClick={drawCard}>
            Draw Another Card
          </button>
        </>
      ) : (
        <button className="btn" id="card" onClick={drawCard}>
          Draw a Card
        </button>
      )}

      <div className="row">
        <button className="btn">Create a Card</button>{" "}
        <button className="btn">💖 Like</button>
      </div>
    </main>
  );
}

export default App;
