// impresion a consola
console.log('Hola mundo');

// declaracion de variable String
var nombre = 'Rulo'
// impresion a consola incluyendo el valor de una var
console.log(`El señor se llama ${nombre}`)

// reasignacion de valor a una variable
nombre = 'Choche'

console.log(`El señor se llama ${nombre}`)

// Definicion de una constante (var sin cambios)
const persona = 'Rodrigo'
console.log(`El señor se llama ${persona}`)

//No puedo reasignar un valor usando estatuto "const"
persona = 'Emmanuel'  

// Definicion de variables float
let pi = 3.1416
// definicion de variables enteras
var edad = 30

console.log(`Valor de pi=${pi}`)

// comparacion con operador "===" (revisa coincidencia de tipo y valor)
if (persona === 'Rodrigo') {
    let lentes = true
    console.log(`El desarrollador usa lentes? ${lentes}`)
    lentes = false
    console.log(`Ahora? ${lentes}`)
}

// declaracion de funcion en sintaxis clasica
function usalentes(integrante) {
    let moto = true
    if (integrante === 'Saul') {
        console.log(`trae moto ${true}`)
    } else {
        console.log('No trae')
    }
}

// redefinir una variable con un tipo distinto
pi = 'Amarillo'

// invocar funcion
usalentes('Saul')
