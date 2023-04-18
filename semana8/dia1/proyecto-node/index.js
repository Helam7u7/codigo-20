// const axios = require("axios"); forma antigua sin type module
import axios from "axios";
import { getNameAndAbilities, saludar as saludarv2 } from "./utils.js";
import miSuma from "./utils.js"; //> Export default se guara en una variable

console.log("Hola Mundo, Proyecto Nuevo!");

axios.get("https://pokeapi.co/api/v2/pokemon/4/").then((data) => {
  const pokemon = getNameAndAbilities(data.data);
  console.log(pokemon);
});
console.log(miSuma(5, 55));
saludarv2();
