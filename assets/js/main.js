// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Chiedere all’utente il cognome
var cognomeUtente = prompt(" Inserisci il tuo cognome! ");
console.log(cognomeUtente);

// Lista Cognomi
var listaCognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];

console.log(listaCognomi);

// inserirlo in un array con altri cognomi
listaCognomi.push(cognomeUtente);

//stampa la lista ordinata alfabeticamente
listaCognomi.sort();

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

for (var i = 0; i < listaCognomi.length; i++) {
  var cognome = listaCognomi[i];
  var contenutoCognomi = document.getElementById("lista_cognome").innerHTML;
  document.getElementById("lista_cognome").innerHTML = contenutoCognomi + "<li>" + cognome + "</li>"
}
