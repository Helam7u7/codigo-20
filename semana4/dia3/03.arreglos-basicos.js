const libros = ["HP1","HP2","HP3"];
console.log(libros);

const notas = [7, 5, 3, 13, 6, 12];
console.log('notas', notas);
console.log('Suma de la 1ra con la última: ' , notas[0] + notas[5]);
//> reasignación de un elemento 
notas[4] = 20;
console.log('notas nuevas', notas);

//> propiedades
console.log('Cantidad de libros');
console.log(libros.length);

console.log("Cantidad de notas");
console.log(notas.length);

libros.push('Aves sin Nido');
console.log(libros);

//> recorriendo un arreglo
let acumulador = 0;
for (let i = 0; i < notas.length; i++) {
    acumulador+= notas[1];
}
console.log('acumulador', acumulador);

//> Ejercicio;
//> ¿Cuántos número del arreglo de notas son pares?
//> ¿Cuántos números del arreglo de notas son impares?

let pares = 0;
let impares = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log('Pares: ' + pares + '|| Impares: ' + impares);

/**
 * Ejercicio mejorado reto
 * al enunciado anterior, imprimir también;
 * qué números son pares y que números son impares
 * OJO imprimir al final, No en cada iteración
 */

let npares = [];
let nimpares = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        npares.push(notas[i])
    } else {
        nimpares.push(notas[i])
    }
}

console.log("Pares: ", npares);
console.log("Impares: ", nimpares);
