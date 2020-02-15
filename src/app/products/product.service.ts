import { EventEmitter, Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn:"root"
})
export class ProductService {

  constructor(private logger: Logger) { }

  getProducts(): Product[] {
    this.logger.log("Get Products Called");
    return this.products;
  }

  getProductDetails(id: number): Product {
    return this.products.find(prod => prod.productId == id);
  }

  notify: EventEmitter<string> = new EventEmitter<string>();









  private products: Product[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": new Date(2017, 9, 20),
      //"description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
      "price": 32.99985,
      "starRating": 2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": new Date(2016, 10, 25),
      "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
      "price": 8.9,
      "starRating": 3,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
      "price": 11.55787878,
      "starRating": 4,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
      "price": 35.957878,
      "starRating": 5,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
}

export interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  description?: description;
  price: number;
  starRating: number;
  imageUrl: string;
}

export interface description {
  descText: string;
  emailId: string;
}
