import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppleComponent} from './apple/apple.component'
import {OrangeComponent} from './orange/orange.component'

console.warn("Fruits are loading")

const routes: Routes = [
  {path:'apple',component:AppleComponent},
  {path:'orange',component:OrangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
