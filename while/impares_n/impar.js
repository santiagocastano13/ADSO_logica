let n = parseFloat(prompt("ingrese el numero que quiere que llegue la lista de impares"));
let i = 0;

while (i <= n) {
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
}