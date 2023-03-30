let numero1 = parseFloat(prompt("ingrese un numero"));
let numero2 = parseFloat(prompt("ingrese un numero"));

let contador = 1;
let potencia = 1;

while (contador <= numero2)  {
    potencia = potencia * numero1;
    contador++;
}
console.log(potencia);