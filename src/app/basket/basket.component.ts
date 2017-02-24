import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService} from '../service/products.service';
import { CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  curentCustomer:Customer;
orderedProducts: Product[]=[];
  constructor(public productsService: ProductsService, public customerService: CustomerService ,private router: Router ) { 
    this.customerService.getOrderedProducts().subscribe(products => this.orderedProducts = products);
    this.curentCustomer=new Customer();
  }

  ngOnInit() {
  }
  validateForm(){
    console.log(this.curentCustomer);
   this.customerService.checkout(this.curentCustomer).subscribe(_ => this.router.navigate(['']));
    // console.log(valid);
  }
}
