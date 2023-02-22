



// Chiedo il numero di chilometri da percorre e lo memorizzo
// Chiedo l'età del passeggero e la memorizzo
// Calcolo il prezzo sapendo che ogni km costa 0.21€

// ? SE il passeggero è minorenne
//     °applico uno sconto del 20%
// :? ALTRIMENTI SE il passeggero ha più di 65 anni 
//     °applico uno sconto del 40%
// : ALTRIMENTI 
//     °pago il prezzo pieno

// Output con 2 cifre decimali


let chilometri = parseInt(prompt("Quanti chilometri vuoi percorre?"));

let anniPasseggero = prompt("Quanti anni hai?");

let prezzoPieno = chilometri * 0.21;

let prezzoScontato;


if(anniPasseggero < 18){
    
    prezzoScontato = prezzoPieno - (prezzoPieno / 100 * 20);
    
    console.log("In quanto a minorenne hai diritto ad uno sconto del 20%, il costo del tuo biglietto è di " + prezzoScontato.toFixed(2) + "€");

} else if(anniPasseggero > 65){

    prezzoScontato = prezzoPieno - (prezzoPieno / 100 * 40);

    console.log("In quanto a over 65 hai diritto ad uno sconto del 40%, il costo del tuo biglietto è di " + prezzoScontato.toFixed(2) + "€");

} else{

    console.log("Il prezzo del tuo biglietto è " + prezzoPieno.toFixed(2) + "€");
}