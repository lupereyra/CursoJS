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
console.table(servicios)

let ajusteInflacion = 1.6

let actualizarTarifa = servicios.map(servicio=>{     //Utilizo el metodo map para recorrer mi array y actualizar las tarifas en un 60% por inflacion
    return{
        tipo: servicio.tipo,
        periodo: servicio.periodo,
        tarifa: servicio.tarifa*ajusteInflacion
    }
})

console.table(actualizarTarifa)



alert("Bienvenido al balneario El Soleado!")
let solicitud = prompt("Que servicio desea adquirir hoy? \n1)carpa \n2)sombrilla")
while(solicitud!= 1 && solicitud!= 2){
        alert("La opcion ingresada es incorrecta")
        solicitud = prompt("Que servicio desea adquirir hoy? \n1)carpa \n2)sombrilla")
    } 

if(solicitud == 1){
        servicioElejido = "carpa"

    } else{
        servicioElejido = "sombrilla"

}


let servSolicitado = servicios.filter(el => el.tipo == servicioElejido)   //utilizo filter para mostrar solo las tarifas del servicio requerido por el usuario

console.table(servSolicitado)


