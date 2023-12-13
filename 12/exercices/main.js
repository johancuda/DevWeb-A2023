
function matriceDiagonale(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.addEventListener('mouseover', function(event){
            let nombre_aleatoire = Math.floor(Math.random()*51)
            event.target.innerHTML = nombre_aleatoire
            event.target.style.textAlign = "center"
            event.target.style.fontSize = "x-large"

          })
          cell.classList.add('cell');
          if (i === j || i === size - 1 - j) {
            cell.classList.add('green');
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = 'white'
            })
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Ainsi que le prompt et l'appel
const tailleMatrice = prompt('Entrez la taille de la matrice :');
  if (tailleMatrice) {
    matriceDiagonale(tailleMatrice)
  }