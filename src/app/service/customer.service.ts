import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class CustomerService {
  orderedProducts:Product[]=[];
  constructor() { }
  addProduct(product):void {
    this.orderedProducts.push(product);
  }
  getTotal():number{
    let total=0;
    this.orderedProducts.forEach(product => {total+=product.price});

    return total;
  // return this.orderedProducts.reduce((p1, p2) => p1+=p2.price, 0);
  }
}
