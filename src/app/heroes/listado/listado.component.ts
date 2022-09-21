import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ["spiderman", "ironman", "hulk", "thor", "Black Phanter"];
  heroeBorrado: string = "";


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
  }


}