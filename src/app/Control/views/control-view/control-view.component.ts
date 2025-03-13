import { Component } from '@angular/core';

@Component({
  selector: 'app-control-view',
  standalone: false,
  templateUrl: './control-view.component.html',
  styleUrl: './control-view.component.css'
})
export class ControlViewComponent {

  onMoveCar(direction: string){
    console.log(`Moving car in direction: ${direction}`);
  }
}
