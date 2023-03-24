//> Ejercicio 2.12
let producto = 210;
let descuento = producto * 0.20;
let productoDescuento = producto - descuento;
let iva = descuento * 0.15;
const precioFinal = productoDescuento + iva;

console.log("Precio con descuento: S/", productoDescuento);
console.log("Precio final: S/" ,precioFinal);


//> Ejercicio 2.8
let numeroKilometros = prompt("Ingrese númeo de kilómetros:");
let velocidad = 10;
let tiempo = +numeroKilometros / velocidad;

console.log("Son " ,tiempo, " horas");


//> Ejercicio 2.5 
let precioMetroCuadrado = 25;
let cantidadMetroCuadrado = prompt('Ingrese cantidad de metros cuadrados');
let precioTotal = precioMetroCuadrado * +cantidadMetroCuadrado;

console.log("El precio a pagar es: S/" ,precioTotal);


//> Ejercicio 2.3
let anio = 2023;
const anioNacimiento = prompt("Ingrese su año de nacimiento:");
const anioDeTrabajaro = anio - +anioNacimiento;

console.log("La edad del trabajador es: " , anioDeTrabajaro ," años.");


//> Ejercicio 2.2
let soles = prompt("Ingrese cantidad de soles: S/");
let dolares = 3.78;
let conversion = +soles / dolares;

console.log("Con S/" ,soles, " obtendrá $", conversion )

