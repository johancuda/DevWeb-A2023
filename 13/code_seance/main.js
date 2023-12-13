for(let i = 0; i<10; i++){
    creerMatrice(i+1,20)
}

creerTableauLigneColonne(2,20,15)

function creerTableauLigneColonne(ligne,colonne,hauteurCase){
    for (let i = 0; i < ligne; i++) {
        // première zone qui s'exécutera 4 fois
        for (let j = 0; j < colonne; j++) {
            // zone qui s'exécutera 16 fois
            let de = document.createElement("div");
            de.innerHTML = Math.ceil(Math.random()*6);
            de.addEventListener("mouseover",function(e){
                // le addEventListener retourne un événement de survol
                // pour atteindre l'élément, il nous faut la propriété "target"
                if(e.target.innerHTML %2 === 0){
                    e.target.style.color = "red";
                }
                else{
                    e.target.style.color = "yellow";
                }
                e.target.innerHTML = "X";
                //e.style.color = "red";
            });
            de.style.height = `${hauteurCase}px`; // définition de style en JS
            document.body.appendChild(de);
        }
        // deuxième zone qui s'exécutera 4 fois
        let retourALaLigne = document.createElement("br");
        document.body.appendChild(retourALaLigne);
    }
    let retourALaLigne = document.createElement("br");
    document.body.appendChild(retourALaLigne);
}

function creerMatrice(tailleMatrice,hauteurCase){
    for (let j = 0; j < tailleMatrice; j++) {
        // première zone qui s'exécutera 4 fois
        for (let i = 0; i < tailleMatrice; i++) {
            // zone qui s'exécutera 16 fois
            let de = document.createElement("div");
            de.innerHTML = Math.ceil(Math.random()*6);
            de.addEventListener("mouseover",function(e){
                // le addEventListener retourne un événement de survol
                // pour atteindre l'élément, il nous faut la propriété "target"
                if(e.target.innerHTML %2 === 0){
                    e.target.style.color = "red";
                }
                else{
                    e.target.style.color = "yellow";
                }
                e.target.innerHTML = "X";
                //e.style.color = "red";
            });
            de.style.height = `${hauteurCase}px`; // définition de style en JS
            document.body.appendChild(de);
        }
        // deuxième zone qui s'exécutera 4 fois
        let retourALaLigne = document.createElement("br");
        document.body.appendChild(retourALaLigne);
    }
    let retourALaLigne = document.createElement("br");
    document.body.appendChild(retourALaLigne);
}

let elementHello = document.querySelector("p");
elementHello.style.color = "hsl(150, 50%, 50%)";