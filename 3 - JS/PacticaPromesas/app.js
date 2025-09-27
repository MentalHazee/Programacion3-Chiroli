// ---------- FUNCIONES SUELTAS ----------

// Función asíncrona que trae personajes desde la API
const traerPersonajes = async () => {
    try {
        // Hacemos la petición HTTP a la API de Rick and Morty
        const response = await fetch("https://rickandmortyapi.com/api/character");
        // Convertimos la respuesta en JSON
        const data = await response.json();
        // Mostramos el array de personajes en consola
        console.log(data.results);
    } catch (error) {
        // Si algo sale mal, mostramos el error
        console.log(error);
    }
};

// Guardamos el contenedor donde vamos a poner las tarjetas
const container = document.getElementById("container");

// Función que recibe personajes y los muestra en pantalla
const mostrarPersonajes = (personajes = []) => {
    console.log(personajes); // Para verlos en consola

    // Recorremos el array de personajes
    personajes.forEach((personaje, indice) => {
        // Creamos un div para cada tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta", "otra_clase"); // Le agregamos clases CSS

        // Definimos el contenido de la tarjeta con innerHTML
        tarjeta.innerHTML = `
            <img src="${personaje.image}">
            <h3>${personaje.name}</h3>
            <p><b>Species: </b> ${personaje.species}</p>
            <p><b>Status: </b> ${personaje.status}</p>
        `;

        // Agregamos la tarjeta al contenedor principal
        container.appendChild(tarjeta);
    });
};


// ---------- POO: CLASE APP ----------

class RickAndMortyApp {
    constructor(containerId) {
        // Guardamos la referencia al contenedor
        this.container = document.getElementById(containerId);
        // Guardamos la URL de la API
        this.apiURL = "https://rickandmortyapi.com/api/character";
    }

    // Método para obtener personajes de la API
    async fetchCharacters() {
        try {
            const response = await fetch(this.apiURL); // Petición HTTP
            const data = await response.json(); // Parseamos la respuesta
            this.renderCharacters(data.results); // Enviamos los personajes a renderizar
        } catch (error) {
            // Si algo falla mostramos el error y un mensaje al usuario
            console.error("Error al obtener personajes:", error);
            this.container.innerHTML = `<p style="color: red;">No se pudieron cargar los personajes 😢</p>`;
        }
    }

    // Método que recorre y pinta los personajes en el contenedor
    renderCharacters(characters) {
        characters.forEach((character) => {
            const card = this.createCard(character); // Creamos la tarjeta
            this.container.appendChild(card); // La insertamos en el DOM
        });
    }

    // Método que define cómo se ve una tarjeta
    createCard(character) {
        const card = document.createElement("div"); // Creamos un div
        card.classList.add("card"); // Le damos clase CSS

        // Definimos su contenido HTML
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p><strong>Status:</strong> ${character.status}</p>
            <p><strong>Species:</strong> ${character.species}</p>
        `;
        return card; // Devolvemos la tarjeta lista
    }

    // Método para arrancar la app
    start() {
        this.fetchCharacters(); // Llama a la API y muestra todo
    }
}


// ---------- EJECUCIÓN ----------

// Creamos la app pasándole el ID del contenedor
const app = new RickAndMortyApp("container");

// Arrancamos la aplicación
app.start();

