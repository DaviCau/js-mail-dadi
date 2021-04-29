// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
var numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroUtente);
var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

document.getElementById("numeri").innerHTML = "Numero del giocatore: " + numeroUtente + "<br>Numero del computer: " + numeroComputer;

if (numeroUtente > numeroComputer) {
    console.log("Hai vinto!");
    document.getElementById("risultato").innerHTML = "Complimenti, hai vinto&excl;"
} else if (numeroUtente == numeroComputer) {
    console.log("Hai pareggiato!");
    document.getElementById("risultato").innerHTML = "Wow, avete pareggiato&excl;"
} else {
    console.log("Hai perso!");
    document.getElementById("risultato").innerHTML = "Che peccato, hai perso&excl;"
}