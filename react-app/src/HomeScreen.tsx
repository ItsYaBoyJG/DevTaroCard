import { AdviceCard } from "./card";
import sampleDeck from "./sampleDeck";
import { useState } from "react";

export const HomeScreen = ()=> {
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
        <button className="btn">Create a Card</button>
        <button className="btn">💖 Like</button>
      </div>
    </main>
    );
}