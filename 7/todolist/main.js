// créer un bouton
let el_bouton = document.createElement("input");
el_bouton.setAttribute("type","button");
el_bouton.setAttribute("value","ajouter");
el_bouton.addEventListener("click",ajouter)
el_bouton.id = "bouton";
document.body.appendChild(el_bouton);

// creér un champ de texte
let el_champ_texte = document.createElement("input");
el_champ_texte.setAttribute("type","text");
el_champ_texte.id = "texte";
document.body.appendChild(el_champ_texte);

// créer un bouton tout effacer
let el_bouton_te = document.createElement("input");
el_bouton_te.setAttribute("type","button");
el_bouton_te.setAttribute("value","tout effacer");
el_bouton_te.addEventListener("click",tout_effacer)
el_bouton_te.id = "tout_effacer";
document.body.appendChild(el_bouton_te);

// créer les éléments qui ne doivent l'être qu'une seule fois
// créer un ul
let el_ul = document.createElement("ul");
el_ul.classList.add("liste");
document.body.appendChild(el_ul);

// créer les éléments doivent s'enclencher plusieurs fois (éléments de liste)
// à placer dans une fonction
function ajouter(){
    let alias_txt = document.querySelector("#texte");
    // récupérer la valeur du champ de texte
    let valeur = alias_txt.value;

    // avant toute chose, vérifier s'il y a bien
    // quelque chose dans le champ de texte !
    // si valeur n'est pas égal à vide
    if(valeur !== ""){
        // ajouter un élément de liste
        let el_li = document.createElement("li");
        // ajouter la valeur
        el_li.innerText = valeur;
        // ajouter cet élément à la page
        document.querySelector("ul").appendChild(el_li);
        // effacer le champ de texte
        alias_txt.value = "";
    }
    else{
        alert("Je ne peux pas ajouter du vide !")
    }
}

function tout_effacer(){
    let tous_les_li = document.querySelectorAll("li");
    // tous_les_li contient plusieurs éléments !
    // il faut donc passer à une logique de boucle !
    // initialiser un compteur qui va de 0 à la longueur du tableau
    // en évoluant de 1 à chaque fois (notre manière de compter)
    for(let compteur = 0;compteur < tous_les_li.length; compteur++){
        // enlève l'élément que tu inspectes
        // celui qui a le numéro du compteur
        tous_les_li[compteur].remove();
    }
}

/*
// TOUT CE QUE VOUS DEVEZ SAVOIR SUR LES TABLEAUX
// créer un tableau
let monTableau = []
// ajouter une valeur *à la fin* d'un tableau
monTableau.push("Salut");
monTableau[monTableau.length] = "Salut 2";
// ajouter une valeur à un endroit particulier
// je dois utiliser l'index et donner le numéro
monTableau[50000] = "Hello";
// modifier la prmeière valeur dans un tableau
monTableau[0] = "autre valeur";

// les boucles
// utiliser une boucle
// en pseudoCode
// for(je commence à compter à combien ?; quelle est la condition qui me permet de continuer ? (TANT QUE); comment est-ce que je fais évoluer le compteur entre chaque instruction ?){le code a exécuter à chaque fois}
for(let compteur = 0; compteur < 100; compteur++){
    // affiche la valeur courante de compteur
    console.log(compteur)
}
// ceci est la boucle la plus générique que vous puissiez coder en JS : après il y a des boucles spécialisées

// LES CONDITIONS
let nombre = 10;
if(nombre < 20){ // opérateur qui teste la condition
    alert("Plus petit que vingt")
}
else if (nombre === 20){
    alert("Egal à 20")
}
else if (nombre === 21){
    alert("Egal à 20")
}
else {
    alert("Supérieur à 21")
}

// si je ne suis pas trop fatigue, qu'il ne pleut pas et qu'il me reste au moins vingt francs, on va à la piscine
let pas_trop_fatigue = true;
let il_ne_pleut_pas = true;
let argent_restant = 24;

if(pas_trop_fatigue && il_ne_pleut_pas && argent_restant >= 20){
    // aller à la piscine
}

// QUELQUES OPERATEURS
// < : plus petit que
// <= : plus petit ou égal
// === : égal à

*/

/* les objets */
let monObjet = {}
monObjet.propriete = 15

let personne = {}
personne.prenom = "Erika"
personne.nom = "Bauer"
personne.age = 35
personne.surnoms = ["Ellie","Ettie"];
personne.numerosTelephone = [
    {prive : "02334343545"},
    {bureau : "02332434343"}
]