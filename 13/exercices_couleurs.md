# Série d'execices tableaux et couleurs

## Exercice 1 - Grille de divs et couleurs aléatoires

1. En JS, créez une grille de 20x20 divs. Le contenu des divs est une valeur aléatoire entre 1 et 36. Appliquez-leur le CSS suivant :

```css
div {
  height: 25px;
  width: 25px;
  line-height: 25px;
  text-align: center;
  display: inline-block;
  border: 1px solid black;
}
```

2. Modifiez le code de l'exercice 1.1 pour attribuer une couleur de fond (en `hsl`) aux cases en fonction de leur valeur (si vous avez un doute, sur le fonctionnement du `hsl`, regardez la doc!).
3. Ajoutez un comportement aux divs. Lors d'un clic :
   1. Changez la valeur aléatoire contenue dans la div (avec, à nouveau, une valeur entre 1 et 36).
   2. Changez la couleur de fond de la div en fonction de sa nouvelle valeur.

## Exercice 2 - Pixel art

1. Dans le HTML, créez un `<input>` de type `"color"`.
2. Créez une grille de 16x16 divs. Le contenu des divs est `"&nbsp;"`. Appliquez-leur le CSS suivant :

```css
div {
  height: 25px;
  width: 25px;
  line-height: 25px;
  text-align: center;
  display: inline-block;
  border: 1px solid black;
  background-color: white;
}
```

3. Ajoutez un comportement à chaque div pour que, lors d'un clic, elle change de couleur pour la couleur sélectionnée dans l'input.

## (Avancé et optionnel) Exercice 3 - Matrice de données, bases démineur

1. Créez une variable `données` qui contient le tableau suivant :

```js
[
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
];
```

2. À l'aide de deux boucle, parcourez le tableau et affichez, successivement, les valeurs du tableau dans la console.
3. Créez une fonction, que l'on nommera `voisins` et qui prendra 3 arguments : `jeuDeDonnées`, `i`, `j`. Cette fonction doit retourner un tableau qui contient les cases voisines de la case se trouvant aux index `i` et `j`. Par exemple, avec `i` = 1 et `j` = 1, le tableau retourné par `voisins` serait `[1, 1, 0, 0, 0, 0, 0, 0]` (soit la valeur des cases `données[0][0]`, `données[0][1]`, `données[0][2]`, `données[1][0]`, `données[1][2]`, `données[2][0]`, `données[2][1]`, `données[2][2]`). Attention ! Les cases en bordure du jeu de données n'ont pas autant de voisins que les autres, il faudra gérer les exceptions avec des conditions.