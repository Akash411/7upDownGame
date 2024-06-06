import React from "react";
import { Grid, Button } from "@material-ui/core";

const betAmounts = [100, 200, 500];
const betChoices = ["7 Down", "Lucky 7", "7 Up"];

const BetOptions = ({ setBetAmount, setBetChoice }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <h3>Select Bet Amount</h3>
      {betAmounts.map((amount) => (
        <Button
          key={amount}
          variant="contained"
          onClick={() => setBetAmount(amount)}
          style={{ margin: "5px" }}
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
          onClick={() => setBetChoice(choice)}
          style={{ margin: "5px" }}
        >
          {choice}
        </Button>
      ))}
    </Grid>
  </Grid>
);

export default BetOptions;
