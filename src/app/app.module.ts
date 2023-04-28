import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleComponent } from './user/apple/apple.component';
import { OrangeComponent } from './user/orange/orange.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    OrangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
