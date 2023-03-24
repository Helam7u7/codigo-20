/**
 * Tabla de multiplicar de un número n
 * 1-12
 */
const n = 7;

for (let c = 1; c <= 12; c++) {
    console.log(c + ' X ' + n + ' = ' + n*c);
}

/**
 * Ejercicio 
 * Obtener la multilicación de 2 números a * b
 * - No usar el símbolo de multiplicación *
 * - Usar sólamente sumas
 * - Usar el ciclo for
 */
console.log('--- Multiplicación ---')
const numero1 = 3;
const numero2 = 6;
let resultado = 0;
for (let i = 1; i <= numero2 ; i++) {
    resultado = resultado + numero1;
  }
  console.log('El resultado es :' + resultado);

  /**
   * Un usuario ingresará 5 números; de todos ellos
   * se desean saber
   * - cantidad de números positivos
   * - cantidad de números negativos
   * - cantidad de números igaules a cero
   */

  debugger
let nroPosi = 0;
let nroNega = 0;
let nroCero = 0;

for (let i = 0; i < 5; i++) {
  let nro = +prompt('Ingrese '+ (i+1)+ '° número');
  if (nro > 0) {
    nroPosi++
  } else if (nroNega < 0) {
    nroNega++
  } else {
    nroCero++
  }
}

console.log('Positivos: '+nroPosi+ ' Negativos: '+nroNega+ ' Ceros: '+ nroCero);