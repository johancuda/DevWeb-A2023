let nombreDes = 5000;

// ajouter la fonction au bouton
document.querySelector("input").addEventListener("click",lancerDes);

function lancerDes(){
    for(let i =0 ; i< nombreDes; i++){
        // tirer un nombre aléatoire
        let nombreAlea = Math.floor(Math.random()*6)+1;
        // créer un paragraphe avec un style bien choisi
        let de = document.createElement("div");
        // si c'est un 6, c'est génial !
        if(nombreAlea === 6){
            de.classList.add("top");
        }
        de.innerText = nombreAlea;
        // ajouter à la page
        document.body.appendChild(de);        
    }
}