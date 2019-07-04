function ParImpar(numero) {
    if(numero % 2 === 0)
    {
      console.log("El numero es par");
    }
    else
    {
      console.log("El numero es impar");
    }
   }
   
   function Color(cadena){
    if(cadena.toLowerCase() === "amarillo")
    {
      console.log("El color es amarillo");
    }
    else
    {
      console.log("El color no es amarillo");
    }
   }
   
   console.log(ParImpar(3))
   console.log(Color('rojo'));