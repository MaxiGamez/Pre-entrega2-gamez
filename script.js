// Bienvenida

let Bienvenida = ["Bienvenido a barberia piramid"]
alert (Bienvenida)

/*
Sistema de turnos para peliqueria (ingresa con que profecional se atiende, en la consola muestra la lista de profecionales y el tiempo de espera entre corte y corte )
Luego le muestra al usuario el numero de corte , el nombre , el costo , el tiempo de espera y el profesional que lo atiende

Si desea probar el codigo de forma rapida poner 1 o 2 de forma entercalada en los pront y tocar enter para que se llenen los parametros rapido 
*/ 

// declaracion de variables 

class cliente {
    constructor(id, nombre, precio, demora, profecional) {
        this.id  =(id);
        this.nombre  = nombre.toUpperCase();
        this.precio  =(precio);
        this.demora  =(demora);
        this.profecional  =(profecional);
    }
    

}
let numJuan = 0
let numMariano = 0
let tiempoCorte = 30 
const clientesMariano = [];
const clientesJuan = [];

// inicio de sistema turnos para peluqueria

for (let i = 0; i <= 9; i++) {
  numero = prompt("elegir profecional escribiendo 1 o 2 dependiendo su eleccion \n1. Mariano\n2. Juan")
  
    if (numero == 1) {
        alert("usted eligio a Mariano")
 

        clientesMariano.push(new cliente(1+numMariano, nombre = prompt("ingrese su nombre"), "$1000",i * tiempoCorte  +"m","Mariano"));
        numMariano ++

        alert("Turno nº " + i + "\nNombre :" + nombre + "\nTu corte sale: $1000" + "\n" + i * tiempoCorte + "min de espera" + "\nTe atiende : Mariano ")

    } else if(numero == 2){
        alert("usted eligio a Juan")
        
 
        
        clientesJuan.push(new cliente(1+numJuan, nombre = prompt("ingrese su nombre"), "$1000", i * tiempoCorte +"m","Juan"));
        numJuan ++

        alert("Turno nº " + i + "\nNombre :" + nombre + "\nTu corte sale: $1000" + "\n" + i * tiempoCorte+ "min de espera" + "\nTe atiende : Juan ")
    }
    else{
      alert("usten no eligio a nadie \nintente de nuevo")
      i--
    }
     
}

// visualizar clientes por profesional en consola

console.log("clientes de Juan \n--------------------------------------------------------------------------------------------------------------")
 for (const cliente of clientesJuan) {
     console.log(cliente.demora);
     console.log(cliente);
}
console.log("clientes de Mariano \n--------------------------------------------------------------------------------------------------------------")
for (const cliente of clientesMariano) {
    console.log(cliente.demora);
    console.log(cliente);
}

