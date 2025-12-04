/*
persona = {
    "Nombre":"Emmanuel",
    "Edad":"19 años",
    "Nacimiento":"02-06-2006"
};

tag = ["Nombre", "Edad", "Nacimiento"];

for (let i = 0; i < tag.length; i++) {
    let tagSetup = tag[i];
    document.writeln(persona[tagSetup]);
}

do {
    var age = prompt(`Ingrese su edad para acceder!`);
    if (age < 18) {
        alert("No.")
        break;
    }
    for (let i = 0; i <= 10; i++){
        alert(`Proceso #${i} (completado).`);
    }
    age = 0;
} while (age >= 18);

const sumar = (a, b) => {
    a=parseInt(prompt("Primer valor a sumar"));
    b=parseInt(prompt("Segundo valor a sumar"));
    let r = a + b;
}

document.writeln(`Tu resultado fue "${sumar()}".`)
*/

/*
let promo = true;

function staff() {
    let age = prompt("Cuantos años tienes?");
    if (age >= 18){
        while (promo){
                alert("Felicidades!! Eres el primero en llegar, no tienes que pagar entrada.");
                promo = false
                while (promo == false){
                    alert("Lo siento, otro ya tomó la oferta, debes pagar 15$ para pasar.");
                    //staff();
            }
        }
    } else alert("Lo siento niño, solo se admiten adultos.");
}

staff() */

/*
class persona {
    movimiento = "caminando...";
    sonido = "hablando";
    constructor(nombre, edad){
        this.name = nombre;
        this.age = edad;
    }
}

let Emmanuel = new persona("Emmanuel", 19);
document.writeln(`Un nuevo humano ha sido creado, de nombre; ${Emmanuel.name}, y edad de; ${Emmanuel.age} años.</br></br>`);
document.writeln(`${Emmanuel.name} esta ${Emmanuel.movimiento}`);
*/

/*

class Dispositivo {
    constructor(color, peso, resolucion, camara, ram) {
        this.clr = color;
        this.pso = peso;
        this.res = resolucion;
        this.cam = camara;
        this.ram = ram;
    }

    Pwr(swt){
        alert("El celular está encendido");
    }

    Restrt(swt){
        alert("El celular se está reiniciando...");
    }

    Obturador(){
        let dt = prompt("Que desea realizar? (Foto/Video)");
        if (dt == "Foto" || dt == "foto"){
            alert("Foto tomada!");
        }
        else if (dt == "Video" || dt == "video"){
            let gb = prompt("Grabando...\n\nEscribe \"Stop\" para detener la grabacion.");
            if (gb == "Stop"){
                alert("La grabacion se detuvo.");
            } else alert("Error al relizar la accion...");
        } else alert("Por favor ingresa que desea realizar (Foto/Video).")
    }

    info(){
        alert(`Informacion del dispositivo.

            - Color: ${this.clr}
            - Peso: ${this.pso}
            - Resolucion: ${this.res}
            - Camara: ${this.cam}
            - Memoria: ${this.ram}`)
    }
}

const Tecno = new Dispositivo("Azul marino", "3,5g", "1920 x 1080 Pixeles", "58Mpx", "8 Ram + 5 VRam");

//Tecno.info()
//Tecno.Pwr();
//Tecno.Restrt();
Tecno.Obturador();

*/

/*
let str = "Hola, ";
let str2 = "como estas?";

class Str {
    constructor (){ }

    static set Setstr (v) { this.txt = v; document.writeln(this.txt); }
    
}

Str.Setstr = "Hola mundo!";


document.writeln(str.concat(str2));
*/