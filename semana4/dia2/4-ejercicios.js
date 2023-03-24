/**
 *
 */

const nroPersonas = 50;
let costPlato = 0;
let total = 0;

if (nroPersonas > 200 && nroPersonas <= 300) {
  costPlato = 85;
} else {
  if (nroPersonas > 300) {
    costPlato = 75;
  } else {
    costPlato = 95;
  }
}

total = costPlato * nroPersonas;
console.log("Total a pagar para" + nroPersonas + "personas: " + total);

/**
 * Ejercicio 3.8
 */
console.log("--- ejercicio 3.8 ---");
const nrAlumnos = 200;
let costoBus = 0;

if (nrAlumnos > 100) {
  costoBus = nrAlumnos * 65;
} else {
  if (nrAlumnos >= 50) {
    costoBus = nrAlumnos * 70;
  } else {
    if (nrAlumnos >= 30) {
      costoBus = nrAlumnos * 95;
    } else {
      costoBus = 4000;
    }
  }
}

console.log("Total a pagar por " + nrAlumnos + ": S/" + costoBus);

/**
 * Ejercicio propuesto 3.9
 */
console.log("--- Ejercicio 3.9 ---");
const planA = 1200;
const planB = 950;
let totalPagar = 0;
const planElegido = prompt("¿Qué plan desea? escriba a (Plan A) ó b (PLan B)");
const alcohol = prompt("¿Toma alcohol?");
const lentes = confirm("¿Usted usa lentes?");
const enfermedad = confirm("¿Padece usted de alguna enfermedad?");
const edad = +prompt("Ingrese su edad");
let precioBase = 0;

if (planElegido === "a") {
  precioBase = planA;
} else {
  precioBase = planB;
}
totalPagar = precioBase;

if (alcohol) {
  totalPagar = totalPagar + 0.1 * precioBase;
}
if (lentes) {
  totalPagar = totalPagar + 0.05 * precioBase;
}
if (enfermedad) {
  totalPagar = totalPagar + 0.05 * precioBase;
}
if (edad > 40) {
  totalPagar = totalPagar + 0.1 * precioBase;
} else {
  totalPagar = totalPagar + 0.2 * precioBase;
}

console.log("El monto a pagar es: S/", totalPagar);
