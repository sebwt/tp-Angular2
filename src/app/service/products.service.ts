import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {UpperCasePipe} from '@angular/common';

@Injectable()
export class ProductsService {
  products: Product[] = [];
   search (product, title) {
       return product.title == title; 
      }
  constructor(uppercase:UpperCasePipe) {

    this.products.push(new Product("Product 1" , uppercase.transform("Lorem ipsum dolor sit amet, consectetur adipisicing elit."), "http://placehold.it/800x500", 10, 10));
    this.products.push(new Product("Product 2",  uppercase.transform("Lorem ipsum dolor sit amet, consectetur adipisicing elit."), "http://placehold.it/800x500", 20, 0));
    this.products.push(new Product("Product 3",  uppercase.transform("Lorem ipsum dolor sit amet, consectetur adipisicing elit."), "http://placehold.it/800x500", 30, 30));
    this.products.push(new Product("Product 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "http://placehold.it/800x500", 40, 1));

  }
  getProducts(): Product[] {
    return this.products
  }
  isTheLast(produitTitle): boolean {
    let p=this.products.find(product => this.search(product, produitTitle));
    return p.stock==1; 
  }
  isAvailable(produitTitle): boolean { 
     return this.products.find(this.search).stock>1;
  }
  decreaseStock(produitTitle) :void { 
    let p=this.products.find(this.search);
    if (p.stock>0) {
    p.stock-=1;
    }
  }

}
