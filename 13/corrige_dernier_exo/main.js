taille = 10;

      // Ex 3.1
      const données = [
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      ];

      // Ex 3.2
      for (let i = 0; i < taille; i++) {
        for (let j = 0; j < taille; j++) {
          console.log(données[i][j]);
          console.log(voisins(données, i, j));
        }
      }

      // Ex 3.3
      function voisins(jeuDeDonnées, i, j) {
        const tabVoisins = [];

        if (i - 1 > 0) {
          if (j - 1 > 0) {
            tabVoisins.push(jeuDeDonnées[i - 1][j - 1]);
          }
          tabVoisins.push(jeuDeDonnées[i - 1][j]);
          if (j + 1 < taille) {
            tabVoisins.push(jeuDeDonnées[i - 1][j + 1]);
          }
        }
        if (j - 1 >= 0) {
          tabVoisins.push(jeuDeDonnées[i][j - 1]);
        }
        if (j + 1 < taille) {
          tabVoisins.push(jeuDeDonnées[i][j + 1]);
        }
        if (i + 1 < taille) {
          if (j - 1 > 0) {
            tabVoisins.push(jeuDeDonnées[i + 1][j - 1]);
          }
          tabVoisins.push(jeuDeDonnées[i + 1][j]);
          if (j + 1 < taille) {
            tabVoisins.push(jeuDeDonnées[i + 1][j + 1]);
          }
        }

        return tabVoisins;
      }