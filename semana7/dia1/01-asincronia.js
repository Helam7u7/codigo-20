console.log(1);
console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 2000);
// setTimeout(() => {
//   console.log(4);
// }, 1000);

// function obtenerDatos(dni, callback) {
//   setTimeout(() => {
//     console.log("Helam");
//   }, 1000);
// }
// obtenerDatos("10101010", () => {});

function obtenerDatos(dni, callback) {
  setTimeout(() => {
    callback("Helam");
  });
}
obtenerDatos("10101010", (nombre) => {
  console.log(nombre);
});
console.log(5);
console.log(6);
