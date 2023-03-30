let numero = 0;
let contar = 0;

while (numero <= 100) {
    if (numero % 2 != 0){
        contar = contar + 1;
        console.log(numero);
    }
    numero++;
}
console.log("hay " + contar + " numeros impares");