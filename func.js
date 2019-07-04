const numero = '8'

if (numero == 8) {
    console.log('soy ocho')
}

if (numero == "8") {
    console.log('tambien soy ocho')
}

if (parseInt(numero,10) === 8) {
    console.log("soy ocho numerico")
} else {
    console.log('no se que soy')
}

if (numero === 8) {
    console.log('soy ocho')
}

const mayorEdad = numero >= 18 ? true : false

console.log(`Es mayor de edad? ${mayorEdad}`)


// Arrow function
const cuadrado = (num) =>  num * num

console.log(cuadrado(4))
