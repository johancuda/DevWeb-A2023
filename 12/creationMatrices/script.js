// Créer une matrice dont les coins sont d'une couleur différente des autres cases
function matriceCoins(size) {
    //Création d'une double boucle pour créer les lignes et les colonnes
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          //Création d'une balise span et lui donner une couleur
          const cell = document.createElement('span');
          cell.classList.add('cell');
          // test la condition pour chaque case de la matrice et change la classe CSS quand la réponse est True
          if ((i === 0 || i === size - 1) && (j === 0 || j === size - 1)) {
            cell.classList.add('green');
          }
          // ajout de la cellule à la page
          document.body.appendChild(cell);
        }
      // Retour à la ligne pour créer la matrice
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    // Retour à la ligne entre les matrices
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Créer une matrice dont la diagonale est d'une couleur différente des autres cases
function matriceDiagonale(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.classList.add('cell');
          if (i === j || i === size - 1 - j) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Créer une matrice dont les colonnes paires sont d'une couleur différente des autres cases
function matriceColonnesPaires(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.classList.add('cell');
          if (j % 2 === 1) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Créer une matrice dont les lignes paires sont d'une couleur différente des autres cases
function matriceLignesPaires(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.classList.add('cell');
          if (i % 2 === 1) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Créer une matrice dont les bordures sont d'une couleur différente des autres cases
function matriceBordure(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.classList.add('cell');
          if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Créer une matrice dont une case sur deux est d'une couleur différente des autres cases
function matriceUneCelluleSurDeux(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = document.createElement('span');
          cell.classList.add('cell');
          if ((i + j) % 2 === 1) {
            cell.classList.add('green');
          }
          document.body.appendChild(cell);
        }
      const br = document.createElement('br');
      document.body.appendChild(br);
    }
    const br = document.createElement('br');
    document.body.appendChild(br);
}

  // Récupérer la taille de la matrice depuis l'utilisateur
  const tailleMatrice = prompt('Entrez la taille de la matrice :');
  if (tailleMatrice) {
    matriceCoins(tailleMatrice)
    matriceDiagonale(tailleMatrice)
    matriceColonnesPaires(tailleMatrice)
    matriceLignesPaires(tailleMatrice)
    matriceBordure(tailleMatrice)
    matriceUneCelluleSurDeux(tailleMatrice)
  }