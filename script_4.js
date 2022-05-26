const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Quels sont les entrepreneurs qui sont nés dans les années 70?")

  entrepreneurs.forEach(element => {
    if (element.year >= 1970 && element.year < 1980){
        console.log(element)
    } 
  });

console.log("Quels sont les prénoms et noms des entrepreneurs présents dans la liste?")

let listePrenomsNoms = []

entrepreneurs.forEach(element => {
    listePrenomsNoms.push(element.first)
    listePrenomsNoms.push(element.last)
    });

console.log(listePrenomsNoms)

console.log("Quel age aurait chaque entrepreneur aujourd'hui?")

entrepreneurs.forEach(element => {
    age = 2022 - element.year 
    console.log(`${element.first} ${element.last} aurait ${age} ans en 2022`)
    });
    
    console.log("Voici la liste triée par order alphabétique:")

let liste = entrepreneurs.sort(function (a, b) {
    if(a.last < b.last) {return -1;}
    if(a.last > b.last) {return 1;}
    return 0
});

console.log(liste)


  