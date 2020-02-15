import {Component} from "@angular/core";
import { ProductService } from './products/product.service';
import { Logger } from './products/logger.service';

@Component({
  // selector:"app-main",
  // selector:"[app-main]",
  selector:".app-main",
  // template:"<h1>Inline Templare</h1>"+
  //           "<h2>Test header 2</h2>"
  // template:`<h1>Multi line Template</h1>
  //           <h2>Test header 2</h2>`
  templateUrl:"./app.component.html",
  // providers:[Logger,ProductService]
})
export class AppComponent{

}