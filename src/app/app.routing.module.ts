import { Route, Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/product.index';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "productDetails/:id", component: ProductDetailsComponent },
    { path: "", component: HomeComponent },
    // { path: "**", redirectTo:"home" }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}