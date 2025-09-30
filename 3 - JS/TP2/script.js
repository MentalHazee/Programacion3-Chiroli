//JULIÁN SANTOS - COMISIÓN 4
//1. Funciones declarativas y expresadas

console.log("\nPunto 1");

//Crea una función declarativa que reciba un número y devuelva su cuadrado

function cuadrado(num) {
    return num * num;
}
console.log(cuadrado(4))


//Crea una función expresada que reciba un número y devuelva su cubo

const cubo = function (num) {
    return num * num * num;
};
console.log(cubo(3))


//Explica brevemente la diferencia entre ambos tipos de funciones y cuándo se usan

/*Una función declarativa se define con la palabra "función" y queda disponible en todo el código
gracias al hosting, pero es puede llamarse antes o después de declararla. Suelen usarse para funciones
generales y reutilizables.
Una función expresada por su parte, se asigna a una variable y solo existe a partir de esa línea,
por lo que no tiene el hosting. Suelen usarse para los callbacks, funciones anónimas y cuando querés
tratarlas como valores.*/


//2. Arrow Functions y parámetros por defecto

console.log("\nPunto 2");

//Crea una arrow function que reciba un nombre y una edad.

const presentar = (nombre, edad = 18) => {
    return `Hola ${nombre}, tienes ${edad} años`;
}
console.log(presentar("Ana"))
console.log(presentar("Julian", 28));


//3. Objetos con propiedades y métodos

console.log("\nPunto 3");

//Crea un objeto persona con: nombre, edad y un método para presentarlo que devuelva un mensaje de presentación.

const sherlock = {
    nombre: "Sherlock Holmes",
    edad: 45,
    presentar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};
console.log(sherlock.presentar());

//Explica la diferencia entre propiedades y métodos dentro de un objeto.

/*Las principales diferencias están en que las propiedades son los datos que
describen al objeto (ejemplo: nombre y edad). Y los métodos son las funciones dentro
del objeto que permiten realizar las acciones relacionadas a él (ejemplo: presentar)*/


//4. Desestructuración

console.log("\nPunto 4");

//Usa desestructuración para obtener las propiedades del objeto persona y mostrar cada valor por separado

const watson = {
    nombre: "John Watson",
    edad: 47,
    presentar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};
const { nombre, edad } = watson;
console.log(nombre);
console.log(edad);

//Explica qué ventajas tiene usar desestructuración sobre acceder a cada propiedad individualmente.

/*La desestructuración permite extraer propiedades de un objeto de una forma concreta y legible,
así se evita repetir por ejemplo: persona.nombre, persona.edad, etc. El código se vuelve más
legible cuando se trabajan con muchos datos, ya que se utilizan las variables.*/


//5. Operador spread/rest

console.log("\nPunto 5");

//Crea un array de números y agrega más números usando spread.

const numerosBase = [1, 2, 3];
const masNumeros = [...numerosBase, 4, 5, 6];
console.log(masNumeros);

//Crea una función que reciba cualquier cantidad de números usando rest y calcule la suma.

const sumar = (...numeros) => {
    return numeros.reduce((acum, num) => acum + num, 0);
};
console.log(sumar(1, 2, 3));
console.log(sumar(10, 20, 30, 40));

//Explica la diferencia entre spread y rest y cuándo se utiliza cada uno.

/*Spread expande los elementos de un array u objeto, ya sea para combinarlos o copiarlos.
Rest agrupa múltiples valores en un array cuando se reciben como parámetros en una función.*/


//6. Manipulación básica del DOM

console.log("\nPunto 6");

//Selecciona el título con getElementById y cambia su texto con textContent.

const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo modificado con JS";

//Agrega un par de elementos nuevos a la lista usando createElement y appendChild.

const lista = document.getElementById("lista");
const nuevoItem1 = document.createElement("li");
nuevoItem1.textContent = "Elemento agregado con JS";
lista.appendChild(nuevoItem1);
const nuevoItem2 = document.createElement("li");
nuevoItem2.textContent = "Elemento agregado con JS x2";
lista.appendChild(nuevoItem2);

//Agrega o quita clases al título usando classList.add, remove o toggle.

titulo.classList.add("resaltado");
titulo.classList.remove("invisible");
titulo.classList.toggle("activo");


//7. Eventos click e input 

const lista = document.getElementById("lista");
const input = document.getElementById("nuevoTexto");
const boton = document.getElementById("agregarBtn");
boton.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto !== "") {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        input.value = "";
    }
});

//Explica qué evento estás utilizando y por qué. 

/*En este caso usamos el event click porque la acción que queremos (agregar un nuevo elemento a la lista) debe ejecutarse
cuando el usuario haga click en el botón. El evento input sirve para detectar cada cambio en el campo
de texto. Pero en este caso se manda el texto cuando clickeamos el botón.*/
