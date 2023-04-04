console.log(promedioDosNumeros(2,4));

function promedioDosNumeros(num1,num2) {
    return (num1 + num2) / 3
}

// console.log(calcularEdad(2000))
const calcularEdad = (anioNacimiento) => {
    return 2023 - anioNacimiento;
}


const calcularEdad2 = (anioNacimiento) => 2023 - anioNacimiento;
console.log(calcularEdad(2000));

const sumarNNumeros = (... numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

console.log(sumarNNumeros(2,4,4,5));

const concatenarCadenas = (... cadenas) => {
    let cadenaFinal = '';
    for (let i = 0; i < cadenas.length; i++) {
        cadenaFinal = cadenaFinal + cadenas[i];
    }
}