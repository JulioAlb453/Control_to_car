import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button-of-car',
  standalone: false,
  templateUrl: './button-of-car.component.html',
  styleUrl: './button-of-car.component.css'
})
export class ButtonOfCarComponent {

  @Output() move = new EventEmitter<string>();

  moveCar(direction: string) {
    this.move.emit(direction);
  }

  
}
