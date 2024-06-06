import "./App.css";

import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

function Dice({ die1, die2 }) {
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  return (
    <div className="App">
      <center>
        <div className="container">
          <img
            style={{ width: "70px", height: "70px" }}
            className="square"
            src={diceImages[die1 - 1]}
            alt="dice 1"
          ></img>
          <div style={{ width: "5px", display: "inline-block" }}></div>
          <img
            style={{ width: "70px", height: "70px" }}
            className="square"
            src={diceImages[die2 - 1]}
            alt="dice 2"
          ></img>
        </div>
      </center>
    </div>
  );
}

export default Dice;
