const dia = 1;
switch (dia) {
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miércoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  case 6:
    console.log("sábado");
    break;
  case 7:
    console.log("domingo");
    break;
  default:
    console.log("error");
}

/*
 * Operador ternario
*/ 

const edad = 19;

// edad > 18 ? console.log('mayor') : console.log('menor'):
console.log(edad >= 18 ? "mayor de edad" : 'menor de edad');