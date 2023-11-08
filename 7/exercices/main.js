// Série 01.22.23

// Tableaux

// 1. Créez un tableau `students` vide.
let students = []

// 2. Créez un tableau `student1` qui contient les valeurs 'bidule' et '170cm'
let student1 = ['bidule', '170cm']

// 3. Créez un tableau `student2` qui contient les valeurs 'machine' et '174cm'
let student2 = ['machine', '174cm']

// 4. Ajoutez `student1` et `student2` à `students`.
students.push(student1, student2)

// 5. Créez un tableau `student0` qui contient les valeurs 'retroprojecteur' et '70cm' et ajoutez le à l'index **0** de `students`.
let student0 = ['retroprojecteur', '70cm']
students.unshift(student0)

// 6. Modifiez le deuxième élément de `student1` en '171cm'.
student1[1] = '171cm'

// Boucles

// 1. Créez une boucle qui _écrit dans la console_ les chiffres de 0 à 100.
for(let i=0; i<101; i++) {
    console.log(i)
}

// 2. Créez une boucle qui _écrit dans la console_ les chiffres pairs de 2 à 100.
for(let i=2; i<=100; i +=2) {
    console.log(i)
}

// 3. Créez une boucle qui fait un compte à rebours de 300 à 0 en faisant des sauts de 3.
for(let i=300; i>=0; i-=3) {
    console.log(i)
}

// 4. Créez une variable `tab` qui contient le tableau suivant : `[2, 5, 6, 5.5, 4, 4.25]`. Créez une boucle qui parcourt le tableau et _écrit_ chaque chiffre _dans la console_.
let tab = [2, 5, 6, 5.5, 4, 4.25]
for(let i =0; i<tab.length; i++) {
    console.log(tab[i])
}

// 5. Créez une fonction `lettreParLettre`, qui prend un argument `chaine`, qui _écrit dans la console_ chaque lettres de la chaine de caractères entrée.
function lettreParLettre(chaine) {
    for(let i = 0; i<chaine.length ; i++) {
        console.log(chaine[i])
    }
}

lettreParLettre('bonjour'); // "b", "o", "n", "j", "o", "u", "r"
lettreParLettre('Loris'); // "L", "o", "r", "i", "s"
lettreParLettre('Lorem ipsum dolor sit amet consectetur adipisicing elit'); // "L", "o", "r", "e", "m", " ", "i", "p", etc...

// Conditions

// 1. Créez une fonction `estPair`, qui prend un argument `chiffre` par exemple, qui _retourne_ `true` si le nombre entré est pair et `false` s'il est impair.
function estPair(chiffre) {
    if(chiffre%2 === 0) {
        return true
    } else {
        return false
    }
}

estPair(2); // True
estPair(3); // False
estPair(12); // True
estPair(51); // False

// 2. Créez une fonction `direBonjour`, qui prend un argument `texte`, qui _écrit_ "Bonjour !" _dans la console_ si le texte entré est "Bonjour !", sinon elle écrit "Et la politesse ?" dans la console.
function direBonjour(texte) {
    if(texte == "Bonjour !") {
        console.log(texte)
    } else {
        console.log("Et la politesse?")
    }
}

direBonjour('Salut !'); // "Et la politesse ?"
direBonjour('Bonjour !'); // "Bonjour !"
direBonjour("C'est sur le cours de JS, non ?"); // "Et la politesse ?"

// 3. Créez une fonction `ageLegal`, qui prend un argument `age`, qui _retourne_ `true` si l'âge entré est supérieur ou égal à 18, et retourne `false` si l'âge est inférieur à 18. (Bonus) Si l'âge est supérieur ou égal à 60, elle retourne toujours `true` mais avant elle écrit "Je ne sais pas pourquoi j'ai demandé" dans la console. 
function ageLegal(age) {
    if(age >= 18) {
        if(age >= 60) {
            console.log("Je ne sais pas pourquoi j'ai demandé")
        }
        return true
    } else {
        return false
    }
}

ageLegal(18); // True
ageLegal(17); // False
ageLegal(58); // True
ageLegal(78); // Dans la console : "Je ne sais pas pourquoi j'ai demandé" -- valeur retournée : True