// déclaration de la fonction
function maPremiereFonction() {
    
}

// appel de la fonction
maPremiereFonction();

// fonction avec un paramètre sans retour
function maDeuxiemeFonction(monNombre) {
    document.write("Vous avez choisi "+ monNombre);
}

// fonction avec un retour sans paramètre
function retourneTrois() {
    return 3;
}

// stocker la valeur retournée
let nombre = retourneTrois();

// fonction avec paramètres et retour
function somme(n1,n2) {
    return n1+n2;
}

// fonction avec paramètres et retour
function sommeFois3(n1,n2) {
    let somme = n1+n2;
    let resultatFinal = somme * 3;
    return resultatFinal;
}

let unAutreNombre = 17;

let resultatComplet = sommeFois3(5,unAutreNombre)