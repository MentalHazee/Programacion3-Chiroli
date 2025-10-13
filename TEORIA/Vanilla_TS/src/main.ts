import { Perro } from "./models/Animal.js";
import { Empleado } from "./models/Empleado";
import { Repositorio } from "./models/Repositorio.js";

console.log("Hola mundo");

console.log("estoy aqui");

console.log("tercer commit");

const perro1 = new Perro("Juancho");
perro1.hacerSonido();

const repo1 = new Repositorio<number>();
repo1.agregar(1);
repo1.agregar(2);
repo1.cantidadElementos;
repo1.obtenerTodos();

const repo2 = new Repositorio<string>();
repo2.agregar("pepe");
repo2.agregar("juan");
repo2.cantidadElementos;
repo2.obtenerTodos();

const empleado1 = new Empleado("Juan", 35, 21798465, "Frontend");
empleado1.saludar();
empleado1.trabajar();

console.log("hola3");
