const is = document.getElementById("is");
const diceGameBtn = document.getElementById("dice");
const rpsGameBtn = document.getElementById("rps");
const numberGameBtn = document.getElementById("number");
const wordGameBtn = document.getElementById("word");
const backBtn = document.getElementById("back");
const diceRes = document.getElementById("diceres");
const rpsRes = document.getElementById("rpsres");
const numberRes = document.getElementById("numberres");
const wordRes = document.getElementById("wordres");
diceRes.innerText="Shoonii togloom: 0";
rpsRes.innerText="HaichChuluuDaavuu: 0";
numberRes.innerText="Too taah: 0";
wordRes.innerText="Ug taah: 0";
let isWin=1;  
const terminateGame=()=>{
    document.body.innerHTML=" ";
}
const games=[];
const word = () => {}
const number = () => {}
const rps = () => {}
const dice = () => {
    const diceGameRes=document.createElement("p")
    document.body.appendChild(diceGameRes);
      const diceOne =  Math.floor(Math.random()*6)+1;
        const diceTwo = Math.floor(Math.random()*6)+1;
        if (diceOne+diceTwo==7 || diceOne+diceTwo==11){
                diceGameRes.innerText=`Ta yallaa! ${diceOne} + ${diceTwo} = ${diceOne + diceTwo}`;
            diceRes.innerText=`Shoo taah: ${isWin++}`;
        }else diceGameRes.innerText=`Ta ylagdlaa! ${diceOne} + ${diceTwo} = ${diceOne + diceTwo}`;

}

diceGameBtn.addEventListener("click",()=>{
    const diceName=document.createElement("h1");
    diceName.innerText="Shoonii Togloom";
    document.body.appendChild(diceName);
    const playBtn=document.createElement("button");
    playBtn.innerText="Togloh";
    document.body.appendChild(playBtn);
    playBtn.addEventListener("click", dice)
});
rpsGameBtn.addEventListener("click",()=>{
    const rpsName=document.createElement("h1");
    rpsName.innerText="HaichChuluuDaavuu";
    document.body.appendChild(rpsName);
    const playBtn=document.createElement("button");
    playBtn.innerText="Togloh";
    document.body.appendChild(playBtn);
    playBtn.addEventListener("click", rps)
});
numberGameBtn.addEventListener("click",()=>{
    const numberName=document.createElement("h1");
    numberName.innerText="Too taah";
    document.body.appendChild(numberName);
    const playBtn=document.createElement("button");
    playBtn.innerText="Togloh";
    document.body.appendChild(playBtn);
    playBtn.addEventListener("click", number)
});
wordGameBtn.addEventListener("click",()=>{
    const wordName=document.createElement("h1");
    wordName.innerText="Ug taah";
    document.body.appendChild(wordName);
    const playBtn=document.createElement("button");
    playBtn.innerText="Togloh";
    document.body.appendChild(playBtn);
    playBtn.addEventListener("click", word)
});
backBtn.addEventListener("click",terminateGame);