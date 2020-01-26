import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent {

  constructor() {
    var nums = [5,6,8,9,85,9];
    // for(var i in nums){
    //   console.log(nums[i]);
    // }

    // nums.forEach((value)=>{
    //  console.log("Log --" + value); 
    // });

    // for(var i of nums){
    //   console.log(i);
    // }
  }

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


