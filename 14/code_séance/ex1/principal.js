// créer la grille
const taille = 20;

for(let i=0; i<taille;i++){
    for(let j=0; j<taille;j++){
        let monDiv = document.createElement("div");
        let nombreCase = Math.ceil(Math.random()*36);
        monDiv.innerText =  nombreCase;
        monDiv.style.backgroundColor = `hsl(${nombreCase * 10},100%,50%)`;
        // ajoute un événement
        monDiv.addEventListener("click",function(){
            let nombreCase = Math.ceil(Math.random()*36);
            monDiv.innerText =  nombreCase;
            monDiv.style.backgroundColor = `hsl(${nombreCase * 10},100%,50%)`;
        })
        document.body.appendChild(monDiv);
    }
    let monBr = document.createElement("br");
    document.body.appendChild(monBr);
}