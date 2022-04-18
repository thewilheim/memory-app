import React from "react";

function Score(props) {
  const { currentScore, highScore } = props;
  return (
    <div className="scoreCard">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {highScore}</p>
    </div>
  );
}

export default Score;
