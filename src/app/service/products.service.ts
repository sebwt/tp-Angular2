import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { UpperCasePipe } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
  import 'rxjs/add/operator/do';




@Injectable()
export class ProductsService {
  products: Product[] = [];
  search(product, title) {
    return product.title == title;
  }

  url = "http://localhost:8080/rest/products";
  constructor(public http: Http) {
 
  }
  getProducts(): Observable<Product[]> {
    return this.http.get(this.url).
      map(res => res.json()).do(p => this.products= p);
  }

  isTheLast(produitTitle): boolean {
    let p = this.products.find(product => this.search(product, produitTitle));
    return p.stock == 1;
  }
  isAvailable(produitTitle): boolean {
    return this.products.find(this.search).stock > 1;
  }
  decreaseStock(produitTitle): void {
    let p = this.products.find(this.search);
    if (p.stock > 0) {
      p.stock -= 1;
    }
  }

}
