import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Logger } from '../logger.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
    `
    .goodRating{
      background-color:yellow;
      color:blue;
      font-weight:bolder;
    }
    .badRating{
      background-color:red;
      color:white;
    }
    // div{background-color:aqua;}
    `
  ],
  // providers:[Logger]
})
export class ProductThumbnailComponent implements OnInit {

  @Input("prod") product;
  @Output() parentData: EventEmitter<string> = new EventEmitter<string>();

  constructor(private logger:Logger,private ps:ProductService) {
  }

  ngOnInit() {
  }

  SendDataToParent() {
    let name = prompt("Enter Name");
    // this.logger.log(name);
    this.ps.notify.emit(name);
    // this.parentData.emit(name);
  }

  getClass() {
    switch (this.product.starRating) {
      case 1:
        return ["badRating"];
        break;
      case 2:
        return ["badRating"];
        break;
      case 3:
        return "goodRating";
        break;
      case 4:
        return ["goodRating"];
        break;
      case 5:
        return ["goodRating"];
        break;
      default:
        return [];
        break;
    }
  }
}
