import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
    `
  ]
})
export class ProductThumbnailComponent implements OnInit {

  @Input("prod") product;
  @Output() parentData:EventEmitter<string>= new EventEmitter<string>();

  constructor() {    
  }

  ngOnInit() {
  }

  SendDataToParent(){
    let name = prompt("Enter Name");
    this.parentData.emit(name);
  }
}
