import { Component, Input } from '@angular/core';

/**
 * Generated class for the IconClimaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'icon-clima',
  templateUrl: 'icon-clima.html'
})
export class IconClimaComponent {


  @Input() icono:string;

  constructor() { }

}
