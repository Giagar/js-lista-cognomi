var surnamesList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var lowerCaseSurnamesList = []; // bounus: usa map


// recupera cognome e preparalo per la lista (minuscolo)
    // verifica non ci siano numeri - bonus
var surname = prompt('Scrivi il tuo cognome');

// inserire cognome in surnamesList
surnamesList.push(surname);

// rendi tutto minuscolo al fine di riordinarli alfabeticamente senza problemi
for (var i = 0; i < surnamesList.length; i++) {
    lowerCaseSurnamesList.push(surnamesList[i].toLowerCase()); 
}

// ordinare alfabeticamente surnamesList
lowerCaseSurnamesList.sort();

// individuare posizione cognome inserito all'interno della lista
var userSurnameIndex = lowerCaseSurnamesList.indexOf(surname) + 1;

// creare ul da surnamesList con posizione cognome inserito
var displayedList = '';
for (var l = 0; l < lowerCaseSurnamesList.length; l++) {
    if(lowerCaseSurnamesList[l] === surname) {
        displayedList += '<li class="user text-effect">' + lowerCaseSurnamesList[l] + ', ' + userSurnameIndex + '</li>'
    } else {
        displayedList += '<li>' + lowerCaseSurnamesList[l] + '</li>'
    }
}

document.querySelector('#list').innerHTML = displayedList;