import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router, private ps: ProductService) {
    // console.log(route);
  }

  ngOnInit() {
    // this.product = this.ps.getProductDetails(+this.route.snapshot.params["id"]);
    this.route.params.subscribe(paramLIst => {
      this.product = this.ps.getProductDetails(+paramLIst["id"]);
    });
  }

  Redirect(){
    this.router.navigate(["/products"]);
  }

  product: any;

}
