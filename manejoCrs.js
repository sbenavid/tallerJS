// Funcion para consumir un WebService obteniendo el resultado
// de una lista de CRs
// - nombre
// - numero
// - domicilio
const getData = () => {
    // Definicion del endpoint donde se encuentra la data 
    const url = 'https://morning-lake-87711.herokuapp.com/crs'
    // Iniciar la petición de forma asyncrona, usando promesas 
    // (axios es una biblioteca especializada en peticiones http/https)
    // la peticion que se realiza es /GET
    axios.get(url)
        // hasta que se termine la peticion se cumple la promesa, el resultado
        // se referencia en "res". La respuesta indica headers, verbo, status de
        // respuesta y data.
        .then((res) => {
            // console.log(res)
            // descomposicion de la respuesta para obtener un arreglo
            // con la data.
            const {data} = res
            // console.log(data)
            // Se crea un arreglo nuevo, solo con el atributo "nombreCR", a partir
            // del arreglo "data". Al final de crear ese arreglo, se ordena
            // automaticamente con .sort()
            const arregloNombres = data.map((elem) => elem.nombreCR).sort()
            // console.log(arregloNombres)
            // Se muestra la cantidad de elementos del arreglo
            // accesando al DOM, con el párrafo identificado como "principal"
            document.getElementById("principal").innerHTML = `Mi arreglo tiene ${arregloNombres.length} elementos`;
            // llamada a función que mustra los resultados en pantalla
            escribreNombreCr(arregloNombres)
        })
        // si la promesa no se cumple, se atrapa en .catch()
        // se implementa una función implícita (implicit arrow function)
        // para generar una alerta avisando de falla en la obtencion de data
        // y mostrar un "chale!" en la pantalla de usuario
        .catch((err) => {
            console.log(err)
            document.getElementById("principal").innerHTML = `CHALE!`;
            alert('No pude obtener la data!')
        })
}

// Funcion para escribir en elementos html <li>Nombre 1</li><li>Nombre 2</li> ... (etc)
// los valores (string) almacenados en un <arreglo> que es argumento de entrada.
// la renderizacion (dibujar la pantalla) se usa accesando el DOM
const escribreNombreCr = (arreglo) => {
    // Se recorre individualmente cada elemento del arreglo, referenciado
    // como "element"
    arreglo.forEach(element => {    
        // se define un nuevo elemento html <li></li>                
        const node = document.createElement("li");
        // se define un nuevo elemento de texto y se inicializa
        // con el valor del elemento actual del arreglo
        const nuevoNodo = document.createTextNode(element);
        // el elemento html <li></li> previamente construido, es
        // incializado con el texto del elemento actual del arreglo
        node.appendChild(nuevoNodo);
        // se busca el html tag <ul> con id=listaCR y
        // se le agrega un hijo <li>
        // de tal forma que cada ciclo del forEach arma una estructura
        // equivalente a:
        // <ul>
        //   <li>nombre cr 1</li>
        //   <li>nombre cr 2</li>
        //   ... (etc)
        // </ul>
        document.getElementById("listaCR").appendChild(node);
    });
}
