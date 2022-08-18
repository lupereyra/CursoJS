const periodos = ["dia", "semana", "quincena", "mes", "temporada"]
const tipos = ["carpa", "sombrilla"]

function cargarPeriodos(){
    const selectServi =document.getElementById("selectServi")
}         selectServi.innerHTML = ""
periodos.forEach(periodo => {
    const option = document.createElement("option")
          option.innerText = periodo
          selectServi.append(option)  
})  
cargarPeriodos()

function cargarTipos(){
    const selectTipo =document.getElementById("selectTipo")
}         selectTipo.innerHTML = ""
tipos.forEach(tipo => {
    const option = document.createElement("option")
          option.innerText = tipo
          selectTipo.append(option)  
})  
cargarTipos()


let boton = document.getElementById("btnConsulta")
boton.onclick = () => {alert("En breve le enviaremos toda la informacion!")}