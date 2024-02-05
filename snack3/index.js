/*
Snack 3
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a 
quando ne avrà tanti quanti l’altro. 
(Se iniziate con un array da 3 elementi e l'altro da 5, 
eseguite istruzioni sinchè non ne hanno entrambi 5

*/

let array1 =["elemento","elemento","elemento","elemento"]
let array2 =["elemento"]

for(let i= 0; i<array1.length ; i++){

    if(array2.length < array1.length){
        array2.push("elemento aggiunto")  
    }
}

console.log(array2)