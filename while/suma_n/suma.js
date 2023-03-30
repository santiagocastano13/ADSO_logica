let n = parseFloat(prompt("ingrese el numero a que quiere que llegue la lista para sumar"));
let i = 1;
let suma = 0;

while (i <= n) {
    suma = suma + i;
    i++;
    
}
console.log("el total es: ", suma);