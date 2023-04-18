export const getNameAndAbilities = (pokemon) => {
  const result = {
    name: pokemon.name,
    abilities: pokemon.abilities.map((abi) => {
      return abi.ability.name;
    }),
  };
  return result;
};

export const saludar = () => console.log("buenas noches");

const suma = (a, b) => a + b;
/**
 *> -export default, exporta una funcion o variables
 *> por defecto por archivo
 *> -Por archivo se permite max 1 exportación por defecto
 */
export default suma;
