const a = document.getElementById("title");
const b = document.getElementById("content");
const c = document.getElementById("addBtn");
const d = document.getElementById("posts");
const post = () => {
    const e = document.body.appendChild(document.createElement("h3"))
        const f = document.body.appendChild(document.createElement("p"))
             e.innerText=a.value;
}
c.addEventListener("click", post);