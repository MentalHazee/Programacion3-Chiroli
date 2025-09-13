//1. Crear un array de palabras
let palabras = [];

//Guarda las 5 palabras en el array palabras
for(let x = 0; x < 5; x++){
    let palabra = prompt(`Ingresá la palabra ${x + 1}:`);
    palabras.push(palabra);
}

//2. Manipular el array

//Agrega una palabra al inicio
let palabraInicio = prompt("Ingresá una palabra para agregar al inicio: ");
palabras.unshift(palabraInicio);

//Agrega una palabra al final
let palabraFinal = prompt("Ingresá una palabra para agregar al final: ");
palabras.push(palabraFinal);

//Elimina la segunda palabra en el índice 1
palabras.splice(1, 1);
console.log(palabras);


//JULIAN SANTOS - COMISIÓN 4