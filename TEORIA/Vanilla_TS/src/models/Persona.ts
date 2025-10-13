export class Persona {
  public nombre: string;
  public edad: number;
  private dni: number;

  constructor(nombre: string, edad: number, dni: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }

  getDni(): number {
    return this.dni;
  }

  saludar(): void {
    console.log(`hola soy ${this.nombre} y tengo ${this.edad}`);
  }
}
const persona1 = new Persona("Juan", 35, 21798465);
persona1.saludar()
console.log(persona1.getDni());

// class persona2{
//     nombre
//     edad
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad
//     }
// }
