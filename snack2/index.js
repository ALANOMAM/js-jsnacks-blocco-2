/*
Snack 2
Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure
 "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è
  perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere
*/

let pcOutput = document.querySelector("#computer")
let userOutput = document.querySelector("#user")
let risultato = document.querySelector("#result")

let pcNumber = Math.floor(1+Math.random()*100)
let userNumber = prompt("inserire numbero")
  
pcOutput.innerHTML=pcNumber
userOutput.innerHTML=userNumber


if(userNumber > pcNumber){
    risultato.innerHTML ="<b>troppo grande</b>"
}else if(userNumber < pcNumber){
    risultato.innerHTML ="<b>troppo piccolo</b>"
} else{
    risultato.innerHTML ="<b>indovinato</b>"
}