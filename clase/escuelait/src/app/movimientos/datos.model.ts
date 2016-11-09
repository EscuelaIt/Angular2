export interface Movimiento{
  importe: number;
  fecha: Date;
  empresa: string;
  tipo: number;
  categoria: number;
}


interface OnInit{
  ngOnInit(): void;
}



export class Animal implements PuedeComer, OnInit{
  nombre: string;
  comer() {
    return true;
  }
  ngOnInit() {
    
  }
}
let animal = new Animal();
animal.nombre = 'Donald';
animal.ngOnInit();


export class Perro extends Animal{
  raza: string;
}
let perro = new Perro();
perro.nombre = "Goofy";
perro.raza = "dogo";

interface PuedeComer{
  comer() : boolean ;
}