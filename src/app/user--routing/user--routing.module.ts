import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppleComponent} from './apple/apple.component'
import {OrangeComponent} from './orange/orange.component'

console.warn("Fruits are loading")

const routes: Routes = [
  {path:'apple',component:AppleComponent},
  {path:'orange',component:OrangeComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRoutingModule { }
