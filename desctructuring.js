const persona = {
    nombre: 'Brenda',
    edad: 26,
    ubicacion: {
        ciudad: 'Monterrey',
        temp: 36
    }
}

// console.log(`${persona.nombre} tiene ${persona.edad} años`)
// const { nombre, edad } = persona;
// console.log(`Se llama ${nombre} y tiene ${edad} años`)

const { nombre, edad: age = 21 } = persona
console.log(`Se llama ${nombre} y tiene ${age} años`)

// // const {ciudad,temp: temperatura} = persona.ubicacion
const {ciudad,temp: temperatura} = persona.ubicacion

if (ciudad && temperatura) {
    console.log(`la temperatura en ${ciudad} es ${temperatura} grados`)
}

// // Array destructuring
const direccion = ['Av Humberto Lobo 820', 'Col. del valle', , 'San Pedro']
// confuso
// console.log(`Estas en ${direccion[0]} cp: ${direccion[2]}`)

// const [calle, colonia, cp, poblacion] = direccion
// console.log(`Estas en ${calle} cp: ${cp}`)

// const [, , cp ] = direccion
// console.log(`codigo postal = ${cp}`)

const [calle, cp = '66220', uno, dos, tres, cuatro] = direccion

console.log(`Estas en ${calle} cp: ${cp}`);
console.log(cuatro)

const actor = {
    nombreReal: 'Raul Martinez',
    nombreArtistico: 'el santo',
    peliculas: [
        { 
            titulo: 'la vengaza de las momias',
            produccion: 1980,
            director: 'Gonzalez Iñaritu'
        },
        {
            titulo: 'liberando a willy',
            produccion: 1993,
            director: 'Tarantino'
        }
    ]
}

console.log(actor)
