const returnFirst = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

interface IPersona {
  nombre: string;
  edad: number;
}

const personas: IPersona[] = [
  { nombre: "julian", edad: 25 },
  { nombre: "pepe", edad: 20 },
];
returnFirst<number>([1, 2, 3]); //1
returnFirst<string>(["pepe", "juan", "pedro"]); // pepe
returnFirst<IPersona>(personas); // { nombre: "julian", edad: 25 }

export class Repositorio<T> {
  private elementos: T[] = [];
  public cantidadElementos = 0;

  agregar(nuevoElemento: T): void {
    this.elementos.push(nuevoElemento);
    this.cantidadElementos++;
  }

  obtenerTodos(): T[] {
    return this.elementos;
  }
}

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
