//> Objetos 
const persona = {
  nombre: 'Yuli',
  dni: '123456789',
  telefono: '97889485',
  idiomas: ['Español', 'Inglés', 'Francés']
};

console.log('telefono', persona.telefono);
console.log('idiomas', persona.idiomas);

//> Inyectando un nuevo idioma

persona.idiomas.push('Aymara');
console.log('persona actualizada', persona);

//> Modificando teléfono
persona.telefono = '999999';
console.log('persona actualizada', persona);

//> Agregando un nuevo atributo
persona.direccion = {};
persona.direccion.calle = 'Lima'
persona.direccion.distrito = 'Comas'
persona.direccion.ciudad = 'Belaunde'