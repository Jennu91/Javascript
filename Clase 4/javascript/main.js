let nombre = prompt('Ingresa tu nombre:').toLocaleLowerCase();
let apellido = prompt('Ingresa tu apellido:');

alert('Hola ' + nombre + ' ' + apellido + ' bienvenido, te buscaremos el mejor plan');


let edad = prompt('Ahora ingresa tu edad:');

//realiza el calculo del plan segun la edad//

if (edad < 0 && edad > 29) {

    alert('Valor de su plan: $5609/mes');

} else if (edad < 30 && edad > 50) {

    alert('Valor de su plan: $10895/mes');

} else if (edad < 51 && edad > 70) {

    alert('Valor de su plan: $15437/mes');

} else (edad >= 71) {

    alert('Valor de su plan: 21065/mes');

}

let mail = prompt('Dejanos tu mail, y te enviaremos la info!')
console.log(mail)

let mensaje = prompt("Dejanos un mensaje o comentario")

while (mensaje != "ESC") {
    console.log(${ mensaje });
    entrada = prompt("Haz otro comentario");
}







