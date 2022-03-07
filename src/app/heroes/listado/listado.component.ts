import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string [] = ['El terror de Tambo', 'Culisuelta','Victoria Secret', 'Hercules'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}
