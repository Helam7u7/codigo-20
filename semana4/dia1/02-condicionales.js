const dia = 'jueves';
const totalComprado = 800;
let resultado = totalComprado;

if (dia === 'martes') {
    resultado = totalComprado * 0.75;
}
console.log('Total a pagar' , resultado)


if (dia === 'martes') {
    if (totalComprado > 1000) {
        resultado = totalComprado - totalComprado * 0.15
    } else {
        console.log("No califica por compras menores a 1000")
    }
} else {
    console.log("No califica por no ser martes")
}

console.log('Total a pagar', resultado);