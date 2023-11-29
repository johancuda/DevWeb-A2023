let notes = [2.5,4,5,6,6,5.5,3.5]

for (let index = 0; index < notes.length; index++) {
    console.log(notes[index])   
}

notes.forEach(element => {
    console.log(element)
});

// bien placer HORS de la boucle
// qu'est-ce qui ne doit pas être redéfini ?
// c'est la somme
let somme = 0

for (let index = 0; index < notes.length; index++) {
    somme += notes[index]
    console.log("somme",somme)
}

let sommeForEach = 0

notes.forEach(v => {
    sommeForEach += v 
    console.log("somme avec forEach",sommeForEach)
})


let sommePourMoyenne = 0

function moyenne(tableau) {
    for (let index = 0; index < tableau.length; index++) {
        sommePourMoyenne += tableau[index]
    }
    return Math.round(sommePourMoyenne/tableau.length)
}

console.log("moyenne avec fonction",moyenne(notes))

let valeurs1 = [1, 4, 7, 2, 19, 5]
let valeurs2 = [2, 7, 3, 2, 21, 5]

function comparer(tableau1,tableau2){
    for (let index = 0; index < tableau1.length; index++) {
        if(tableau1[index] < tableau2[index]){
            console.log("Plus petit")
        }
        else if(tableau1[index] > tableau2[index]){
            console.log("Plus grand")
        }
        else{
            console.log("Egal")
        }    
    }
}

comparer(valeurs1,valeurs2)

// for (let i = 0; i < monTableau.length; i++) {
//     const element = monTableau[i];  
// }

// fonctions
function premiereEtDerniereLettre(maChaine) {
    let tableauResultat = []
    // injecter première lettre
    tableauResultat[0] = maChaine[0]
    // injecter Dernière lettre
    tableauResultat.push(maChaine[maChaine.length-1])
    return tableauResultat
}

let res = premiereEtDerniereLettre("Salut comment ça va?")
console.log(res)

function lettresDuMilieu(maChaine) {
    // tester si la chaîne est paire ou impaire
    if(maChaine.length % 2 !== 0){
        console.log("impair")
        // ma chaîne est impaire, je prends la valeur du milieu
        let numeroIndexMilieu = Math.floor(maChaine.length/2)
        console.log(maChaine[numeroIndexMilieu])
    }
    else{
        console.log("pair")
        // ma chaîne est paire, récupérer les deux éléments du milieu
        let numeroIndexMilieu = Math.floor(maChaine.length/2)
        console.log(maChaine[numeroIndexMilieu-1]+maChaine[numeroIndexMilieu])    
    }  
}

lettresDuMilieu("salut")
lettresDuMilieu("saluti")

Math.po