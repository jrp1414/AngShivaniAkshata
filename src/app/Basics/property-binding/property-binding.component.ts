import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent {

  imageWidth:number=150;
  imageHeight:number=160;
  imageUrl:string="https://cdn.auth0.com/blog/illustrations/angular.png";
  buttonDisabled:boolean = true;
  Message:string="Starting Message";

  constructor() {
    setTimeout(()=>{
      this.buttonDisabled = false;
      this.Message = "Updated the message";
    },5000);
  }
}
