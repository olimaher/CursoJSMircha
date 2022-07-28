export const PI = Math.PI;

export let sumar = function sumar(a, b) {
    return a + b;
}

export default function saludar(){
    console.log("Esta es una funcion que se ejecuta por defecto solo llamandola y solo puede ser una exportación de este tipo.");
}

 export class Saludar{
    constructor(){
    console.log("saludo desde la clase estas si se ingresan dentro de los corchetes en la exportación")
    }
}
