// variabili iniziali
let surnamesList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
let lowerCaseSurnamesList = [];
let checkSurname = false;

// recupera cognome e preparalo per la lista (minuscolo)
    // verifica non ci siano numeri o simboli (ammesse solo lettere alfabeto latino e spazi) - bonus
let surname = prompt('Scrivi il tuo cognome');

!/[a-z]/ig.test(surname) ? 
    alert("Reinserire il cognome utilizzando solo lettere dell'alfabeto.") : 
    checkSurname = true;

// se verifica surname è true, procedi con programma
if (checkSurname) {

    // inserire cognome in surnamesList
    let newSurnamesList = [...surnamesList, surname]
        .map(el => el.toLowerCase())
        .sort();

    // creare ul da surnamesList con posizione cognome inserito
    let result = newSurnamesList.map((el, index) => {
        
        return el === surname.toLowerCase() ?
            `<li class="user text-effect">${el}, ${index + 1}</li>` :
            `<li>${el}</li>`;

    })
    .join("");

    document.querySelector("#list").innerHTML = result;
}
