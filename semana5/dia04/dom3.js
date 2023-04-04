//> js podemos y también escribir  desde este documento

document.write("Hola Mundo");

//> Vamos a crear una lista usando js
//> 1 insertar una lista dentro del div #container-list
//> 2 insertar elementos dentro de list

//> paso 1 captura el elemento que usurás
const containerList = document.querySelector("#container-list");
//> dentro de js existe una función que se llama createElement
//> Nos permite crear un elemento

//> si creas elementos
const ul = document.createElement("ul");
ul.className = "lista";

//> 3 iterar debe combertirlo en array
const inputs = Array.from(document.querySelectorAll("input"));
inputs.map((input) => {
  const li = document.createElement("li");
  const contenido = document.createTextNode(input.value);
  li.appendChild(contenido);
  ul.appendChild(li);
});

console.log(ul);
containerList.appendChild(ul);
