let total = 0;
let cantidad = 0;
let numero = 1;

while(numero !== 0) {
  numero = parseInt(prompt('Ingrese un número (0 para terminar)'));
  if (numero !== 0) {
    total += numero;
    cantidad++;
  }
}

let promedio = total / cantidad;

console.log(`El promedio de los ${cantidad} números ingresados es: ${promedio}`);