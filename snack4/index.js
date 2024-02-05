/*
Snack 4
Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo.
*/ 


 let risultato = document.querySelector("#result")
 let numero = Number(prompt("inserisci un numero"))

 if(numero % 2 == 0){
    risultato.innerHTML =numero
 }else{
    risultato.innerHTML = numero+1
 }