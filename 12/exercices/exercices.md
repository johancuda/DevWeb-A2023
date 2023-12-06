# Tableaux

(0. Créez tous les fichiers nécessaires pour faire fonctionner ce code.)

Reprenons la fonction matriceDiagonale vue en cours (avec quelques modifications):

```js
function matriceDiagonale(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('span');
            cell.addEventListener('mouseover', function(event){
            // ajouter ici une variable nombre_aleatoire
            event.target.innerHTML = nombre_aleatoire
          })
          cell.classList.add('cell');
          if (i === j || i === size - 1 - j) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}
```

Ainsi que le prompt et son appel:

```js
const tailleMatrice = prompt('Entrez la taille de la matrice :');
  if (tailleMatrice) {
    matriceDiagonale(tailleMatrice)
  }

```
(Indice: faites bien attention à l'endroit où vous injecterez vos modifications)
1. Modifiez la fonction matriceDiagonale en ajoutant un écouteur d'événement 'click' sur les cases de la diagonale. Cet événement change la couleur de fond de la case en blanc.
2. Observez l'événement 'mouseover' ajouté à la fonction d'origine:
    - à quoi sert 'event' en paramètre de la fonction?
    - à quoi sert event.target? (allez voir dans la doc)
    - déclarez, à l'endroit prévu à cet effet, une variable nombre_aleatoire qui contiendra un nombre aléatoire en 0 et 50 (à ce sujet voir [ce lien](https://www.w3schools.com/js/js_random.asp)).
3. En vous servant de la syntaxe `element_a_modifier.style.attribut_a_modifier = "..."`, modifiez les nombres aléatoires ajoutés dans les cellules pendant l'événement 'mouseover' de la manière suivante:
    - changez la taille de police
    - centrez le texte dans la cellule


