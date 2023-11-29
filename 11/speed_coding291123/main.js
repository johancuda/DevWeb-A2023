document.querySelector("#envoyer").addEventListener("click",creerDivAvecDifferencePairEtImpair)

function recuperer() {
    let nombre = document.querySelector("#nombreEntre").value
    console.log(nombre)
}

function creerDiv() {
    let nombre = document.querySelector("#nombreEntre").value;
    for (let index = 0; index < nombre; index++) {
        let monDiv = document.createElement("div")
        monDiv.innerText = 3
        document.body.appendChild(monDiv)
    }
}

function creerDivAvecDifferencePairEtImpair() {
    let nombre = document.querySelector("#nombreEntre").value;
    for (let index = 0; index < nombre; index++) {
        let monDiv = document.createElement("div")
        monDiv.innerText = 3
        if(index % 2 !== 0){
            monDiv.classList.add("impair")
        }
        document.body.appendChild(monDiv)
    }
}