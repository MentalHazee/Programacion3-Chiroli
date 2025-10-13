const returnFirst = (arr) => {
    return arr[0];
};
const personas = [
    { nombre: "julian", edad: 25 },
    { nombre: "pepe", edad: 20 },
];
returnFirst([1, 2, 3]); //1
returnFirst(["pepe", "juan", "pedro"]); // pepe
returnFirst(personas); // { nombre: "julian", edad: 25 }
export class Repositorio {
    elementos = [];
    cantidadElementos = 0;
    agregar(nuevoElemento) {
        this.elementos.push(nuevoElemento);
        this.cantidadElementos++;
    }
    obtenerTodos() {
        return this.elementos;
    }
}
const repo1 = new Repositorio();
repo1.agregar(1);
repo1.agregar(2);
repo1.cantidadElementos;
repo1.obtenerTodos();
const repo2 = new Repositorio();
repo2.agregar("pepe");
repo2.agregar("juan");
repo2.cantidadElementos;
repo2.obtenerTodos();
