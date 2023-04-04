const numeros = [5, 20, 12, 6, 80, 9, 61];

/**
 * > [].forEach((elemento,index?,arreglo?)=>{})
 */
numeros.forEach((elemento, index) => {
  console.log("Elemento", elemento);
  console.log("index", index);
});

const precios = [52.1, 80, 90.5, 23.5, 45.5];
/**
 * > [].map((elemento,index?,arreglo?) => {});
 */
// > Codigo para incrementar 5 so a cada precio
const nuevosPrecios = precios.map((precio) => {
  return precio + 5;
});
console.log("nuevos precios", nuevosPrecios);

// > ¿Qué sucede si no retorno todos los elementos?
// > ejercicio para incrementar en 5 so los precios mayores a 60 so

const nuevosPrecios1 = precios.map((precio) => {
  if (precio > 60) {
    return precio + 5;
  }
  return precio;
});
console.log("nuevos precios > 60", nuevosPrecios1);

const products = [
  {
    name: "Widget",
    price: 39.99,
    code: "MNO345",
    color: "red",
  },
  {
    name: "Gadget",
    price: 29.99,
    code: "DEF456",
    color: "yellow",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "DEF456",
    color: "purple",
  },
  {
    name: "Doohickey",
    price: 29.99,
    code: "MNO345",
    color: "green",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "JKL012",
    color: "purple",
  },
];

// Ejercicio para mapear los productos y agregar a cada objeto
// el atributo "key" cuyo valor debe ser la posición en la que se encuentra
// dicho producto

const nuevosProductos = products.map((item, index) => {
  //  Forma 1 extendida
  // const nuevoItem = {
  //   name: item.name,
  //   price: item.price,
  //   code: item.code,
  //   color: item.color,
  //   key: index,
  // };
  // return nuevoItem;
  const nuevoItem = {...item, key: index};
  return nuevoItem;
});

//forma directa del ejercicio anterior
const nuevosProductoV2 = products.map((item, index) =>({
  ...item,
  key:index
}))

console.log("nuevos Productos", nuevosProductos);
console.log("nuevos Productos V2", nuevosProductoV2);
