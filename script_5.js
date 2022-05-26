var books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été empruntés au moins une fois?");

  if (books.every(elem => elem.rented !== 0)) {
    console.log("Ils ont tous été emprunté au moins une fois");
  } else {
    console.log("Ils n'ont pas encore tous été loué.")
  }

  console.log("Quel est le livre le plus emprunté?");

  let plusLoue = books.sort(function (a, b){
      return a.rented - b.rented
  })

  console.log(plusLoue[plusLoue.length - 1])

  console.log("Quel est le livre le moins emprunté?");

  console.log(plusLoue[0])


  console.log("Trouve le livre avec l'ID 873495");

  console.log(books.find(elem => elem.id === 873495));

  console.log("Supprime le livre avec l'ID 133712");

   books.splice(6, 1)

  console.log(books);

  console.log("Trie par ordre alphabétique");

  let classé = books.sort(function(a, b){
    if (a.title < b.title) {return -1}
    if (a.title > b.title) {return 1}
    return 0
  }); 

  console.log(classé);