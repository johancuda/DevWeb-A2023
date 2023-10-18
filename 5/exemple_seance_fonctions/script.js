
// Fonction qui retourne la somme de deux nombres
function retourneSomme(nombre1, nombre2) {
    return nombre1 + nombre2
}


console.log(retourneSomme(12,43))
console.log(retourneSomme(123,43)) 
console.log(retourneSomme(12,453))
console.log(retourneSomme(122,43))
console.log(retourneSomme(12,4673))


// Code pour le Bookmarklet
function compterLiens() {

   //On compte les liens
   let total = document.querySelectorAll('a').length


   //On crée un div pour écrire le nombre de liens et on li donne du style CSS
   let div = document.createElement('div')
   div.innerText = "Nombre de liens : " + total
   div.style.color = "white"
   div.style.backgroundColor = "red"
   div.style.padding = "5px"
   div.style.position = "fixed"
   div.style.right = "5px"
   div.style.top = "5px"

   // On ajoute notre div sur la page

   document.body.appendChild(div)
}

// On appelle la fonction pour qu'elle s'exécute !
compterLiens()

