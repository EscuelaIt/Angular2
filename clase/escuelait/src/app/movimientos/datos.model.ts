export class Movimiento{
  importe: number;
  fecha: Date;
  empresa: string;
  tipo: number;
  categoria: number;
}




export class Animal implements PuedeComer{
  nombre: string;
  comer() {
    return true;
  }
}
let animal = new Animal();
animal.nombre = 'Donald';


export class Perro extends Animal{
  raza: string;
}
let perro = new Perro();
perro.nombre = "Goofy";
perro.raza = "dogo";

interface PuedeComer{
  comer() : boolean ;
}