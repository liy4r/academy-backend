export const rps = () => {
    let round = 0;
    let isWin;
const resultArray = [];

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const logic = {
  1: 3,
  2: 1,
  3: 2
};

const getStringValue = value => {
  if (value === 1) {
    return "haich";
  } else if (value === 2) {
    return "chuluu";
  }

  return "daawuu";
};


const printResult = (userValue, computerValue) => {
  const userStringValue = getStringValue(userValue);
  const computerStringValue = getStringValue(computerValue);

  return `user: ${userStringValue} computer: ${computerStringValue}`;
};

const startGame = () => {
  const userValueString = window.prompt("1 haich, 2 chuluu, 3 daawuu");

  const userValueInt = Number(userValueString);

  const computerValue = getRandomNumber();

  if (userValueInt > 3 || userValueInt < 0) {
    window.alert("Aldaatai utga!");
    startGame();
  }

  if (logic[userValueInt] === computerValue) {
    window.alert("User yallaa!" + printResult(userValueInt, computerValue));
   
  } else if (logic[computerValue] === userValueInt) {
    window.alert("Computer yallaa!" + printResult(userValueInt, computerValue));
   
  } else {
    window.alert("Tenstlee" + printResult(userValueInt, computerValue));
  }
};

startGame();

return{
    isWin,
    game: "rps",
    metadata:{
    uservalue: userValueInt,
    computervalue: computerValue
    }
}
}