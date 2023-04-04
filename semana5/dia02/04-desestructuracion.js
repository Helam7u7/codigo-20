const numeros = [5, 56, 245, 6, 54];
/**
 *  >Copiar o clonar correctamente un arrego
 */
const nuevosNumeros = [...numeros];
nuevosNumeros[0] = 0;
console.log(nuevosNumeros);
console.log(numeros);

/**
 * >Desestructuración por posición
 */
const [a, b] = numeros;
console.log('a', a);
console.log('b', b);

/**
 * >Operador rest
 */
const [n1, n2, ...resto] = numeros;
console.log('n1', n1);
console.log('n2', n2);
console.log('resto', resto);

const useState = () => {
    const saludo = () => {
        console.log('HOLA');
    };
    const despedida = () => {
        console.log('Adios');
    };
    return [saludo, despedida];
}

const [fn1, fn2] = useState();
fn1();
fn2();