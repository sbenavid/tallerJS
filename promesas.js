// Beneficios de las promesas:
//     - Código más claro de leer. 
//     - Manejo eficiente de operaciones asincronas. 
//     - Mejor control de flujo en logica asincrona.
//     - Manejo de errores claro y directo (errorHandling)

// Una promesa tiene 4 estados:
//     - fulfilled: Acción relacionada al cumplimiento de una promesa. 
//     - rejected: Acción asociada a una promesa fallida. 
//     - pending: Promesa pendiente, aún no ha sido cumplida o fallida. 
//     - settled: La promesa llegó a término, ya sea por cumplimiento o rechazo. 

// Principales aplicaciones de las promesas:
// - Manejo asíncrono de eventos. 
// - Peticiones http asíncronas (http request)

// Una promesa se puede crear usando un constructor "Promise"
// Sintaxis:
var promise = new Promise(function(resolve, reject){
     //do something
});

// Ejemplo de una promesa muy simple que siempre se va a cumplir
// a menos que 'x' o 'y' cambien. Implemntación con callback.
const promesa = new Promise(function(resolve, reject) { 
    const x = 'jueves'; 
    const y = 'jueves';
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
    
  // invocacion de la promesa y manejo de respuesta con callbacks.
  promesa. 
      then(function () { 
          console.log('Hoy es jueves!'); 
      }). 
      catch(function () { 
          console.log('No se que día será hoy'); 
      }); 


// Definición de una promesa muy simple que NUNCA se va a cumplir
// a menos que cambie el equipo. Implementación con Arrow Functions.
const promesaCampeonato = new Promise((resolve, reject) => {
    const equipo = 'america'
    if (equipo === 'cruz azul') {
        resolve();
    } else {
        // Creacion de un error definido por usuario (programador)
        const ax = new Error('Ese equipo nunca sera campeon!')
        reject(ax);
    }
});

// Invocación de la promesa y manejo de respuesta con ArrowFunctions
promesaCampeonato
    .then(()=> {
        console.log('Somos campeones');
    })
    .catch((e) => {
        console.log(`hubo un error! ${e}`)
    })

