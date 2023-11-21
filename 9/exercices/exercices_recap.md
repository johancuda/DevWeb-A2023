# Série de révision

## Interactions avec le DOM

1. Créez un fichier `index.html` minimal.

2. Depuis un fichier `main.js` , créez les éléments suivants:

- une balise image contenant l'image de votre choix
- un paragraphe contenant un texte aléatoire

3. Créez dans votre fichier `index.html` un bouton avec un attribut `id` que vous nommerez "bouton" (pensez à regarder la documentation si vous avec des doutes!).

4. Récupérez ce bouton depuis votre fichier `main.js` en utilisant la méthode `querySelector()` et un sélecteur CSS (ou bien en utilisant la méthode `getElementById()`).

5. Avancé: Ajoutez à ce bouton un événement `click` qui appelle une fonction qui change la couleur de fond de votre page en _bleu_ .

6. Avancé: Créez un fichier `style.css` qui contiendra une classe "rotation" et qui permettra de faire pivoter un élément d'un certain angle (voir : docu rotate() css).

7. Bonus: Ajoutez à l'image créée en 1. un événement `mouseover` (si vous ne connaissez pas cet événement, consultez la documentation, j'ai l'impression de me répéter...) qui appelle un fonction `rotation()` qui ajoutera à l'image la classe CSS créée en 6. .


## Boucles et conditions

1. Créez une variable `notes` qui contient un tableau avec les valeurs suivantes : `2.5, 4, 5, 6, 6, 5.5, 3.5`.

   1. À l'aide d'une boucle, écrivez successivement chaque chiffre du tableau _dans la console_.

   2. Créez une variable `somme` qui vaut `0`. À l'aide d'une boucle, parcourez le tableau et, à chaque tour de la boucle, additionnez la valeur courante du tableau à `somme`. À la fin, `somme` devrait valoir la somme de toutes les valeurs (soit `32.5`).

   3. Affichez la moyenne des valeurs du tableau _dans la console_.

2. Créez une variable `chiffres` qui contient un tableau avec les valeurs suivantes : `2, 4, 7, 12, 32, 23, 12, 35, 65, 96`.

   1. À l'aide d'une boucle, ajoutez `1` à chaque chiffre du tableau.

3. Créez deux tableaux `valeurs1` et `valeurs2` qui contiennent respectivement les valeurs : `1, 4, 7, 2, 19, 5` et `2, 7, 3, 2, 21, 5`. À l'aide d'une (seule) boucle, parcourez les deux tableaux et comparez leurs valeurs : si la valeur de `valeurs1` est plus petite que la valeur de `valeurs2`, affichez `"plus petit"` _dans la console_ ; si la valeur de `valeurs1` est plus grande que la valeur de `valeurs2`, affichez `"plus grand"` _dans la console_ ; si les deux valeurs sont égales, affichez `"égales"` _dans la console_.


## Fonctions

1. Créer une fonction qui prend en argument une chaîne de caractères et qui retourne dans un tableau la première et la dernière lettre de la chaîne.

2. Créer une fonction qui prend une chaîne de caractères comme argument et retourne les/la lettre/s du milieu. Si la chaîne de caractères est impaire, la fonction retourne une lettre, si elle est paire, elle en retourne deux.

Exemple : "Salut" -> "l", "Pommes" -> "mm"

3. Créez une dernière fonction qui prend une chaîne de caractères en argument et qui la sépare en mots (qui seront stockés dans un tableau).   Exemple : "Tu adores les pommes" -> ['tu', 'adores', 'les', 'pommes'] (Voir la méthode `split()`)
