let n = parseInt(prompt("Ingrese el número de estudiantes:"));

let sumaNotas = 0;

for (let i = 1; i <= n; i++) {

  let nota1 = parseFloat(prompt("Ingrese la nota 1 del estudiante "));
  let nota2 = parseFloat(prompt("Ingrese la nota 2 del estudiante "));
  let nota3 = parseFloat(prompt("Ingrese la nota 3 del estudiante "));

  let promedio = (nota1 + nota2 + nota3) / 3;
  sumaNotas += promedio;
}

let promedioGeneral = sumaNotas / n;

// Mostramos el resultado al usuario
console.log("El promedio general de las notas de los", n, "estudiantes es ",promedioGeneral);