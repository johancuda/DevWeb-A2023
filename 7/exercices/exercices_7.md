# Série 01.11.23

## Tableaux, boucles et conditions

Pour réaliser les exercices suivants, créez dans un dossier une fichier HTML, un fichier CSS et un fichier JS dans le quel vous effectuerez les opérations suivantes.

### Tableaux

1. Créez un tableau `students` vide.
2. Créez un tableau `student1` qui contient les valeurs 'bidule' et '170cm'
3. Créez un tableau `student2` qui contient les valeurs 'machine' et '174cm'
4. Ajoutez `student1` et `student2` à `students`.
5. Créez un tableau `student0` qui contient les valeurs 'retroprojecteur' et '70cm' et ajoutez le à l'index **0** de `students` (voir la méthode `unshift()`).
6. Modifiez la taille de `student1` en '171cm'.

### Boucles

1. Créez une boucle qui _écrit dans la console_ les chiffres de 0 à 100.
2. Créez une boucle qui _écrit dans la console_ les chiffres pairs de 2 à 100.
3. Créez une boucle qui fait un compte à rebours de 300 à 0 en faisant des sauts de 3.
4. Créez une variable `tab` qui contient le tableau suivant : `[2, 5, 6, 5.5, 4, 4.25]`. Créez une boucle qui parcourt le tableau et _écrit_ chaque chiffre _dans la console_.
5. Créez une fonction `lettreParLettre`, qui prend un argument `chaine`, qui _écrit dans la console_ chaque lettres de la chaine de caractères entrée. Résultats attendus :

```js
lettreParLettre('bonjour'); // "b", "o", "n", "j", "o", "u", "r"
lettreParLettre('Loris'); // "L", "o", "r", "i", "s"
lettreParLettre('Lorem ipsum dolor sit amet consectetur adipisicing elit'); // "L", "o", "r", "e", "m", " ", "i", "p", etc...
```


### Conditions

1. Créez une fonction `estPair` (vous devrez faire des recherches!), qui prend un argument `chiffre` par exemple, qui _retourne_ `true` si le nombre entré est pair et `false` s'il est impair. Résultats attendus :

```js
estPair(2); // True
estPair(3); // False
estPair(12); // True
estPair(51); // False
```
2. Créez une fonction `direBonjour`, qui prend un argument `texte`, qui _écrit_ "Bonjour !" _dans la console_ si le texte entré est "Bonjour !", sinon elle écrit "Et la politesse ?" dans la console. Résultats attendus :

```js
direBonjour('Salut !'); // "Et la politesse ?"
direBonjour('Bonjour !'); // "Bonjour !"
direBonjour("C'est sur le cours de JS, non ?"); // "Et la politesse ?"
```
3. Créez une fonction `ageLegal`, qui prend un argument `age`, qui _retourne_ `true` si l'âge entré est supérieur ou égal à 18, et retourne `false` si l'âge est inférieur à 18. (Bonus) Si l'âge est supérieur ou égal à 60, elle retourne toujours `true` mais avant elle écrit "Je ne sais pas pourquoi j'ai demandé" dans la console. Résultats attendus :

```js
ageLegal(18); // True
ageLegal(17); // False
ageLegal(58); // True
ageLegal(78); // Dans la console : "Je ne sais pas pourquoi j'ai demandé" -- valeur retournée : True
```