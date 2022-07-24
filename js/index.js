//uso del FOR
//suma la cantidad de numeros naturales que el usuario elija
let sum = 0
let numero = prompt("Elija un numero del 1 al 100")
for (let i = 1; i <= numero; i++) {
    sum += i; 
}

console.log("La suma de los numeros naturales hasta el", numero, "es de ", sum)


//uso del WHILE
//suma todos los numeros positivos que el usuario ingrese, cuando el mismo ingresa uno negativo, el ciclo se corta.
let suma = 0
let number = parseInt(prompt('Ingrese un numero: '))

while(number >= 0) {
    suma += number
    number = parseInt(prompt('Ingrese un numero: '));
}


console.log("La suma de los numeros ingresados es ", suma)