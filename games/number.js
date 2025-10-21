export const number = () => {
    const randomNumber = Math.floor(Math.random()*10)+1;
    console.log(randomNumber);
    let isWin= false;
    const numberArray=[];
    let userValue;
    for (let i=0; i<3 ;i++){
    userValue = Number(window.prompt("1-10 hutel too taagaarai"));
    numberArray[i]=userValue;
        if (userValue===randomNumber){
            window.alert("ta zuv taalaa");
            isWin=true;
            break;
        }else if (userValue>randomNumber){
            window.alert("ih baina");
        }else window.alert("baga baina");
} 
    return {
    isWin,
    game: "number",
    metadata: {
      numbers: numberArray 
    }
  };
};