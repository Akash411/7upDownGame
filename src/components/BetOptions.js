import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

const betAmounts = [100, 200, 500];
const betChoices = ["7 Down", "Lucky 7", "7 Up"];

const BetOptions = ({ setBetAmount, setBetChoice }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleAmountClick = (amount) => {
    setBetAmount(amount);
    setSelectedAmount(amount);
  };
  const handleChoiceClick = (choice) => {
    setBetChoice(choice);
    setSelectedChoice(choice);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h3>Select Bet Amount</h3>
        {betAmounts.map((amount) => (
          <Button
            key={amount}
            variant="contained"
            onClick={() => handleAmountClick(amount)}
            style={{
              margin: "5px",
              backgroundColor: selectedAmount === amount ? "teal" : "",
              color: selectedAmount === amount ? "white" : "",
            }}
          >
            {amount}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <h3>Select Bet Choice</h3>
        {betChoices.map((choice) => (
          <Button
            key={choice}
            variant="contained"
            onClick={() => handleChoiceClick(choice)}
            style={{
              margin: "5px",
              backgroundColor: selectedChoice === choice ? "teal" : "",
              color: selectedChoice === choice ? "white" : "",
            }}
          >
            {choice}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default BetOptions;
