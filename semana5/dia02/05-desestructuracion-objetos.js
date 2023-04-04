const producto = {
    nombre: 'Iphone 14 Pro',
    precio: 5500,
    codigo: 5,
    stock: 80,
    colores: ['negro','azul','rojo']
};

/**
 * >Una forma correcta de copiar o clonar
 * >un objeto sería la siguiente split
 */

const producto2 = {...producto};

/**
 * >Desestructurando atrivutos
 */

const {codigo, precio, ...rest} = producto;
console.log('codigo' ,codigo);
console.log('precio' ,precio);
console.log('rest', rest);

/**
 * >desestructurando atributos con nuevos nombres
 * >de variables
 */
const {precio: precioProducto} = producto;

console.log('precio producto', precioProducto);

// const random = (min,max) => Math.random() * (max - min) + min;
// random(20,80);

// random=({max,min})=>
const random = (atributos) => {
    const {min, max} = atributos;
    return Math.random() * (max - min) + min;
};

let maxYMin = {
    max: 200,
    min: 100
};
random(maxYMin);

// console.log(random({ max: 300, min: 220},));