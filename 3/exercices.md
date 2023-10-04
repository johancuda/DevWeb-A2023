# Exercices 04.10.2023

Le but de cette série d'exercices est de vous entraîner à intéragir depuis la console Javascript avec une page web. 

N'oubliez pas de consulter la [documentation](https://www.w3schools.com/jsref/dom_obj_document.asp) ainsi que le [résumé des séances](https://bit.ly/resumes-cours-ip). Il est normal que vous ne sachiez pas tout faire du premier coup, ne vous découragez pas et faites la navette entre la doc et le serveur d'entraide Discord au besoin. :)

*(Un corrigé vous sera donné la semaine prochaine.)*

## Interactions avec le DOM

Commencez par vous rendre sur [cette page](https://johancuda.github.io/page-web-simple/) et effectuez les opérations suivantes:

1. Récupérer la première balise `<h1>` avec `querySelector`.

2. Changer la couleur du texte de la balise récupérée au point 1. (Pour rappel, `document.querySelector('votre_balise').style.attribut_a_changer = "nouvelle_valeure"`)

3. Récupérer toutes les balises `<div>` avec `querySelectorAll`.

4. Récupérer la deuxième balise `<div>` avec `querySelectorAll`. (Pour rappel, récupérer la première balise `<p>` s'écrirait `document.querySelectorAll('p')[0]`)

5. Récupérer l'URL de la page de manière programmatique ( Pour rappel, `document.location.href`).

6. Changer la couleur de fond de la page au moyen de `document.body.style` et de l'attribut `backgroundColor`.

7. *Bonus* : Compter le nombre de balises `<br>` présentent sur la page de la manière de votre choix.

## Déclaration et modification de variables

1. Déclarer une variable `annee_courante` qui contiendra la valeure `2023` au moyen du mot-clé `let`.

2. Déclarer une variable `annee_naissance` en lui affectant la valeure `1997`

3. Déclarer une variable `age` qui aura comme valeur la **différence** entre `annee_courante` et `annee_naissance`.