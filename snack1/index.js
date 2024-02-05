/*
Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e
a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/


let numeri = []
let somma = 0
for(let i = 0; i<10; i++){
let numero = Number(prompt("inserisci un numero"))
numeri.push(numero)
somma = somma + numeri[i]
}

console.log(somma)