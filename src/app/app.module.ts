import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from "./Basics/string-interpolation/string-interpolation.component";
import { PropertyBindingComponent } from './Basics/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Basics/twoway-binding/twoway-binding.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from "./products/shorten.pipe";
import { ReplaceCharPipe } from './products/replace-char.pipe';
import { FilterPipe } from './products/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    ReplaceCharPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



