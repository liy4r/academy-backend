const userInput = document.getElementById("text");
const btn = document.getElementById("pushbtn");
const play = () => {
    const userChoice = userInput.value.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Tentslee";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Yallaa";
    } else {
        result = "Ylagdlaa";
    }

    window.alert(`Computer chose: ${computerChoice}\n${result}`);
}
btn.addEventListener("click", play)