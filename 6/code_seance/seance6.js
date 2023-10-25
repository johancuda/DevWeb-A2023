function afficherConsole(){
    console.log("salut !")
}

// ajouter un comportement à un élément
// 1. récupérer l'élément
let monElement = document.querySelector("#boutonPrincipal");
// 2. ajouter un comportement à cet élément
monElement.addEventListener("click",afficherConsole);