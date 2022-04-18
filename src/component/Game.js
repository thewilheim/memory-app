import { React, useEffect, useState } from "react";
import boardItems from "./BoardItems";
import Card from "./Card";
import uniqid from "uniqid";
import Score from "./Score";
import "../App.css";

function Game() {
  // sets the board to the array listed in the board item file
  const boards = boardItems;

  // setting up memory state
  const [memory, setMemory] = useState([]);

  // setting up score state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Shuffle the array to display random position
  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const b = Math.floor(Math.random() * (i + 1));
      const c = a[i];
      a[i] = a[b];
      a[b] = c;
    }
    return a;
  };

  const storeClickedItem = (id) => {
    if (memory.includes(id)) {
      setMemory([]);
      setScore(0);
    } else {
      setMemory(memory.concat(id));
      setScore((prevState) => prevState + 1);
    }
  };

  // change score and card position every time memory is updated with a new entry
  useEffect(() => {
    shuffleArray(boards);
  }, [memory]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Memory Game</h1>
      <Score currentScore={score} highScore={highScore} />
      <div className="gameContainer">
        {boards.map((board) => {
          return (
            <Card
              key={uniqid()}
              title={board.title}
              storeClickedItem={storeClickedItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
