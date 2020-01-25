import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent {

  OneWayData:string="";
  OneWayDataChange(event){
    this.OneWayData = event.target.value;
  }

  OneWayTest(){
    this.OneWayData = "One Way Test";
  }

  TwoWayData:string="";
  TwoWayTest(){
    this.TwoWayData = "Two Way Test";
  }

  TwoWayDataChange(event:string){
    console.log(event);
    this.TwoWayData = event.toUpperCase();
  }
}
