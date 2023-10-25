// 1.

function helloWorld() {
    console.log("Hello World!")
}

// 2.

function doubler(valeur) {
    let resultat = valeur + valeur
    return resultat

    // ou
    // return valeur + valeur
}

// 3.

function doublerChiffre(valeur) {
    return valeur *2
}

// 4. 

function sommeDeuxValeurs(valeur1, valeur2) {
    return valeur1 + valeur2
}

// 5.

function sommerTroisNombres(valeur1, valeur2, valeur3) {
    console.log(valeur1+valeur2+valeur3)
}

// 6.
// Pas exactement la réponse de la question posée dans la série

let chiffre = 1

function ajouterUn(valeurAModifier) {
    return valeurAModifier +=1
    // return valeurAModifier = valeurAModifier + 1
    // return valeurAModifier++
}

// 7.

function derniereLettre(chaine) {
    return chaine[chaine.length-1]
    // chaine.slice(-1)
    // chaine.charAt(chaine.length-1)
}

// 8.

function quadrupler(valeur) {
    return doubler(doubler(valeur))
}

// 9.

helloWorld()

// 10.

sommerTroisNombres(1,2,3)

// 11.

let resultat = doubler(5)

console.log(resultat)