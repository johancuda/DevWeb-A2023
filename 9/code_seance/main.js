// EVENEMENTS
// Etape 1 : sélectionner un élément sur lequel on attend un événement
let paragraphe = document.querySelector("p#lorem");

// Etape 2 : ajouter un écouteur d'événements, qui prend en paramètre :
// 1. l'événement à écouter (dans ce cas, un passage de la souris)
// 2. une fonction à executer quand l'événement a eu lieu
paragraphe.addEventListener("mouseover", changerCouleurTexte);

// Etape 3 : écrire la fonction à executer après l'événement
// Paramètre "evenement" (nom de variable), correspond à l'événement qui vient d'avoir lieu
function changerCouleurTexte(evenement) {
  // evenement.target correspond à l'élément sur lequel l'événement a eu lieu
  let cible = evenement.target;
  cible.style.color = "red";
}