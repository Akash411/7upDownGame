import React, { useState } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import axios from "axios";
import BetOptions from "./components/BetOptions";
import ResultDisplay from "./components/ResultDisplay";

const API_URL = process.env.REACT_APP_API_URL; //https://7updown-game-server.vercel.app

function App() {
  const [points, setPoints] = useState(5000);
  const [betAmount, setBetAmount] = useState(null);
  const [betChoice, setBetChoice] = useState(null);
  const [diceResult, setDiceResult] = useState(null);
  const [gameMessage, setGameMessage] = useState("");

  const rollDice = async () => {
    if (!betAmount || !betChoice) {
      setGameMessage("Please select a bet amount and choice.");
      return;
    }

    try {
      console.log(`${API_URL}/roll-dice`, API_URL);
      const diceResponse = await axios.post(`${API_URL}/roll-dice`);
      const result = diceResponse.data.result;

      setDiceResult(result);

      const gameResponse = await axios.post(`${API_URL}/calculate-result`, {
        points,
        betAmount,
        betChoice,
        result,
      });

      setPoints(gameResponse.data.updatedPoints);
      setGameMessage(gameResponse.data.message);
    } catch (error) {
      console.error(error);
      setGameMessage("An error occurred. Please try again...");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        7 Up 7 Down Game
      </Typography>
      <Typography variant="h6">Points: {points}</Typography>
      <BetOptions setBetAmount={setBetAmount} setBetChoice={setBetChoice} />
      <Button
        variant="contained"
        color="primary"
        onClick={rollDice}
        style={{ margin: "15px 0 15px 0" }}
      >
        Roll Dice
      </Button>
      {diceResult && <ResultDisplay result={diceResult} />}
      {gameMessage && (
        <Typography
          variant="h6"
          dangerouslySetInnerHTML={{ __html: gameMessage }}
        ></Typography>
      )}
    </Container>
  );
}

export default App;
