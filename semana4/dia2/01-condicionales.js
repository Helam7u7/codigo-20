//> EJercicio 
/*
 * Dados 3 números enteros, evaluar el mayor de todos 
 */ 
debugger;

const n1 = 5;
const n2 = 20;
const n3 = -8;
const nMayor = 0;


if (n1 > n2) {
    if (n1 > n3) {
        console.log('El mayor es ', n1);
    } else {
        console.log('EL mayor es ', n3);
    }
} else {
    if (n2 > n3) {
        console.log('El mayor es', n2)
    } else {
        console.log('El mayor es', n3)
    }
}


/*
 *Ejercicio
 *Dado un año, ejm: 2020, Evaluear si ese año es bisciesto
*/ 

const anio = 2023;

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(anio, 'es bisiesto');
}else {
    console.log(anio, 'no es bisiesto');
}