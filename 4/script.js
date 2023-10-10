/*
INTRODUCTION

Dans cet exemple, le javascript a son propre fichier.js. Il est lié dans la page index.html via la balise <script>. L'attribut "src" de cette balise renseigne sur l'emplacement du script. Vous pouvez reproduire cette structure pour vos propres exercices. 

ELEMENTS THEORIQUES

Une fois que la page javascript est liée à la page HTML, nous pouvons recevoir des messages d'erreur via la console. Nous pouvons aussi "écrire" dans la console, en utilisant console.log et quelques variantes.

Ouvrez votre console et regardez comment les messages ci-dessous y apparaissent : */

console.log("Premier exemple");
console.log("Le nombre de la COVID : ", 19);
console.warn("Attention à la COVID !");
console.log("%cVoilà du texte géant vert", "color:green; font-family:monospace;font-size:22pt");

/*

ELEMENTS THEORIQUES


Pour ajouter des éléments à une page il y a toujours trois étapes : (i) créer un élément, (ii) le modifier (attributs, styles) et (iii) l'ajouter à la page */

// (i) créer un élément image avec createElement("nomBalise")
let monLien = document.createElement("a");

// (ii) modifier cet élément...

// ... en ajoutant un attribut avec .setAttribute("nomAttribut","valeurAttribut")
monLien.setAttribute("href","https://unil.ch");
// ... en le remplissant avec .innerHTML("texte ou html")
monLien.innerHTML = "Cliquez ici";
// ... en ajoutant à l'élément la classe CSS "couleurRouge" avec classList.add('nomClasse')
monLien.classList.add('couleurRouge')

// (iii) ajouter cet élément à la page
document.body.appendChild(monLien);
// notez que dans ce cas, il s'agit de la variable monLien, et non d'une chaîne de caractère : il n'y a donc pas de guillemets

/* AMPLIFICATION DE VOS CONNAISSANCES

Cherchez, via Devdocs ou via le MDN

- comment fonctionne removeChild() ?
- quelle est la différence entre innerHTML, textContent et innerText ?
- à quoi sert classList.toggle() ?
- à quoi sert classList.contains() ?

*/

/* APPLICATION DE VOS CONNAISSANCES I

Ajoutez à la page index.html, grâce au Javascript

1. un lien html
2. une image de votre choix
3. un paragraphe contenant la phrase "je déteste la COVID"
4. un "br"
5. changez la couleur du fond de la page en rouge
6. ajoutez une classe ".enBleu" au fichier CSS
7. liez cette classe au paragraphe sur la COVID
8. ajoutez une liste d'éléments à la page (une balise "ul" contenant 2 balises "li" contenant du texte)

*/

/* APPLICATION DE VOS CONNAISSANCES II

Sur la page de l'UNIL, via la console, utilisez les connaissances acquises jusqu'à présent (et la méthode length, sur laquelle vous allez vous renseigner) pour :

9. compter le nombre de liens sur la page
10. compter le nombre d'images sur la page

Puis

11. ajoutez une image de votre choix (cf. ci-dessus) au bas de la page
12. ajoutez un paragraphe de votre choix tout de suite après le div avec l'id "follow-hp" en vous servant de .querySelector() pour attraper le bon élément
13. lancez-vous un autre défi !

*/