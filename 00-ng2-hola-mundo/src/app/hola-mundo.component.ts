import { Component } from '@angular/core';
// Función decoradora que registra un componente
@Component({
  moduleId: module.id,
  selector: 'hola-mundo-app',
  templateUrl: 'hola-mundo.component.html',
  styleUrls: ['hola-mundo.component.css']
})
// clase que representa un controlador 
// con su modelo de datos y
// métodos de acción  
export class HolaMundoAppComponent {
  // las propiedades de la clase representan el modelo de datos
  // son accesibles desde la vista
  title = 'hola-angular-2, el Hola Mundo en Angular2 para Escuela IT!'

  visible = false

  // metodo llamable desde un evento de la vista
  decirAdios() {
    this.visible = false
  }
}
