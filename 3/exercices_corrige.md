# Exercices 04.10.2023 CORRIGÉS

Voilà une proposition de solution, il existe bien entendu différentes méthodes pour résoudre ces problèmes! N'hésitez pas à venir me voir si vous avez d'autres solutions :)


## Interactions avec le DOM

Commencez par vous rendre sur [cette page](https://johancuda.github.io/page-web-simple/) et effectuez les opérations suivantes:

1. Récupérer la première balise `<h1>` avec `querySelector`.
```js
document.querySelector('h1')
```

2. Changer la couleur du texte de la balise récupérée au point 1. (Pour rappel, `document.querySelector('votre_balise').style.attribut_a_changer = "nouvelle_valeure"`).
```js
document.querySelector('h1').style.color = "green"
```

3. Récupérer toutes les balises `<div>` avec `querySelectorAll`.
```js
document.querySelectorAll('div')
```

4. Récupérer la deuxième balise `<div>` avec `querySelectorAll`. (Pour rappel, récupérer la première balise `<p>` s'écrirait `document.querySelectorAll('p')[0]`).
```js
document.querySelectorAll('div')[1]
```

5. Récupérer l'URL de la page de manière programmatique ( Pour rappel, `document.location.href`).
```js
document.location.href
```

6. Changer la couleur de fond de la page au moyen de `document.body.style` et de l'attribut `backgroundColor`.
```js
document.body.style.backgroundColor = "yellow"
```

7. *Bonus* : Compter le nombre de balises `<br>` présentent sur la page de la manière de votre choix.

Deux propositions:

1. Récupérer toutes les balises `<br>` dans la console et compter manuellement :
```js
    document.querySelectorAll('br')
    // Réponse de la console: NodeList(4) [br, br, br, br]
```
2. Utiliser l'attribut `length` :
```js
document.querySelectorAll('br').length
```


Rendez-vous ensuite sur [cette page](https://chludens.ch/) et effectuez les opérations suivantes:

1. Changez le titre de la page.
```js
document.querySelector('title').innerText = "DevWeb23"
```

2. Changez une image de votre choix sur la page.
```js
document.querySelectorAll('img')[3].src = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cat_crying_%28Lolcat%29.jpg"
```

3. Changez le premier lien de la page pour qu'il pointe vers la page de l'[UNIL](https://unil.ch).
```js
document.querySelectorAll('a')[0].href = "https://unil.ch"

// ou

document.querySelector('a').href = "https://unil.ch"
```

4. Trouvez combien de liens contient cette page. (Même chose que l'exercice 7 bonus de la section précédente)
```js
document.querySelectorAll('a').length
```

Réalisez chacune de ces options via la console, en utilisant `document.querySelector` pour modifier les attributs et `innerText`, `innerHTML` et `textContent` pour modifier le contenu d'une balise.

## Déclaration et modification de variables

1. Déclarer une variable `annee_courante` qui contiendra la valeure `2023` au moyen du mot-clé `let`.
```js
let anee_courante = 2023
```

2. Déclarer une variable `annee_naissance` en lui affectant la valeure `1997`.
```js
let annee_naissance = 1997
```

3. Déclarer une variable `age` qui aura comme valeur la **différence** entre `annee_courante` et `annee_naissance`.
```js
let age = annee_courante - annee_naissance
```