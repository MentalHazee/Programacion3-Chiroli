//1. Crear un array de palabras
let palabras = [];

//Guarda las 5 palabras en el array palabras
for (let x = 0; x < 5; x++) {
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


//3. Analizar las palabras
let palabraMasLarga = "";
let contieneA = false;

for (let x = 0; x < palabras.length; x++) {
    let palabra = palabras[x];

    console.log(`La palabra "${palabra}" tiene ${palabra.length} caracteres.`);

    //Compara con la última palabra que guradó
    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
    }

    //Analiza si contiene A y en el caso de que sí, cambia a la condición de TRUE
    if (palabra.toLowerCase().includes("a")){
        contieneA = true;
    }

    console.log("La palabra más larga es: ", palabraMasLarga);
    console.log("¿Alguna palabra contiene A?", contieneA ? "Sí" : "No");
}


//4. Juego de inversión de palabras
let palabrasInvertidas = [];

for (let x = 0; x < palabras.length; x++) {
  let invertida = palabras[x].split("").reverse().join("");
  palabrasInvertidas.push(invertida);
}

console.log("Array con palabras invertidas:", palabrasInvertidas);
alert("Palabras invertidas:\n" + palabrasInvertidas.join(", "));


//5. Palíndromos
let opcion = prompt("¿Querés comprobar palíndromos? (sí/no)").toLowerCase();

if (opcion === "sí" || opcion === "si") {
  console.log("Palíndromos encontrados:");
  
  for (let x = 0; x < palabras.length; x++) {
    let palabra = palabras[x].toLowerCase();
    let invertida = palabra.split("").reverse().join("");
    
    if (palabra === invertida) {
      console.log(`"${palabras[x]}" es un palíndromo`);
    }
  }
} else {
  console.log("No se comprobaron palíndromos.");
}


//6. Bonus
let contador = 0;

for (let x = 0; x < palabras.length; x++) {
  if (palabras[x].length > 4) {
    contador++;
  }
}

console.log(`Cantidad de palabras con más de 4 caracteres: ${contador}`);

let palabrasUnidas = palabras.join("-");
console.log("Palabras unidas con guiones:", palabrasUnidas);
alert("Palabras unidas con guiones:\n" + palabrasUnidas);

//JULIAN SANTOS - COMISIÓN 4