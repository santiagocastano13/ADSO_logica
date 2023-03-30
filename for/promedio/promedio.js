let sum = 0;
let num;

for (let i = 1; i <= 10; i++) {
  num = parseInt(prompt("Ingrese el número " + i));
  sum += num;
}

let promedio = sum / 10;

console.log("El promedio es: ", promedio);