// Récupération du bouton et de l'input créés en HTML
let b = document.querySelector('input[type="button"]');
let n = document.querySelector('input[type="number"]');

b.addEventListener('click', function() {
    // récupération de la valeur entrée par l'utilisateur.ice
    let nombre = n.value;
    // double boucle pour créer le tableau
    for(let i=0; i<nombre; i++) {
        // création de retours à la ligne pour le tableau
        let br = document.createElement('br');
        document.body.appendChild(br);
        for(let j=0; j<nombre; j++) {
            let div = document.createElement('div');
            if(i !== j) {
                // calcul de la somme répétée des index (par exemple pour la case (1,2) -> 3+2+1 = 6 ! le 3 est la somme des deux index, ici 1+2)
                let somme = 0;
                for(let k = 0; k <= i+j; k++){
                    somme += k;
                } 
                // Ajout de la somme dans la case
                div.textContent = somme;
            }
            else{
                div.textContent = "Z";
            }
            document.body.appendChild(div);
        }
    }
}); 