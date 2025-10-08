const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Juan" },
];

const parse = JSON.stringify(usuarios);
const convertirAObjeto = JSON.parse(parse);

//repasar callbacks
const buscarUsuario = (id, callback) => {
  console.log("buscando usuario...");
  setTimeout(() => {
    const resultado = usuarios.find((user) => user.id === id);
    if (resultado) {
      callback(null, resultado); // esta ok
    } else {
      callback("El usuario no se encontro"); // esta mal
    }
  }, 1000);
};

const printResultado = (error, resultado) => {
  if (error) {
    console.log(error);
  } else {
    console.log(resultado);
  }
};

//buscarUsuario(10, printResultado);

//hacer promesas

const buscarUsuarioPromesa = (id) => {
  return new Promise((resolved, rejected) => {
    console.log("buscando usuario...");
    setTimeout(() => {
      const resultado = usuarios.find((user) => user.id === id);
      if (resultado) {
        resolved(resultado);
      } else {
        rejected("No se encontro");
      }
    }, 1000);
  });
};
//resolver promesa
//manera .then y .catch
// buscarUsuarioPromesa(1)
//   .then((resultado) => console.log(resultado)) //salida del resolved
//   .catch((error) => console.log(error)); // salida de si esta mal

//resolver con async y await
//async function ejecutar(){}
const ejecutarBusqueda = async (id) => {
  try {
    const respuesta = await buscarUsuarioPromesa(id);
    console.log(respuesta);
  } catch (error) {
    console.error(error);
  }
};
//ejecutarBusqueda(12);

//consumir una api con fetch y mostrar datos

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const traerDatos = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

traePersonajes();
