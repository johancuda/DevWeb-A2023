# Exercices semaine 6

Pour la semaine prochaine :

1. Recréer la to-do list
2. Améliorer la présentation de cette liste
3. Changer le style du champ de texte (couleur, etc.)
```js
 let monChampTexte = document.querySelector("#champ_texte");
 monChampTexte.style.backgroundColor = "green"
```
4. Changer le style du bouton
```js
monBouton.style.border = "5px"
monBouton.style.backgroundColor = "yellow"
```
5. Ajouter un gradient (voir [linear-gradient CSS](https://www.w3schools.com/css/css3_gradients.asp)) au texte de la balise `<h1>`
```js
let monH1 = document.querySelector("h1");
monH1.style.backgroundImage = "linear-gradient(red, yellow)"
```
6. Ajouter un son différent au mouse over (remplacer 'cri' par 'explosion' dans le fichier js)
```js
let explosion = new Audio("https://cdn.freesound.org/previews/156/156031_2703579-lq.mp3")
```
7. Enlever les bullet points
```js
let ma_liste = document.querySelector('ul')
ma_liste.style.listStyleType = 'none'
```
8. Bonus : mettre des bullet points crânes
```js
ma_liste.style.listStyleImage = "url('le lien de votre image')"
```