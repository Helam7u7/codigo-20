/**
 *> El uso de la setencia await sirve para:
 *> - esperar el resultado que retorna una promesa y guardarlo en una variable
 *> La sentecia await sólo se puede usar dentro de una función async
 */
const getProductos = async () => {
  const response = await axios.get("https://reqres.in/api/users/2");
  throw "mensaje de error";
  // return response.data;
};

console.log(1);
getProductos()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
console.log(2);
console.log(3);
console.log(4);

axios.get("https://reqres.in/api/users/2").then((response) => {
  console.log(response);
});

async function getUser() {
  const response = await axios.get("https://reqres.in/api/users/2");
  // console.log(response);
  return response.data;
}
getUser().then((data) => {
  console.log(("data getUser", data));
});

const getUserV2 = async () => {
  const response = await axios.get("https://reqres.in/api/users/2");
  // console.log(response);
  return response.data;
};
getUserV2().then((data) => {
  console.log(("data getUser", data));
});
