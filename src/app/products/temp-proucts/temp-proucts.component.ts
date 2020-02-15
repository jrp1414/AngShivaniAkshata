import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'temp-proucts',
  template: `
    <p>
      temp-proucts works!
    </p>
  `,
  styles: [],
  // providers:[ProductService]
})
export class TempProuctsComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.ps.notify.subscribe(data=>{
      console.log(data);
    });
  }

}
