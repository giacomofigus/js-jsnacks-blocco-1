/*
Blocoo 2 - snack 3
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let numbers = [1,2,6,8,5,12,24,8,9,10,2]


function oddNumbers(array){
    let arr= 0;
    for(let i=0; i < array.length; i++){
        if(i % 2 !== 0 ){
            arr += array[i];
        }  
    }
   return arr
}

console.log(oddNumbers(numbers));


