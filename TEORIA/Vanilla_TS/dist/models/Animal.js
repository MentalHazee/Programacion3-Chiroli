class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover() {
        console.log(`${this.nombre} se esta moviendo`);
    }
}
export class Perro extends Animal {
    hacerSonido() {
        console.log("Guau Guau!");
    }
}
const perro1 = new Perro("Juancho");
perro1.hacerSonido();
