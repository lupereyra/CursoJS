//Balneario

let servicioElejido
function mostrarServicios(){ 
    alert("Bienvenido al balneario El Soleado!")
    let servicios = prompt("Que servicio desea adquirir hoy? \n1)Alquiler de carpa \n2)Alquiler de sombrilla")
    while(servicios!= 1 && servicios!= 2){
        alert("La opcion ingresada es incorrecta")
        servicios = prompt("Que servicio desea adquirir hoy? \n1)Alquiler de carpa \n2)Alquiler de sombrilla")
    } 
    let periodo = prompt("¿Que periodo de tiempo queres cotizar? \n1)Temporada completa \n2)Mes\n3)Quincena\n4)Dia")
    while(periodo!= 1 && periodo!= 2 && periodo!= 3 && periodo!= 4){
        alert("La opcion ingresada es incorrecta")
        periodo = prompt("¿Que periodo de tiempo queres cotizar? \n1)Temporada completa \n2)Mes\n3)Quincena\n4)Dia")
    }
    
    if(servicios == 1){
        servicioElejido = "carpa"

    } else{
        servicioElejido = "sombrilla"

    }
    switch(periodo){
        case "1":
            return "temporada"
        case "2":
            return "mes"
        case "3":
            return "quincena"
        case "4":
            return "dia"        
    }
}


function tarifaCotizada(servicios, periodo){
    if(servicios === "carpa" && periodo ==="dia"){
        return 2000
    }else if(servicios === "carpa" && periodo ==="quincena"){
        return 25000
    }else if(servicios === "carpa" && periodo ==="mes"){
        return 55000       
    }else if(servicios === "carpa" && periodo ==="temporada"){
        return  140000 
    }else if(servicios === "sombrilla" && periodo ==="dia"){
        return  1000
    }else if(servicios === "sombrilla" && periodo ==="quincena"){
        return 15000
    }else if(servicios === "sombrilla" && periodo ==="mes"){
        return 25000 
    }else {
        return 70000
    }
        
}


let periodoSeleccionado = mostrarServicios()
let tarifaFinal = tarifaCotizada(servicioElejido, periodoSeleccionado)

alert("La tarifa final correspondiente a una " + servicioElejido + " por " + periodoSeleccionado + " es de : $"+ tarifaFinal +" (IVA incluido)")