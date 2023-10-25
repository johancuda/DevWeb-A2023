// mes variables utilisées dans tout le script
let cri = new Audio('https://cdn.freesound.org/previews/448/448751_6142149-lq.mp3');

// ajouter un addEventListener pour lier ma fonction
// à mon bouton
// 1. sélectionner l'élément
let monBouton = document.querySelector("#bouton_ajouter");
// 2. ajouter l'événement
monBouton.addEventListener("click",ajouterElement);

// créer une fonction qui
function ajouterElement(){
    // récupère la valeur du champ de texte
    // 1. séléctionner l'élément
    let monChampTexte = document.querySelector("#champ_texte");
    // 2. stocker la valeur dans une variable
    let valeurChamp = monChampTexte.value;
    // crée un élément li
    let elementLi = document.createElement("li");
    // y injecte la valeur du champ de texte
    elementLi.innerText = valeurChamp;
    // ajoute l'élément li dans le ul
    // 1. je dois sélectionner le ul
    // 2. je dois ajouter l'élément
    document.querySelector("ul").appendChild(elementLi);
    // vider le champ
    monChampTexte.value = "";
    // jouer un son
    cri.play();
}

// en passant la souris sur le h1
// un son doit s'enclencher

// il me faut donc ajouter un événement avec addEventListerner au BON élément
let monTitre = document.querySelector("h1");

monTitre.addEventListener("mouseover",jouerSon)

// créer la fonction jouer son
function jouerSon(){
    // jouer le son
    cri.play();
}