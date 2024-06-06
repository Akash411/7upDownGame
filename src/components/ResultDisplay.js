import React from "react";
import { Typography } from "@material-ui/core";

const ResultDisplay = ({ result }) => (
  <div>
    <Typography variant="h5">Dice Roll Result: {result}</Typography>
  </div>
);

export default ResultDisplay;
