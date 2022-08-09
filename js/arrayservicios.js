const servicios = []  //declaro un array vacio

class Servicio {                             //genero una clase que creara los objetos que iran a mi array
    constructor(tipo, periodo, tarifa){
        this.tipo = tipo
        this.periodo = periodo
        this.tarifa = tarifa
    }
}

function generadorServicios () {                         //genero un objeto y lo añado a mi array
    servicios.push(new Servicio ("carpa", "dia", 2000))
    servicios.push(new Servicio ("carpa", "semana", 10000))
    servicios.push(new Servicio ("carpa", "quincena", 25000))
    servicios.push(new Servicio ("carpa", "mes", 55000))
    servicios.push(new Servicio ("carpa", "temporada", 140000))
    servicios.push(new Servicio ("sombrilla", "dia", 1000))
    servicios.push(new Servicio ("sombrilla", "semana", 5000))
    servicios.push(new Servicio ("sombrilla", "quincena", 15000))
    servicios.push(new Servicio ("sombrilla", "mes", 25000))
    servicios.push(new Servicio ("sombrilla", "temporada", 70000))

}

generadorServicios()

let tarifaActualizada = servicios.map(servicio=>{     //Utilizo el metodo map para recorrer mi array y actualizar las tarifas en un 60% por inflacion
    return{
        tipo: servicio.tipo,
        periodo: servicio.periodo,
        tarifa: servicio.tarifa*1.6
    }
})

console.table(tarifaActualizada)






