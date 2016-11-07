[Módulos y Componentes](http://academia-binaria.com/componentes-los-bloques-de-construccion-de-angular-2/)
[Data Binding](http://academia-binaria.com/databinding-el-flujo-de-datos-de-angular2/)

Módulos de funcionalidad con Angular 2

### Guía
- `ng g m movimientos` : crea el módulo movimientos en su carpeta y con un componente
- `movimientos` : carpeta para el módulo movimientos
- `movimientos.module.ts` : un módulo de funcionalidad, declara al componente (hay que exportarlo)
- `movimientos.component.ts` : componente principal del módulo, con el prefijo app
- `movimientos.component.html` : vista del componente movimientos
- `app.module.ts` : importación del módulo de movimientos
- `app.component.html` : incorporamos al componente movimientos
- `ng g m movimientos/nuevo` : crea una carpeta con el componente nuevo dentro del modulo movimientos
- `movimientos.component.html` : incorporamos el componente nuevo como un elemento
- `ng g m movimientos/lista` : lo mismo para el componente lista
- `nuevo.component.html` : directivas para enlace de datos
- `nuevo.component.ts` : modelo en clase controladora


(https://scotch.io/tutorials/how-to-deal-with-different-form-controls-in-angular-2)