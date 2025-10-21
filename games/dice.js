export const dice = () => {
    let isWin = false;
      const diceOne =  Math.floor(Math.random()*6)+1;
        const diceTwo = Math.floor(Math.random()*6)+1;
        if (diceOne+diceTwo==7 || diceOne+diceTwo==11){
            window.alert("ta yallaa");
            isWin= true;
        }else window.alert("ta ylagdlaa");
return {
    isWin,
    name: "dice",
    metadata: {
      shoo1: diceOne,
      shoo2: diceTwo,
    }
}
}