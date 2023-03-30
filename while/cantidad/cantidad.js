
let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un numero"));
let contador = 1;
let multiplicacion = 0;

while (contador <= num2) {
    multiplicacion = multiplicacion + num1;
    contador = contador + 1;
}
console.log("el resultado es: ", multiplicacion);