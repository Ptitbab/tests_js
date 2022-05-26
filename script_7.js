
   
while (true) {
    answer = prompt("Que veux tu lui dire?");

    if (answer === "J'ai connu plus intéressant") {
        break;
    }
    else if(answer.slice(- 1) === "?"){
        console.log("Ouais ouais...");
    }
    else if (answer === "") {
        console.log("t'es en PLS?")
    }
    else if (answer === answer.toUpperCase()) {
        console.log("Pwa, calme-toi...")
    }
    else if (answer.includes("Fortnite")) {
        console.log("on s'fait une partie soum-soum ?")
    }
    else {
        console.log("balek")
    }
}
       