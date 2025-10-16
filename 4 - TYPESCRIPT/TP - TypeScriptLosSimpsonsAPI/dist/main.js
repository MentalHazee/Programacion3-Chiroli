function getImageUrl(character) {
    return `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`;
}
const homer = {
    id: 1,
    age: 39,
    birthdate: "1956-05-12",
    gender: "Male",
    name: "Homer Simpson",
    occupation: "Nuclear Safety Officer",
    portrait_path: "/character/1.webp",
    phrases: ["D'oh!", "Mmm... donuts.", "Woohoo!"],
    status: "Alive"
};
console.log(getImageUrl(homer));
//5.2 VARIABLES Y CONSTANTES
//URL base de la API
const API_URL = "https://thesimpsonsapi.com/api/characters";
//Referencias a los elementos del DOM con tipado
const btnLoad = document.getElementById("load-btn");
const charactersSection = document.getElementById("characters");
const loadingSection = document.getElementById("loading");
const errorDiv = document.getElementById("error");
//5.3 FUNCIONES REQUERIDAS  
//Mostrar el indicador de carga y ocultar errores
function showLoading() {
    loadingSection.style.display = "block";
    errorDiv.style.display = "none";
}
//Ocultar el indicador de carga
function hideLoading() {
    loadingSection.style.display = "none";
}
//Mostrar un mensaje de error por 5 segundos
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    errorDiv.style.color = "red";
    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 5000);
}
//Crear una tarjeta de personaje
function createCharacterCard(character) {
    const card = document.createElement("div");
    card.className = "character-card";
    const img = document.createElement("img");
    img.src = `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`;
    img.alt = character.name;
    const name = document.createElement("h3");
    name.textContent = character.name;
    const phrase = document.createElement("p");
    phrase.textContent = character.phrases[0] || "Sin frases disponibles";
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(phrase);
    return card;
}
// Renderizar personajes en el contenedor
const renderCharacters = (characters) => {
    charactersSection.innerHTML = ""; // Limpiar contenido previo
    characters.forEach((char) => {
        const card = createCharacterCard(char);
        charactersSection.appendChild(card);
    });
};
// Obtener los personajes desde la API
const fetchCharacters = async () => {
    try {
        showLoading();
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        // Validación de datos (punto siguiente)
        if (!data || !data.results || !Array.isArray(data.results)) {
            throw new Error("La respuesta de la API no tiene el formato esperado");
        }
        renderCharacters(data.results);
    }
    catch (error) {
        // Muestra el error al usuario
        showError(error.message);
        // Lo registra en la consola para debugging
        console.error("Error al obtener personajes:", error);
    }
    finally {
        hideLoading();
    }
};
// Evento para el botón de carga
btnLoad.addEventListener("click", fetchCharacters);
//5.4 EVENT LISTENERS
btnLoad.addEventListener("click", () => {
    fetchCharacters(); // Llamar a la función para obtener y mostrar personajes
});
export {};
