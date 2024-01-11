/*
Blocco 2 - snack 2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/
const nomi = [
    'Mariong',
    'Pippo',
    'Lollo',
    'Giacomo',
    'Dario'
]

const cognomi = [
    'Sturniolo',
    'Cocco',
    'Figus',
    'Bianchi',
    'Rossi'
]

// Generatore casuale di nomi e cognomi con vari collegamenti
document.getElementById("genera").onclick = function (randomShuff) {
    
    for(let i = nomi.length - 1 && cognomi.length - 1; i > 0; i--){
        let randomPositionName = Math.floor(Math.random() * (i + 1));
        let randomPositionSurname = Math.floor(Math.random() * (i + 1));
        let temp = nomi[i];
        let temp2 = cognomi[i];

        nomi[i] = nomi[randomPositionName];
        cognomi[i] = cognomi[randomPositionSurname];
        nomi[randomPositionName] = temp;
        cognomi[randomPositionSurname] = temp2;

        document.writeln(nomi[i] + " " + cognomi[i] + ",")
    }    
}


