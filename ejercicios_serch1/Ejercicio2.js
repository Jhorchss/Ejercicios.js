
//Exercise #2 (sugerencia map())
/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/
let numeros = [1, 2, 4, 5] //matriz

function doblarValor(arr) {
    let doblarValor = arr.map( numeros => numeros * 2);
    console.log(doblarValor);
}
doblarValor(numeros);