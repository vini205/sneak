const MENU = document.getElementById("menu");
const POPOUT = document.querySelector(".menu-popout");
const CLOSE = document.querySelector(".closepopout");
MENU.addEventListener("mousedown", ()=>{
    POPOUT.classList.add("appear-menu");
});
CLOSE.addEventListener("mouseup", ()=>{
    POPOUT.classList.remove("appear-menu");
});
const bolinhas = document.getElementsByClassName("bolinha");
for (const bolinha of bolinhas)//Caso for clicado troca o tenis apresentado
// parcel can't get images iniciated from this file
bolinha.addEventListener("click", ()=>{
    console.log(bolinha);
    let imgName = `${bolinha.id}.png`;
    console.log(imgName);
    let img = document.getElementById("tenis_img");
    img.src = `/img/tenis/${imgName}`;
    document.querySelector(".bolinha.selected").classList.remove("selected");
    bolinha.classList.add("selected");
    let nome_tenis = bolinha.id.replace("_", " ");
    img.alt = nome_tenis;
    document.getElementById("tenis_color").innerHTML = nome_tenis;
});

//# sourceMappingURL=index.9345d665.js.map
