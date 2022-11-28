/*Primer pre entrega : Consiste en sacar turno para barberia en donde tenes que ingresar nombre 
y edad para que se calcule cuanto saldria el corte si sos mayor o menor y que
el sistema te diga cuanto tiempo de espera tenes*/

let nombre = ""
let edad = ""
let tiempoCorte = 30

for (let i = 0; i <= 5; i++) {

    let nombre = prompt("ingresar tu nombre para solicitar turno")

    let edad = prompt("ingresa tu edad")

    const CORTE = tiempoCorte * i 
    
    if (edad >= 18 ){
        alert("Turno nº " + i + "\nNombre :" + nombre + "\nTu corte sale: $1000" + "\n" + CORTE + "min de espera")
    }
    else if (edad < 18)
    {
        alert("Turno nº " + i + "\nNombre :" + nombre + "\nTu corte sale: $500" + "\n" + CORTE + "min de espera")
    }
   if (i==5) {
    alert( "No hay mas turnos disponibles para hoy" )
   }
 
}