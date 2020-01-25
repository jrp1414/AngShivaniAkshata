import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent {

  Message: string = "Initialized";

  Name:string="";

  onButtonClick(){
    if (confirm("Do you want to join this website")) {
      this.Message = "Welcome to my Angular Site";
    }else{
      this.Message = "Sorry we are missing not to have you as a user.";
    }
  }

  NameChanged(data){
    console.log(data);
    // this.Name = data.target.value;

  }

  OnKeyDown(event){
    console.log(event);
    if (event.keyCode>=48 && event.keyCode<=57) {
      event.target.value = event.target.value.substring(0,(event.target.value.length-2));
    }
  }

  OnKeyUp(event){
    console.log(event);
    if (event.keyCode>=48 && event.keyCode<=57) {
      event.target.value = event.target.value.substring(0,(event.target.value.length-2));
    }
  }
}