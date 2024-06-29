/*Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/


const numbers = [1, 2, 3, 4];
const suma = numbers.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
const producto = numbers.reduce((valorAnterior, valorActual) => valorAnterior * valorActual, 1);

console.log("La suma es " + suma);
console.log("El producto es " + producto);



