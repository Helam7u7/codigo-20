function nombreDeLaFuncion() {
    console.log("Mi primera función")
}

//nombreDeLaFuncion()

function sumar(numero1, numero2) {

    const suma = numero1 + numero2;
    console.log("resluado: " ,suma);
}

sumar(10,10);


// Tipos de funciones
// Existen 3 tipos de funciones - declarativa o anónima  y arrow funcion o functión flecha

function suma(a,b,c) {
    return a+b+c;
}
console.log(10,10,10)

// funcion anónima o expresiva
let suma2 = function (a,b) {
    return a+b;
}
console.log(20,20);

// flecha
const suma3  = (x,y) => {
    return x+y
}
console.log(suma3(20,10))








// Función saludar al alumno

const saludar = (nombre, apellido)=> {
    return `Hol mi nombre es ${nombre} y mi apellido es ${apellido}`;
}
console.log(saludar("Helam", "Rojas"));


const mostrarNombre = () => {
    let elementoNombre = document.getElementById('nombreUsuario');
    let title = document.getElementById('reemplazo');
    let mensaje = `tú te llamas: ${elementoNombre.value}`;

    title.textContent = mensaje;
}


const mostrarTexto = () => {
    let elementoTexto = document.getElementById('inputTexto');
    let titulo = document.getElementById('titulo');
    titulo.textContent = elementoTexto.value;
}


const mostrarTexto2 = () => {
    let elementoTexto2 = document.getElementById('inputTexto2');
    let titulo2 = document.getElementById('titulo2');
    titulo2.textContent = `Mi artista favorito es: ${elementoTexto2.value}`;
}

// ----------------
const comenzarAlarma = () => {
    setTimeout(tiempoCumplido, 1000 * 3);
}

const tiempoCumplido = () => {
    alert("Se acabó el tiempo");
}

//-- Ejemplo 2

let elementoSegundos = document.getElementById('tiempoElegido');
let elementoTextoAlarma = document.getElementById('textoAlarma');

const comenzarTiempo=()=> {
    setTimeout(tiempoCumplido2, 1000 * elementoSegundos.value);
}

const tiempoCumplido2=()=> {
    elementoTextoAlarma.textContent = "ENCENDIDO";
    elementoTextoAlarma.style.color= "green";
}