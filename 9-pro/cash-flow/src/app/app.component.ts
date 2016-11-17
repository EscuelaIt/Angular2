// importar antes de usar
import { Component } from '@angular/core';
// decorador para definir un componente
@Component({
  selector: 'app-root',// selector para ser consumido como elemento html
  templateUrl: './app.component.html', // ruta a la plantilla
  styleUrls: ['./app.component.css'] // estilos en css o sass
})
// los componentes son clases instanciables
export class AppComponent {
  // propiedades para enlazar con la plantilla
  title = 'app works!';

  modoSidebar = 'side';
}
