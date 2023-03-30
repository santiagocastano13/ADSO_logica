let letra = prompt("ingrese las letra que quiere para el eco");
let eco = parseInt(prompt("ingrese las veces que quiere que se repita el eco"));
let i = 1;
let acumuladora = "";

while (i <= eco) {
    acumuladora += letra;
    i++;
}
console.log(acumuladora);
