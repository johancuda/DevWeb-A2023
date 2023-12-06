// Le code suivant crée toute une série de matrices

// Crée une matrice dont les coins sont d'une couleur différente des autres cases
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
    matriceColonnesPaires(tailleMatrice)
    matriceUneCelluleSurDeux(tailleMatrice)
  }



// Exercices

// En reprenant la structure des fonction ci-dessus:

// 1. Créer une fonction matriceDiagonale() qui crée une matrice dont la diagonale est verte

// 2. Créer une fonction matriceLignesPaires() qui crée une matrice dont les lignes paires sont vertes

// 3. Créer une fonction matriceBordure() qui crée une matrice dont les bords sont verts