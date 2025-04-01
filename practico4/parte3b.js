let tieneLicenciaConducir = true;
let tieneSeguroAuto = false;
if (tieneLicenciaConducir && !tieneSeguroAuto) {
 console.log('Puedes conducir, pero necesitas un seguro');
} else {
 if (tieneLicenciaConducir && tieneSeguroAuto) {
 console.log('Puedes conducir y tienes seguro');
 } else {
 console.log('No puedes conducir');
 }
}
