import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlViewComponent } from './views/control-view/control-view.component';
import { ButtonOfCarComponent } from './components/button-of-car/button-of-car.component';



@NgModule({
  declarations: [
    ControlViewComponent,
    ButtonOfCarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ControlModule { }
