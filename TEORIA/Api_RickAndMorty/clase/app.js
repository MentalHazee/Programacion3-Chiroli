/**
 * Función asíncrona para obtener los personajes de la API de Rick and Morty.
 * Utiliza 'fetch' para realizar la petición HTTP.
 */
const traePersonajes = async () => {
  try {
    // Realiza la petición a la API
    const response = await fetch("https://rickandmortyapi.com/api/character");
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Llama a la función para mostrar los personajes, pasando el array 'results'
    mostrarPersonajes(data.results);
  } catch (error) {
    // Captura y registra cualquier error que ocurra durante la petición
    console.log(error);
  }
};

// Obtiene la referencia al elemento HTML con el id "container"
const container = document.getElementById("container");

/**
 * Función para renderizar los personajes en el DOM.
 * @param {Array<Object>} personajes - Array de objetos que representan los personajes.
 */
const mostrarPersonajes = (personajes = []) => {
  console.log(personajes); // Muestra el array de personajes en la consola
  // Itera sobre cada personaje en el array
  personajes.forEach((personaje, indice) => {
    // Crea un nuevo elemento div que actuará como la tarjeta del personaje
    const tarjeta = document.createElement("div");
    // Agrega la clase "tarjeta" para aplicar estilos
    tarjeta.classList.add("tarjeta");
    //tarjeta.textContent = `${personaje.origin.name}`; // Ejemplo de uso alternativo
    // Define el contenido HTML de la tarjeta usando un template string (con las propiedades del personaje)
    tarjeta.innerHTML = `
    <img src="${personaje.image}">
    <h3>${personaje.name}</h3>
    <p><b>Species: </b> ${personaje.species}</p>
    <p><b>Status: </b> ${personaje.status}</p>
    `;

    // Agrega la tarjeta creada como hijo del contenedor principal
    container.appendChild(tarjeta);
  });
};

// **Para ejecutar la versión basada en funciones, descomenta la siguiente línea:**
//traePersonajes();


// ====================================================================
// Versión Orientada a Objetos (POO) - Clase RickAndMortyApp
// ====================================================================

/**
 * Clase principal que encapsula la lógica de la aplicación
 * Rick and Morty, siguiendo el paradigma de Programación Orientada a Objetos (POO).
 * (Recordatorio: Las clases heredan de 'base' según las instrucciones guardadas).
 */
class RickAndMortyApp {
  /**
   * Constructor de la clase. Inicializa las propiedades.
   * @param {string} containerId - El ID del elemento HTML donde se renderizarán las tarjetas.
   */
  constructor(containerId) {
    // Obtiene la referencia al elemento contenedor del DOM
    this.container = document.getElementById(containerId);
    // Define la URL de la API para obtener los personajes
    this.apiURL = "https://rickandmortyapi.com/api/character";
  }

  /**
   * Método asíncrono para obtener los datos de los personajes de la API.
   */
  async fetchCharacters() {
    try {
      // Realiza la petición a la URL definida en la clase
      const response = await fetch(this.apiURL);
      // Convierte la respuesta a JSON
      const data = await response.json();
      // Llama al método para renderizar los personajes con los datos obtenidos
      this.renderCharacters(data.results);
    } catch (error) {
      // Manejo de errores: imprime en consola y actualiza el contenido del contenedor
      console.error("Error al obtener personajes:", error);
      this.container.innerHTML = `<p style="color: red;">No se pudieron cargar los personajes 😢</p>`;
    }
  }

  /**
   * Método para iterar sobre la lista de personajes y renderizar cada uno.
   * @param {Array<Object>} characters - Array de objetos personaje.
   */
  renderCharacters(characters) {
    characters.forEach((character) => {
      // Crea la tarjeta del personaje
      const card = this.createCard(character);
      // Agrega la tarjeta al contenedor principal del DOM
      this.container.appendChild(card);
    });
  }

  /**
   * Método para crear el elemento DOM (tarjeta) de un único personaje.
   * @param {Object} character - Objeto con los datos de un personaje.
   * @returns {HTMLElement} El elemento div (tarjeta) creado.
   */
  createCard(character) {
    const card = document.createElement("div");
    // Agrega la clase 'card' para estilos
    card.classList.add("card");
    // Define el contenido HTML de la tarjeta
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
    `;
    return card; // Devuelve el elemento DOM creado
  }

  /**
   * Método público para iniciar la aplicación (el punto de entrada).
   */
  start() {
    console.log("Iniciando aplicación...");
    this.fetchCharacters(); // Comienza la obtención de datos
  }
}

// Inicializar la app
// 1. Crea una nueva instancia de la clase 'RickAndMortyApp', enlazándola al elemento con ID "container".
const app = new RickAndMortyApp("container");
// 2. Llama al método 'start' para ejecutar la lógica de la aplicación (obtener y mostrar personajes).
app.start();
