[Inyección de dependencias](http://academia-binaria.com/angular2-di-inyeccion-de-dependencias/)

Comunicación entre componentes mediante Servicios Iyectables con datos Observables

### Guía
- `ng g s movimientos/datos` :  crea el servicio de datos, pero no lo engancah en el módulo
- `movimientos.module.ts` : registro del servicio como un proveedor
- `nuevo.component.ts` : declara dependencia de DatosService y delega responsabilidad 
- `datos.service.ts` : servicio para manejo de datos comunes y observables
- `movimientos.model.ts` : modelo en clase controladora
- `lista.component.ts` : declara dependencia de DatosService y se suscribe a cambios 

(http://mean.expert/2016/05/21/angular-2-component-communication/)
