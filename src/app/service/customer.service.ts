import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerService {
  orderedProducts: Product[] = [];
  constructor(public http: Http) { }
  url = "http://localhost:8080/rest/basket";
 
  addProduct(product): void {
    this.orderedProducts.push(product);
  }
  getOrderdProducts(): Observable<Product[]> {
    return this.http.get(this.url).
      map(res => res.json()).do(p => this.orderedProducts = p);
  }
  getTotal(): number {
    let total = 0;
    this.orderedProducts.forEach(product => { total += product.price });

    return total;
    // return this.orderedProducts.reduce((p1, p2) => p1+=p2.price, 0);
  }
}
