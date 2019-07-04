// Definicion basica de un objeto
var perro = {
  patas: 4,
  color: 'cafe',
  edad: 2
}

// impresion de las propiedades
console.log(perro)

// Definicion de metodos asociados a un objeto
var gato = {
  patas: 4,
  color: 'negro',
  raza: 'angora',
  gracia: function maullar() {
    console.log('miau, miau')
  }
}

// definicion completa del objeto
console.log(gato)

// Acceso a propiedades via 'dot notation'
console.log(`el color de mi perro es ${perro.color}`)

perro.patas = 3
console.log(perro)

// Acceso a propiedades por nombre de atributo
console.log(gato['raza'])

gato['raza'] = 'electrico'
console.log(gato)

// Acceso a metodos
console.log(gato.gracia())

// no puedo instanciar con la definicion actual...
// const firulais = new perro()

// Se requiere hacer un constructor para el objeto
function Mamifero(especie, edad, color, patas) {
  this.especie = especie,
  this.edad = edad,
  this.color = color,
  this.patas = patas 
}

const solovino = new Mamifero('perro', 2, 'negro', 4)
console.log(solovino.color)
const silvestre = new Mamifero('gato', 4, 'pinto', 4)
console.log(silvestre.edad)

console.log("Alias 'el negro' ")

















