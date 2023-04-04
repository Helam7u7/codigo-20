//> Existe dentro de js el document -- este atributo me permite
//> obtener elementos desde html ..
//> Obtener elementos en base a su etiqueta

//> tag = etiqueta
//> id = identificador
//> class = clases

//> selectores ---   5 selectores...

//> como tengo 4 elementos con el tagname input esto será un array de inputs

const inputs = document.getElementsByTagName("input");
console.log("Esto son los inputs", inputs);

//> Recordemos que input es un HTMLcollection
//> Para poder ser iterado debemos convertirlo en array
//> se usa el Array.from para convertir el collection en array

const newInputs = Array.from(inputs);
console.log("newInputs", newInputs);

//> Iteramos la variable inputs con map

newInputs.map((newInput) => {
  console.log("newInputs", newInput);
});

const form = document.getElementsByClassName("formulario");
console.log("Este es form", form);

//> acceder al boton

const button = document.getElementsByClassName("btn_registro");
const divContent = document.getElementsByTagName("div");
console.log("divcontent", divContent);
const newDivContent = Array.from(divContent);
console.log("newDivcontent", newDivContent);
newDivContent.forEach((element) => {
  console.log(element);
});

//----------------------------------------------

const inputPassword = document.getElementById("input_password");
console.log(inputPassword);

//> de que forma accedemos al value al elemento capturado?
inputPassword.style.backgroundColor = "#f01";
console.log(inputPassword.value);

const inputName = document.getElementById("input_name");
inputName.style.backgroundColor = "#7CC38E";
inputName.style.borderRadius = "5px";
inputName.style.border = "none";
inputName.style.padding = ".5rem";

const inputLastName = document.getElementById("input_lastname");
inputLastName.style.backgroundColor = "#7C8CC3";
inputLastName.style.borderRadius = "5px";
inputLastName.style.border = "none";
inputLastName.style.padding = ".5rem";

const inputFullName = document.getElementById("full_name");
inputFullName.style.backgroundColor = "#BA8263";
inputFullName.style.borderRadius = "5px";
inputFullName.style.border = "none";
inputFullName.style.padding = ".5rem";
