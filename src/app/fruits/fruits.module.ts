import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { AppleComponent } from './apple/apple.component';
import { OrangeComponent } from './orange/orange.component';


@NgModule({
  declarations: [
    AppleComponent,
    OrangeComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
