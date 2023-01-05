import React from "react";

const actions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
};

function Computer() {
    const keys = Object.keys(actions);
    const index = Math.floor(Math.random() * keys.length);
  
    return keys[index];
  }
 
export default Computer;