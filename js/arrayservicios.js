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

//let ajusteInflacion = 1.6

//let actualizarTarifa = servicios.map(servicio=>{     //Utilizo el metodo map para recorrer mi array y actualizar las tarifas en un 60% por inflacion
//    return{
//        tipo: servicio.tipo,
//        periodo: servicio.periodo,
//        tarifa: servicio.tarifa*ajusteInflacion
//    }
//})

//console.table(actualizarTarifa)




//let solicitud = prompt("Que servicio desea adquirir hoy? \n1)carpa \n2)sombrilla")
//while(solicitud!= 1 && solicitud!= 2){
//        alert("La opcion ingresada es incorrecta")
//        solicitud = prompt("Que servicio desea adquirir hoy? \n1)carpa \n2)sombrilla")
//    } 

//if(solicitud == 1){
//        servicioElejido = "carpa"

//    } else{
//        servicioElejido = "sombrilla"

//}


//let servSolicitado = servicios.filter(el => el.tipo == servicioElejido)   //utilizo filter para mostrar solo las tarifas del servicio requerido por el usuario

//console.table(servSolicitado)


//Manipulando el DOM

function crearLista(){
    const lista = document.getElementById("lista")
          lista.innerHTML =  "<li>Utilizacion de los vestuarios</li><li>Recreacion para los niños</li><li>Servicio de bar en las carpas/sombrillas</li>"  
}

crearLista()

// creo un elemento <p> y lo inserto antes del elemento con ID "lista"
document.body.onload = addElement;

function addElement () {
  // crea un elemento <p> y añado texto
  var nuevoP = document.createElement("p");
  var nuevoContenido = document.createTextNode("Todas las tarifas incluyen:");
  nuevoP.appendChild(nuevoContenido); //añado texto al p creado.

  // añado el elemento creado y su contenido al DOM
  var lista = document.getElementById("lista");
  document.body.insertBefore(nuevoP, lista);
}


//for(const servicio of servicios){
// let contenedor = document.createElement("div");
//    //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h3> TIPO: ${servicio.tipo}</h3>
//                         <p>  Periodo: ${servicio.periodo}</p>
//                         <b> $ ${servicio.tarifa}</b>`;
    //Agregamos el contenedor creado al body
//document.body.appendChild(contenedor);
//}



//Hago uso de los template strings para armar mi tabla de servicios
function cargarTablaServicios(){
    const cuerpo = document.getElementById("cuerpo")
    servicios.forEach(servicio =>{
        cuerpo.innerHTML +=`<tr>
                              <td>${servicio.tipo}</td>
                              <td>${servicio.periodo}</td>
                              <td>${servicio.tarifa}</td>
                           </tr>`
    })
}

cargarTablaServicios()

