// chiedi all'utente la sua email
var mailUtente = prompt("Inserisci il tuo indirizzo email");
console.log("La mail dell'utente è: " + mailUtente);

// controlla che sia nella lista di chi può accedere
var listaMail = ["mailaccesso@gmail.com", "qwerty@libero.it", "mailsegreta@gmail.com"];
console.log(listaMail[0]);
console.log(listaMail[1]);
console.log(listaMail[2]);

var trovato = false;

for (var i = 0; i < listaMail.length; i++) {
    if (mailUtente == listaMail[i]) {
        trovato = true;
    }
}

console.log(trovato);

if (trovato) {
    document.getElementById("message").innerHTML = "Comlimenti&excl; Sei nella lista&excl;";
    console.log("Accesso consentito a " + mailUtente);
} else {
    document.getElementById("message").innerHTML = "Ci dispiace, ma non sei nella lista.";
    console.log("Accesso negato a " + mailUtente);
}