// créer la grille
const taille = 16;

for(let i=0; i<taille;i++){
    for(let j=0; j<taille;j++){
        let monDiv = document.createElement("div");
        monDiv.innerHTML =  "&nbsp;";
        document.body.appendChild(monDiv);
        // ajouter un événement
        monDiv.addEventListener("click",function(){
            // récupération de la couleur
            let couleurSelectionnee = document.querySelector("input[type=color]").value;
            // let couleurSelectionnee = document.querySelector("#maCouleur").value;
            // let couleurSelectionnee = document.getElementById("maCouleur").value;
            // attribution de la couleur à la case
            monDiv.style.backgroundColor = couleurSelectionnee;
        })
    }
    let monBr = document.createElement("br");
    document.body.appendChild(monBr);
}