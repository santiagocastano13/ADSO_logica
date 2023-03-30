let contador = 1;
let suma = 0;

while (contador <= 10) {
  let numero = prompt("Ingrese el número ");
  suma = suma + numero;
  contador++;
}

let promedio = suma / 10;
console.log("El promedio de los 10 números ingresados es", promedio);