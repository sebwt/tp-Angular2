import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {Customer} from '../model/customer';

@Injectable()
export class CustomerService {
  orderedProducts: Product[] = [];
  curentCustomer:Customer;
  constructor(public http: Http) { }
  url = "http://localhost:8080/rest/basket";
  confirmUrl = "http://localhost:8080/rest/basket/confirm";

  addProduct(product): void {
    this.orderedProducts.push(product);
  }

  getOrderedProducts(): Observable<Product[]> {
    return this.http.get(this.url).
      map(res => res.json()).do(p => this.orderedProducts = p);
  }
  addOrderedProduct(product: Product): Observable<Product[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, product, options).map(res => res.json());
  }

  getTotal(): number {
    let total = 0;
    this.orderedProducts.forEach(product => { total += product.price });

    return total;
    // return this.orderedProducts.reduce((p1, p2) => p1+=p2.price, 0);
  }
  checkout(customer:Customer): Observable<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("panier en validation pour le client" +customer.name )
    return this.http.post(this.confirmUrl, customer, options);
  }
}
