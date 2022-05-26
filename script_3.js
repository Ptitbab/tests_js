let pyramide = prompt("Combien d'étage veux-tu pour ta pyramide?");

let i = 1, floor = "";

for(i;i <= pyramide; i++){
    floor = " ".repeat(pyramide-i)+"#".repeat(i);
    console.log(floor)
}

