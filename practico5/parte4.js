console.log("Ingrese un numero");
let num = parseInt(prompt("Numero: "));
let suma = 0
for (i=1; i<num; i+2) {
    if (i % 3 === 0){
        suma += i;
    }
}
console.log(`La suma de los impares multiplos de 3 es: ${suma}`)
