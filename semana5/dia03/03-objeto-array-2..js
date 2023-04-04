/**
 * > [].filter((elemento, index?, arreglo?)=>{})
 */

const numeros = [1, 50, 2, 78, 9, 63, 4, 6, 14, 15];
// > Filtrar numeros pares

const pares = numeros.filter((n) => {
  if (n % 2 == 0) {
    return n;
  }
});
console.log("pares", pares);

// Forma directa
const paresV2 = numeros.filter((n) => n % 2 === 0);

// Filtrar a los usuarios que tienen gmail en su correo
let users = [
  {
    id: 1,
    email: "george.bluth@gmail.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 50,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 35,
  },
  {
    id: 4,
    email: "eve.holt@gmail.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 15,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 36,
  },
];

const correoValidacion = users.filter((gmail) =>
  gmail.email.includes("@gmail")
);
console.log("usuariosGmail", correoValidacion);

const usuarioGmailV2 = users.filter(({ email }) => email.includes("@gmail"));
console.log("usuariosGmail", usuarioGmailV2);

/**
 * >[].find((elemento,index?,arreglo?)=>{})
 */
// Encontrar al usuasrio con id = 5

const userId5 = users.find((user) => user.id === 5);
console.log("userId5", userId5);
const userId5V2 = users.filter((user) => user.id === 5);
console.log("userId5V2", userId5V2);

/**
 * >[].reduce((sumatoria,elementoActual)=>{return la sumatoria + el nuevo elemento})
 */
// Ejercicio para obtener suma de tosos los elementos números  del arreglo números

const total = numeros.reduce((sumatoria, elementoActual) => {
  return sumatoria + elementoActual;
});
console.log("Total sumatoria", total);

/**
 * [].splice(posición,cantidadElementosAEliminar,elementosAEliminar)
 */

//Eliminar al usar de la posición 4, y en su lugar, incertar un  nuevo usuario
users.splice(4, 1, {
  age: 31,
  first_name: "Helam",
  first_name: "Rojas",
  id: 100,
  avatar: "",
  email: " helam@ffjsa.asj",
});
