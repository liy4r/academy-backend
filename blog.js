const a = document.getElementById("title");
const b = document.getElementById("content");
const c = document.getElementById("addBtn");
const d = document.getElementById("posts");
const post = () => {
d.innerHTML=" ";
const listA=document.createElement("li");
d.appendChild(listA);
const e = document.createElement("h3");
listA.appendChild(e);
const f = document.createElement("p");
d.appendChild(f);
             e.innerText=a.value;
                f.innerText=b.value;
}
c.addEventListener("click", post);