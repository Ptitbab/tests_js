let nombre = prompt('De quel nombre veux tu calculer la factorielle?');

let i, f = 1;

for(i = 1; i <= nombre; i++){
    f = f * i;
}



console.log(`La factorielle de ${nombre} est ${f}`)
