function imprimir() {
  console.log("Hola desde js");
}

//---------------- Crear funcion de la calculadora
function calculadorHTML(operacion) {
  //> Obtener los valores de los inputs
  let numero1 = document.querySelector("#numero1").value;
  let numero2 = document.querySelector("#numero2").value;

  //> Validar que los datos no esten vacíos
  if (numero1 === "" || numero2 === "") {
    alert("Completa los campos");
    return;
  }
  //> una vez validado los campos debo hallar la operación
  //> necesito una variable que se encargue de guardar el resultado

  let resultado = 0;
  if (operacion === "+") {
    // - resultado = sumar(numero1 + numero2);
    resultado = sumar(numero1, numero2);
  }
  if (operacion === "-") {
    //- resultado = restar(numero1 - numero2);
    resultado = restar(numero1, numero2);
  }
  if (operacion === "*") {
    //- resultado = multiplicar(numero1 * numero2);
    resultado = multiplicar(numero1, numero2);
  }
  if (operacion === "/") {
    // - resultado = dividir(numero1 / numero2);
    resultado = dividir(numero1, numero2);
  }

  //> Para acabar debo mostrar el resultado en HTML
  const p = document.createElement("p");
  const value = document.createTextNode(resultado);
  p.appendChild(value);

  const contenedor = document.querySelector("#resultado");
  contenedor.appendChild(p);
}
