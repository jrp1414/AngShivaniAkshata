import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StringInterpolationComponent} from "./Basics/string-interpolation/string-interpolation.component";

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



