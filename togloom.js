//togloomin func uudee importljiin

import { rps } from "./games/rps.js";
import { number } from "./games/number.js";
import { word } from "./games/word.js";
import { dice } from "./games/dice.js";

//togloomiin func uudiig aguulsan object zarlaj
const games = {
  rps: rps,
  word: word,
  dice: dice,
  number: number
};
// togloomiin ur dung hadgalah array zarlaj bn
const resultArray = [];
// toglogdoj baigaa tolgoomin neriig hadgalah huwisagch
let currentGame = "";
const playGame = () => {
  //togloomiin ur dung hadgalah object huwisagch zarlaw
  let gameResult = {};

  if (currentGame) {
    gameResult = games[gameValue]();
  } else {
    const currentGame = window.prompt("Ymar togloom togloh we");

    gameResult = games[currentGame]();
  }

  resultArray.push(gameResult);

  const playAgain = window.prompt(
    "zogsooh 0, oor togloom togloh bol 1, dahin togloh bol 2"
  );

  if (playAgain === "0") {
    return resultArray;
  } else if (playAgain === "1") {
    currentGame = "";
    return playGame();
  } else if (playAgain === "2") {
    return playGame();
  }
};

playGame();