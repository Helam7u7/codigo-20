//> querySelector y querySelectorAll
//> hermanos menores ..

//> ambas funciones me permiten poder usar elementos html

//> con clases

const inputName = document.querySelector(".input_name");
console.log(inputName.value);

//> con id
const inputPassword = document.querySelector("#input_password");
console.log(inputPassword.value);

//> con tagname

const form = document.querySelector("form");
console.log(form);

//> esto en particular retorna un Nodelist y este es compatible con forEach

const inputs = document.querySelectorAll("input");
console.log(inputs);
//> quiero filtrar e iterar este nodelist
const arrayInputsText = [];

inputs.forEach((input) => {
  if (input.type === "text") {
    arrayInputsText.push(input);
  }
});
console.log(arrayInputsText);

//-----------------------------------

const arrayConvertido = Array.from(inputs);
console.log(arrayConvertido);

const arrayFilter = arrayConvertido.filter((input) => input.type == "text");
console.log(arrayFilter);
