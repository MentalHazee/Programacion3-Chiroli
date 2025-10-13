import { Persona } from "./Persona.js";

export class Empleado extends Persona {
  puesto: string;
  constructor(nombre: string, edad: number, dni: number,puesto: string) {    
    super(nombre,edad,dni)
    this.puesto = puesto;
  }

  trabajar():void{
    console.log(`soy ${this.nombre} y estoy trabajando en el puesto ${this.puesto}`)
  }
}

const empleado1 = new Empleado("Juan", 35, 21798465, "Frontend");
empleado1.saludar()
empleado1.trabajar()

