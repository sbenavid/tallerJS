function Prender() {
    if (this.chocado) {
      return `El ${this.nombre} no puede prender porque está chocado`
    } else
    {
      if (this.prendido) {
        return `El ${this.nombre} ya está prendido`
      } else
      {
        this.prendido = true
        return `Prendiendo ${this.nombre}...\nEl ${this.nombre} está prendido`
      }
    }
  
  }
  
  function Correr() {
    if (!this.prendido) {
      return `El ${this.nombre} no está prendido`
    } else if  (!this.estacionado) {
        return `El ${this.nombre} ya está corriendo`
    } else
      {
        this.estacionado = false
        return `Acelerando ${this.nombre}...\nEl ${this.nombre} está corriendo`
      }
    }

  
  function Estacionarse() {
    if (this.estacionado) {
      return `El ${this.nombre} ya esta estacionado`
    } else
    {
      this.estacionado = true
      return  `Estacionando ${this.nombre}...\nEl ${this.nombre} está estacionado`
    }
  }
  
  function Apagar() {
    if (!this.prendido) {
      return `El ${this.nombre} ya está apagado`
    } else
    {
      this.prendido = false
      return `Apagando ${this.nombre}...\nEl ${this.nombre} está apagado`
    }
  }
  
  function Chocar() {
    this.chocado = true
    return `El ${this.nombre} chocó`
  }
  
  function Automovil(nombre, puertas, anio, color, fabricante, cilindrada = 4) {
    this.nombre = nombre
    this.puertas = puertas
    this.anio = anio
    this.color = color
    this.fabricante = fabricante
    this.cilindrada = cilindrada
    this.estacionado = true
    this.prendido = false
    this.chocado = false
    this.prender = Prender
    this.correr = Correr
    this.estacionar = Estacionarse
    this.apagar = Apagar
    this.chocar = Chocar
  }
  
  const vocho = new Automovil('Vocho', 2, 1970, 'azul celeste', 'Volkswagen')
  
  console.log(vocho)
  
  console.log(vocho.prender())
  console.log(vocho.estacionar())
  console.log(vocho.apagar())
  
  const charger = new Automovil('General Lee', 2, 1976, 'naranja', 'Dodge', 8)
  
  console.log(charger)
  
  console.log(charger.prender())
  console.log(charger.correr())
  console.log(charger.estacionar())
  console.log(charger.apagar())
  
  vocho.color = 'blanco'
  console.log(vocho)