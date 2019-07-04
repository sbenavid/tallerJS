// Los arreglos son componentes muy importantes en el lenguaje
// Arreglos con tipos escalares

var numeros = [3,13,8,5,3,2,9];
console.log(numeros);
console.log(numeros[4])

// // Agregar un nuevo elemento
numeros.push(30);
console.log(numeros);

// // SORT
var fruta = ['melón','sandía','zapote','fresa','platano']
console.log(fruta.sort());
// reverse sort
console.log(fruta.reverse());

numeros.push(8)
// // numeric sort
numeros.sort(function(a, b) { return a - b});
console.log(numeros);

// // Arrow function in sort
// numeros.sort((a,b) => { a - b})
// console.log(numeros);

// // FOR (antiguo)
var i
for (i = 0; i<numeros.length; i++) {
    console.log(numeros[i])
}

// // EVERY
// // revisa que todos los elementos de un arreglo aprueben una prueba (funcion)
function mayorEdad(edad) {
    return edad >= 18;
}

const rucos=[36, 41, 48, 50,80, 90]
console.log(rucos.every(mayorEdad))
rucos.pop()
console.log(rucos)

// // REMOVE duplactes
// // const uniq = [...new Set(numeros)];
// // console.log(uniq)

// // FOREACH
// // recorre todos los elementos de un arreglo
console.log('inicia foreach')
numeros.forEach(numero => console.log(numero));

// // MAP
// // supongamos el siguiente dataset
const jugadores = [
    { num: 10, nombre: 'Messi', edad: 28, posicion: 'ataque'},
    { num: 1, nombre: 'Ochoa', edad:30, posicion: 'defensa'},
    { num: 7, nombre: 'Cristiano', edad:31, posicion: 'ataque'},
    { num: 4, nombre: 'Thiago', edad: 27, posicion: 'defensa'}
];
console.log(jugadores)
console.log(jugadores[2].nombre)

// Como obtenemos solo los nombres de las camisetas?

const nombres = jugadores.map(player => player.num);
console.log(nombres);

// se puede mapear dos elementos?
const dosElementos = jugadores.map(player => 
    {
        return (
            {
                numeroCamiseta: player.num,
                nombreFutbolista: player.nombre
            }
        )        
    }
)
console.log(dosElementos)

// // REDUCE
const totalEdad = jugadores.reduce((acc,futbolista) => 
                    acc + futbolista.edad, 0)
console.log(`total edad: ${totalEdad}`);

const viejo = jugadores.reduce((oldest, jugador) => {
    return (oldest.edad || 0) > jugador.edad ? oldest : jugador;
}, {})

console.log(viejo)

// // FILTER
const defensa = jugadores.filter(futbolista => 
    futbolista.posicion === 'defensa')
console.log('a la defensa...')
console.log(defensa)


const equipo = [
    { num: 10, 
        nombre: 'Messi', 
        edad: 28, 
        experiencia: 8, 
        efectividad:0.45, 
        promedioGoles: 1.8, 
        posicion: 'ataque'},
    { num: 1, 
        nombre: 'Ochoa', 
        edad: 30, 
        experiencia: 4, 
        efectividad:0.33,  
        posicion: 'defensa'},
    { num: 7, nombre: 'Cristiano', edad:31, efectividad:0.45, promedioGoles: 1.3, posicion: 'ataque'},
    { num: 9, nombre: 'Raul', edad:29, efectividad:0.24, promedioGoles: 0.8, posicion: 'ataque'},
    { num: 4, nombre: 'Thiago', edad: 27, experiencia: 4.5, posicion: 'defensa'},
    { num: 8, nombre: 'Burrito', edad: 33, experiencia: 5, efectividad:0.33, recuperacion:0.4, posicion: 'defensa'},
]
console.log(equipo)

// // promedio de goles por plantel
console.log('-----------')
const ofensivos = equipo.filter(jug => jug.posicion === 'ataque')
console.log(ofensivos)

const conversiones = ofensivos.map(jugador => jugador.promedioGoles)
console.log('conversiones', conversiones)

const promedioPersonal = conversiones.reduce((acc, prom) => acc + prom, 0)
console.log('suma=', promedioPersonal)

const sumaPlantel = equipo
                    .filter(player => player.posicion === 'ataque')
                    .map(atacante => atacante.promedioGoles)
                    .reduce((acc, promedio) => acc + promedio, 0)
console.log('suma plantel', sumaPlantel.toPrecision(2))                


var alumno = [
    { nombre: 'Juanito', anio: 2003, mate: 7, lengua: 9 },
    { nombre: 'Luisa', anio: 1999, mate: 9, lengua: 8 },
    { nombre: 'Andres', anio: 2001, mate: 8.5, lengua: 8.5 },
    { nombre: 'Pepito', anio: 2005, mate: 8, lengua: 7 }
]

console.log(alumno)

// Ejercicio: 
// - Ordenar alfabeticamente 
// - Ordenar por año de nacimiento, primero los más jóvenes
// - Encontrar el alumno que tiene mejor calificacion en mate.
// - Encontrar el alumno con mejor calificación en español
// - Promedio general de aprovechamiento para todo el salon
// - Quién es el alumno más consistente (su calificacion tiene poca varianza entre materias)
// - Agregar un atributo adicional para el numero de faltas, darle un valor aleatorio [0-5]
// - Indicar quienes reprobaron por faltas, si el criterio es 5 o más faltas para reprobar.
