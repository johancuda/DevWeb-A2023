// 1. Créez en JS un input de type `text` et un bouton.
// 2. Demandez à l'utilisateur.ice d'entrer un chiffre dans l'input (vous êtes libres de choisir la méthode). Lorsque l'utilisateur.ice clique sur le bouton, récupérez le chiffre entré pour créer autant de balises image (lien de l'image à utiliser: https://bowling-ball-shop.com/9305-large_default/900-global-volatility.jpg).

// <input type="text">
let monChampNombre = document.createElement("input") // <input>
monChampNombre.setAttribute("type","number") // <input type="text">
document.body.appendChild(monChampNombre)

// <input type="button">
let monBouton = document.createElement("input") // <input>
monBouton.setAttribute("type","button") // <input type="button">
monBouton.setAttribute("value","cliquer") // <input type="button" value="cliquer">
monBouton.addEventListener("click",genererImages)
document.body.appendChild(monBouton)

function genererImages(){
    // récupérer le nombre
    for(let i = 0; i<monChampNombre.value; i++){
        let monImage = document.createElement("img")
        monImage.setAttribute("src","https://bowling-ball-shop.com/9305-large_default/900-global-volatility.jpg")
        document.body.appendChild(monImage)
    }
}

// 1. Commentez toutes les lignes suivantes en indiquant précisémment ce qu'elles font.

// Création de l'input
let input_number = document.createElement('input')
input_number.setAttribute('type', 'number')
document.body.appendChild(input_number)

// Création du bouton
let bouton = document.createElement('input')
bouton.setAttribute('type', 'button')
bouton.setAttribute('value', 'Cliquez!')
// Ajout de l'événement 'click'
bouton.addEventListener('click', function() {
    for (let i = 0; i < input_number.value; i++) {
        // retour à la ligne pour que les objets créés soient sous l'input
        let br = document.createElement('br')
        document.body.appendChild(br)
        // création du bouton
        let bouton = document.createElement('input')
        bouton.setAttribute('type', 'button')
        bouton.setAttribute('value', 'Cliquez!')
        //Ajout de l'événement
        bouton.addEventListener('click', randomColor)
        // Ajout bouton créé à la page
        document.body.appendChild(bouton)
    }
})
// Ajout bouton relié à l'input à la page
document.body.appendChild(bouton)

function randomColor() {
    // Création des trois valeurs nécessaires pour le RGB
    let valeurRGB_1 = Math.floor(Math.random()*256)
    let valeurRGB_2 = Math.floor(Math.random()*256)
    let valeurRGB_3 = Math.floor(Math.random()*256)

    // création du string RGB
    let couleur = "rgb(" + valeurRGB_1 + "," + valeurRGB_2 + "," + valeurRGB_3 + ")"
    // ou bien let couleur = `rgb(${valeurRGB_1}, ${valeurRGB_2}, ${valeurRGB_3})`

    document.body.style.backgroundColor = couleur
    
}

// 2. Modifiez le texte indiqué sur les boutons

// Modifier la ligne 45 en bouton.setAttribute('value', 'nouveau texte!')

// 3. Modifier la fonction randomColor() pour qu'elle ne génère que des nuances de bleu

// valeurRGB_1 et valeurRGB_2 doivent valoir 0

// 4. Utiliser l'attribut 'placeholder' de l'input de type 'number' pour indiquer à l'utilisateur.ice de rentrer un nombre.

// Ajouter monChampNombre.setAttribute('placeholder', 'Entrez un nombre') au moment de la création de l'input

