const vehiculo = {
  marca: "Audi",
  modelo: "q5",
  mantenimientos: [
    {
      fecha: "05/05/23",
      kilometraje: 17000,
    },
    {
      fecha: "05/05/24",
      kilometraje: 27000,
    },
  ],
  imprimirMarcaYModelo: function () {
    console.log("this", this);
    console.log("marca", this.marca);
    console.log("modelo", this.modelo);
  },
};

console.log("vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

//> Imprimer segundo mantenimiento
console.log('segundo mantenimiento', vehiculo.mantenimientos[1]) ;

//> No copaiar objetos de la siguiente manera
const vehiculo2 = vehiculo;
vehiculo2.modelo = "q3";

console.log("vehiculo1", vehiculo);
console.log("vehiculo2", vehiculo2);

//> Función que crea objetos
function creadorDeVehiculos(
    pMarca='', 
    pModelo='', 
    pAnio=0, 
    pMantenimientos=[]
  ) {
  const vehiculoGenerico = {
    marca: pMarca,
    modelo: pModelo,
    anio: pAnio,
    mantenimientos: pMantenimientos
  };
  return vehiculoGenerico;
} 

//> función creadora de mantenimientos con los siguientes atributos
/**
 * fecha: ""
 * kiiometraje: 0
 * aceite: false
 */

function creadorDeMantenimientos (
  pFecha = "",
  pKilometraje = 0,
  pAceite = false
  ) {
  return {
    feha: pFecha,
    kilometraje: pKilometraje,
    aceite: pAceite
  };
}

const mazdaCX3 = creadorDeVehiculos('Mazda','CX3',2023,[
  creadorDeMantenimientos('05/05/23',15000,true),
  creadorDeMantenimientos('05/05/24',25000,true)
]);
const bmwX4 = creadorDeVehiculos('BMW', 'X4', 2021, []);
const mercedesGLA450 = creadorDeVehiculos();

console.log("mazda",mazdaCX3);
console.log("bmw",bmwX4);
console.log("mercedesGLA450", mercedesGLA450);