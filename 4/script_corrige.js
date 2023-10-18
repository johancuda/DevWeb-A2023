/*
CORRIGÉ

Pour visualiser les effets de ce corrigé, n'oubliez pas de changer dans index.html le fichier .js lié dans la balise <script>.


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
Enlève un noeud et le retourne.
- quelle est la différence entre innerHTML, textContent et innerText ?
innerText: retourne texte avec CSS
innerHTML : est inteprété comme du HTML
textContent: retourne texte de tous les child nodes
- à quoi sert classList.toggle() ?
activer / désactiver une classe
- à quoi sert classList.contains() ?
Retourne true si classlist contient une classe

*/

/* APPLICATION DE VOS CONNAISSANCES I

Ajoutez à la page index.html, grâce au Javascript

1. un lien html
*/

let monLien2 = document.createElement('a')

monLien2.setAttribute("href","https://github.com");

monLien2.innerHTML = "Deuxième lien"

document.body.appendChild(monLien2);

/*
2. une image de votre choix
*/

let monImage = document.createElement('img')

monImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");

document.body.appendChild(monImage);

/*
3. un paragraphe contenant la phrase "je déteste la COVID"
*/

let monParagraphe = document.createElement('p')

monParagraphe.innerHTML = "je déteste la COVID"

document.body.appendChild(monParagraphe);

/*
4. un "br"
*/

let monBr = document.createElement('br')

document.body.appendChild(monBr);

/*
5. changez la couleur du fond de la page en vert
*/

let body = document.querySelector('body')

body.style.backgroundColor = "green"

/*
6. ajoutez une classe ".enBleu" au fichier CSS

Voir style.css

7. liez cette classe au paragraphe sur la COVID
*/

monParagraphe.classList.add('enBleu')
// Ne pas oublier ici de appendChild() à nouveau sinon les modifications ne seront pas visibles!
document.body.appendChild(monParagraphe)

/*
8. ajoutez une liste d'éléments à la page (une balise "ul" contenant 2 balises "li" contenant du texte)
*/
let liste = document.createElement('ul')

let el1 = document.createElement('li')
let el2 = document.createElement('li')
el1.innerText = "salut"
el2.innerHTML = "hello"
// Ici append() permet d'ajouter plusieurs éléments en même temps
liste.append(el1, el2)

document.body.appendChild(liste)
/*
*/

/* APPLICATION DE VOS CONNAISSANCES II

Sur la page de l'UNIL, via la console, utilisez les connaissances acquises jusqu'à présent (et la méthode length, sur laquelle vous allez vous renseigner) pour :

9. compter le nombre de liens sur la page
*/
let nbr_liens = document.querySelectorAll('a').length
console.log("nombre de liens : " + nbr_liens)
/*

10. compter le nombre d'images sur la page
*/
let nbr_images = document.querySelectorAll('img').length
console.log("nombre de images : " + nbr_images)
/*

Puis

11. ajoutez une image de votre choix (cf. ci-dessus) au bas de la page

let monImage = document.createElement('img')

monImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");

document.body.appendChild(monImage);

12. ajoutez un paragraphe de votre choix tout de suite après le div avec l'id "follow-hp" en vous servant de .querySelector() pour attraper le bon élément

let target_div = document.querySelector('#follow-hp')
let paragraphe = document.createElement('p')
paragraphe.innerHTML = "JS c'est cool"
target_div.appendChild(paragraphe)

13. lancez-vous un autre défi !

Show me what you got!!

*/

