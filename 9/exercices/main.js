// Interactions avec le DOM
/* 
// Alternative création d'image
let mon_image_original = document.createElement('img')
mon_image_original.setAttribute('src', 'https://....... .jpg')
// ou bien mon_image_originale.src = "https:// ..... .jpg"
document.body.appendChild(mon_image_original)  
 */

// 4.
let mon_bouton = document.querySelector("#bouton")
// ou bien
// let mon_bouton = document.getElementById('bouton')

// 5.
mon_bouton.addEventListener('click', enBleu)

function enBleu() {
    document.body.style.backgroundColor = 'blue'
}

// 7.

let mon_image = document.querySelector('img')
mon_image.addEventListener('mouseover', (e) => {
    console.log(e)
e.target.classList.add('rotation')
})

// Boucles et conditions

// 1.

let notes = [2.5, 4, 5, 6, 6, 5.5, 3.5]

// 1.1

for(let i = 0; i< notes.length ; i++) {
    console.log(notes[i])
}
/* Alternative 1
notes.forEach(element => {
    console.log(element)
}); 

Alternative 2
for (let i in notes) {
    console.log(notes[i])
}
*/

// 1.2

let somme = 0

for(let i = 0; i< notes.length ; i++) {
    somme += notes[i]
}

console.log(somme)

// 1.3

console.log(somme/notes.length)

// 2.

let chiffres = [2, 4, 7, 12, 32, 23, 12, 35, 65, 96]

// 2.1

for(let i = 0; i<chiffres.length; i++) {
    chiffres[i] += 1
}

console.log(chiffres)

// 3

let valeurs1 = [1, 4, 7, 2, 19, 5]

let valeurs2 = [2, 7, 3, 2, 21, 5]

for (let i = 0; i < valeurs1.length; i++) {
    if(valeurs1[i] == valeurs2[i]) {
        console.log('égales')
    } else if(valeurs1[i] < valeurs2[i]) {
        console.log('plus petit')
    } else {
        console.log('plus grand')
    }
    
}

// Fonctions

// 1.

function firstAndLast(chaine) {
    let resultat = [chaine[0], chaine[chaine.length-1]]
    return resultat
}

// 2.

function lettreMilieu(chaine) {
    let index_milieu = Math.floor(chaine.length/2)
    if(chaine.length % 2 == 0) {
        return chaine.substr(index_milieu, 2)
    } else {
        return chaine[index_milieu]
    }
}

// 3.

function toArray(chaine){
    let resultat = chaine.split(' ')
    return resultat
}
