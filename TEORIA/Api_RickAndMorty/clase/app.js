const traePersonajes = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    mostrarPersonajes(data.results);
  } catch (error) {
    console.log(error);
  }
};


const container = document.getElementById("container");

const mostrarPersonajes = (personajes = []) => {
  console.log(personajes);
  personajes.forEach((personaje, indice) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    //tarjeta.textContent = `${personaje.origin.name}`;
    tarjeta.innerHTML = `
    <img src="${personaje.image}">
    <h3>${personaje.name}</h3>
    <p><b>Species: </b> ${personaje.species}</p>
    <p><b>Status: </b> ${personaje.status}</p>
    `;

    container.appendChild(tarjeta);
  });
};

//traePersonajes();



//POO
class RickAndMortyApp {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.apiURL = "https://rickandmortyapi.com/api/character";
  }

  async fetchCharacters() {
    try {
      const response = await fetch(this.apiURL);
      const data = await response.json();
      this.renderCharacters(data.results);
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      this.container.innerHTML = `<p style="color: red;">No se pudieron cargar los personajes 😢</p>`;
    }
  }

  renderCharacters(characters) {
    characters.forEach((character) => {
      const card = this.createCard(character);
      this.container.appendChild(card);
    });
  }

  createCard(character) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
    `;
    return card;
  }

  start() {
    this.fetchCharacters();
  }
}

// Inicializar la app
const app = new RickAndMortyApp("container");
app.start();



