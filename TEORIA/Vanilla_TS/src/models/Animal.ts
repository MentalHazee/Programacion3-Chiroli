abstract class Animal {
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  mover(): void {
    console.log(`${this.nombre} se esta moviendo`);
  }

  abstract hacerSonido(): void;
}

export class Perro extends Animal{
    hacerSonido(): void {
        console.log("Guau Guau!")
    }
}

const perro1 = new Perro("Juancho")
perro1.hacerSonido()
