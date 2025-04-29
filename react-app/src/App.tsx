import React, { useState } from "react";
import duck from './assets/images/rubber-duck.jpg';
import evRImage from "./assets/images/ev-rev.jpg";
import love from "./assets/images/love-letter.jpg";
import "./App.css";
import { AdviceCard } from "./card";

const sampleDeck = [
  {
    title: "The Rubber Duck",
    message: "Explain your bug to an inanimate object. It will solve itself.",
    image: duck,
  },
  {
    title: "The Refactor",
    message: "You are tempted to rewrite. Sometimes evolution > revolution.",
    image: evRImage,
  },
  {
    title: "The Commit",
    message: "Commit messages are like love letters to your future self.",
    image: love,
  },
];

function App() {
  const [card, setCard] = useState<{ title: string; message: string; image:string; } | null>(
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
          <AdviceCard title={card.title} message={card.message}  image={card.image}/>
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
