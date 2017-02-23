import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductsService} from './service/products.service';
import { CustomerService} from './service/customer.service';
import { Inject } from '@angular/core';
import {MyPipePipe } from './my-pipe.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  total: number=0; 
  products: Product[]=[];
  constructor( public productsService: ProductsService, public customerService: CustomerService,  @Inject('titre') titre:string, public myPipe:MyPipePipe ){
      this.products=this.productsService.getProducts();
      this.title=titre;
   }
  updateTotal(product: Product){
    this.customerService.addProduct(product);
    this.total= this.customerService.getTotal();
  }

}

