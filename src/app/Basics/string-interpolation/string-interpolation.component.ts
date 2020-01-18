import { Component } from "@angular/core";

@Component({
    selector:"string-interpolation",
    templateUrl:"./string-interpolation.component.html"
})
export class StringInterpolationComponent{
    // name;   
    // name="Ram"; 
    name:string="Ram";
    age:number=10;
    isAdult:boolean=false;
    
    getData():string{
        // let prod1 = new Product();
        return "Some Data";
    }
}


class Product{

}