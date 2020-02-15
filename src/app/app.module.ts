import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from "./Basics/string-interpolation/string-interpolation.component";
import { PropertyBindingComponent } from './Basics/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Basics/twoway-binding/twoway-binding.component';

import {
  ProductsComponent,
  ProductThumbnailComponent,
  ShortenPipe,
  ReplaceCharPipe,
  FilterPipe,
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective,
  Logger
} from "./products/product.index";
import { TempProuctsComponent } from './products/temp-proucts/temp-proucts.component';
import { ProductService } from './products/product.service';

// import * as index from "./products/product.index";

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
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProuctsComponent
    // index.ProductsComponent,
    // index.ProductThumbnailComponent,
    // index.ShortenPipe,
    // index.ReplaceCharPipe,
    // index.FilterPipe,
    // index.BasicHighlightDirective,
    // index.BetterHighlightDirective,
    // index.UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [Logger,ProductService],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }



