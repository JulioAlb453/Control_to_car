import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlViewComponent } from './Control/views/control-view/control-view.component';

const routes: Routes = [
  { path: '', component: ControlViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
