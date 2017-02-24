import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService} from '../service/products.service';
import { CustomerService} from '../service/customer.service';
import { Inject } from '@angular/core';
import {MyPipePipe } from '../my-pipe.pipe'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'app works!';
  total: number=0; 
  products: Product[]=[];
  constructor( public productsService: ProductsService, public customerService: CustomerService,  @Inject('titre') titre:string, public myPipe:MyPipePipe ){
      this.productsService.getProducts().subscribe(products => this.products = products);
      this.title=titre;
   }
  updateTotal(product: Product){
      this.customerService.addOrderedProduct(product).subscribe()
     this.customerService.addProduct(product);
     product.stock--;
    this.total= this.customerService.getTotal();
  }

  ngOnInit() {
  }

}
