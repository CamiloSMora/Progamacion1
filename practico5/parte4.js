let num = parseInt(prompt("Ingrese un numero"));
let suma = 0;
for (i = 3; i <= num; i + 2) {
  if (i % 3 === 0) {
    suma += i;
  }
}

console.log(
  `La suma de los impares multiplos de 3 entre 1 y ${num} es: ${suma}`
);
