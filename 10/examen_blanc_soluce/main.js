const nombre = document.getElementById('nombreUtilisateur')
const bouton = document.getElementById('monBouton')
//Récupère "p" comme conteneur principal
const p = document.getElementById('main')
bouton.addEventListener('click', creer)

function creer() {  
    p.innerHTML = " "
    let dimension = nombre.value
    for(let ligne =0; ligne < dimension ; ligne++) {
        for(let colonne = 0; colonne < dimension ; colonne++) {
            let div = document.createElement("div");

            let valeur = Math.floor(Math.random()*60) + 1
            div.innerHTML = valeur
            if(valeur % 2 == 0 && valeur % 3 == 0){

                div.style.backgroundColor = "aquamarine"
            } else {
                div.style.backgroundColor = "salmon"
            }
            div.addEventListener('mouseover', function(){
                if(this.style.backgroundColor != "aquamarine") {
                    this.style.backgroundColor = "lightblue";
                }
            })
            // On peut donc appendChild directement dans "p" pour pouvoir le vider facilement
            p.appendChild(div)
        }
        let br = document.createElement('br');
        p.appendChild(br);
    }
}
