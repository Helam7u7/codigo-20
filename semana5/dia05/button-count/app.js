const btnIncremento = document.querySelector("#btn-increase").value;
const btnDecremento = document.querySelector("#btn-decrease").value;
let elementoValue = document.querySelector("#value").value;

const fnIncremento = (operador) => {
  if (operador === "+") {
    +elementoValue++;
  }
};
