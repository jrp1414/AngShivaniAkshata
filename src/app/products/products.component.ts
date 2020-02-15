import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService, Product } from './product.service';
import { Logger } from './logger.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styles: [
        // `div{background-color:yellowgreen;}`
    ],
    // providers:[ProductService,Logger]
    // encapsulation:ViewEncapsulation.None
})
export class ProductsComponent implements OnInit{
    

    filterText: string = "";

    constructor(private ps:ProductService,private logger:Logger){
        this.products = this.ps.getProducts();
    }

    ChildDataReceived(data) {
        console.log(data);
    }

    ngOnInit(): void {
        this.ps.notify.subscribe(data=>{
            this.logger.log(data);
        });
    }

    products: Product[];
}
