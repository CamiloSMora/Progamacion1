console.log("Ingrese 3 numeros...");
let numero
let suma
for (i=0; i<3; i++) {
    numero = parseInt(prompt("Ingrese un numero: "));
    if (numero < 0){
        suma = suma + (numero * -1);
    }else{
        suma = suma + numero
    }
}
console.log("La suma de los sus valores absolutos es: " + (suma))