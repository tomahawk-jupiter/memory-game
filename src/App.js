import React, { useEffect, useState } from "react";
import data from "./data.js";
import shuffle from "./shuffle";
import "./style.css";
import Card from "./Card.js";

const App = () => {
  const [dataArray, setDataArray] = useState(data);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState(
    "When you play the Game of thrones, you win or you die..."
  );

  const playRound = (e) => {
    const person = e.target.id;

    if (selected.includes(person)) {
      setCurrScore(0);
      setSelected([]);
    } else {
      setCurrScore(currScore + 1);
      setSelected(selected.concat(person));
    }
  };

  useEffect(() => {
    setDataArray(shuffle(data));
    if (currScore === 16) {
      setMessage("You won the Game of Thrones!");
    } else if (currScore > bestScore) {
      setBestScore(currScore);
    }
  }, [currScore, bestScore]);

  return (
    <div className="App">
      <h1>{message}</h1>
      <div className="info">
        Click on every picture without repeating to win.
      </div>
      <div className="game-container">
        <div className="score">
          <h2>Score</h2>
          <h3>{currScore}</h3>
        </div>
        <div className="card-container">
          {dataArray.map((each) => {
            return (
              <Card
                key={each.key}
                id={each.key}
                img={each.img}
                name={each.name}
                playRound={playRound}
              />
            );
          })}
        </div>
        <div className="score">
          <h2>Best Score</h2>
          <h3>{bestScore}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
