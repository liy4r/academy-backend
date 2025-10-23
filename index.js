const a = document.getElementById("email");
const b = document.getElementById("password");
const c = document.getElementById("login")
const d = document.getElementById("is")
const check = () => {
    if (a.value==="email@gmail.com", b.value==="password"){
        d.innerText = "Amjilttai nevterlee";
    } else 
    d.innerText = "Buruu";
}
login.addEventListener("click", check)