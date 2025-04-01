console.log("Ingrese tres números enteros...")
let mayor = Number.MIN_SAFE_INTEGER
for (i=0; i<3; i++) {
    let numero = parseInt(prompt("Ingrese un numero: "));
    if (numero > mayor){
        mayor = numero;
    }
}
console.log('El número mas grande es: ' + mayor);