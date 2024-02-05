/*
Snack 2
Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure
 "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è
  perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere
*/

let pcNumber = Math.floor(1+Math.random()*100)

let userNumber = prompt("inserire numbero")
  
console.log(pcNumber)
console.log(userNumber)

if(userNumber > pcNumber){
    console.log("troppo grande")
}else if(userNumber < pcNumber){
    console.log("troppo piccolo")
} else{
    console.log("indovinato")
}