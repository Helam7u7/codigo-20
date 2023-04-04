/**
 * >La clase Date sirve para manipular fechas
 */

let hoy = new Date();

console.log("hoy", hoy);

/**
 * >getFullYear();
 * >retorna el año de la variable hoy
 */
console.log("año", hoy.getFullYear());

/**
 * >getMonth();
 * >retorna el número de mes iniciando en 0
 */
const meses = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];
console.log("mes", hoy.getMonth() + 1);
console.log("mes", meses[hoy.getMonth()]);

/**
 * >getDate();
 * >retorna el número de mes iniciando en 0
 */
console.log("día del mes", hoy.getDate());

/**
 * >getHours()
 * >getMinutes()
 * >getSeconds()
 */
console.log("hora", hoy.getHours());
console.log("minutos", hoy.getMinutes());
console.log("segundos", hoy.getSeconds());

/**
 * >getDay()
 * >retorno el número del día de la semana
 */
const dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
console.log("dias de la semana", dias[hoy.getDay()]);

/**
 * >inicializando fehcas distintas a hoy
 */
let fiestasPatrias = new Date(2023, 6, 28, 0, 0, 0);
console.log("28 julio es:", fiestasPatrias);

/**
 * >restando fechas
 */

console.log("Fiestas patrias menos hoy", fiestasPatrias - hoy);

const milisegundo = fiestasPatrias - hoy;
const diasPara28Julio = milisegundo / 1000 / 60 / 60 / 24;
console.log("Días para 28 Julio", diasPara28Julio);