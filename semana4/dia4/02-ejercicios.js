//> Ejercicio 1

let suma = () => {
    let num1 = +prompt('Ingrese número 1')
    let num2 = +prompt('Ingrese número 2')
    let resultado = num1 + num2;
    document.write(`La suma es: ${resultado} <br>`);
}


//> Ejercicio 2

let notaPromedio = () => {
    let nota1 = +prompt('Ingrese nota 1')
    let nota2 = +prompt('Ingrese nota 2')
    let nota3 = +prompt('Ingrese nota 3')
    let nota4 = +prompt('Ingrese nota 4')
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    document.write(`El promedio es: ${promedio} <br>`)
}


//> Ejercicio 3

let areaRectangulo = () => {
    let b = +prompt('Ingrese la base')
    let h = +prompt('Ingrese la altura')
    let area = b*h;
    document.write(`Su área es: ${area} <br>`)
}


//> Ejercicio 4

let areaTriangulo = () => {
    let b = +prompt('Ingrese la base')
    let h = +prompt('Ingrese la altura')
    let area = (b*h)/2;
    document.write(`Su área es: ${area} <br>`)
}


//> Ejercicio 5

let areaCirculo = () => {
    let r = +prompt('Ingrese la base')
    let area = 3.14*(r*r);
    document.write(`Su área es: ${area} <br>`)
}


let ejercicios = prompt('Ingrese N° de Ejercicio: 1 - 2 - 3 - 4 - 5 ');
switch (ejercicios) {
    case '1' :
        alert('Ejercicio N° 1')
        suma();
        break;
    case '2' :
        alert('Ejercicio N° 2')
        notaPromedio();
        break;
    case '3' :
        alert('Ejercicio N° 3')
        areaRectangulo();
        break;
    case '4' :
        alert('Ejercicio N° 4')
        areaTriangulo();
        break;
    case '5' :
        alert('Ejercicio N° 5')
        areaCirculo();
        break;
}