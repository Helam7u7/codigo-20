/**
 * >Propiedades de los strings
 */ 

let frase = 'Los programadores crean lo que las personas sueñan.';
console.log(frase);
/**
 * >length
 * >retorna la cantidad de caracteres de un string
 */
console.log('length ', frase.length);

/**
 * >toLowerCase()
 * >retorna el string a minúsculas
 */
console.log('toLowerCase', frase.toLowerCase());

/**
 * >toUpperCase()
 * >retorna el string a minúsculas
 */
console.log('toUpperCase', frase.toUpperCase());

/**
 * >trim()
 * >retorna el string sin espacion en blanco a los extremos 
 * >en caso el string tuviera dichos espacio
 */
let fra = '   Hola   Mundo    '
console.log('trim', fra.trim());

/**
 * >? parametro opcional
 * >substr(comienzo, extension?)
 * >Devuelve una subcadena desde la posición "comienzo"
 * >incluyendo "extension" caracteres en adelante
 * >Si no se manda la extension, el retorno sera desde
 * >la posición "comienzo" hasta el final
 */

console.log('frase desde la posicion 9 por 4 caracteres');
console.log(frase.substr(9,4));

/**
 * >? parametro opcional
 * >substring(comienzo, final)
 * >Devuelve una subcadena desde la posición "comienzo"
 * >hasta la posición "comienzo" hasta el final
 */

console.log('frase desde la posicion 9 por 4 caracteres');
console.log(frase.substr(9,13));

/**
 * >startsWith(texto)
 * >devuelve true si el string inicia con el parámetro
 * >"texto"
 */
console.log(frase.startsWith('Los pro'));

/**
 * >endsWith(texto)
 * >devuelve true si el string finaliza con el parámetro
 * >"texto"
 */
console.log(frase.endsWith('sueñan.'));

/**
 * >includes(texto,posicion?)
 * >devuelve true si el string contiene el parámetro "texto"
 * >desde al posición "posición"; si éste último parámetro no
 * >se ha establecido, el texto es buscado desde el inicio de
 * >cadena 
 */
console.log(frase.includes('crean'));

/**
 * >indexOf(texto,posicion?)
 * >retorna la posición en la que inicia el texto "texto"
 * >dentro del string a partir de la posición "posición".
 * >Si éste último parámetro no se ha establecido, la
 * >busqueda se realiza desde el inicio de la cadena
 */
console.log(frase.indexOf('crean'));