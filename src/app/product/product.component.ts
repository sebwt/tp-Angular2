import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { Product } from '../model/product';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:Product
@Output() addToBasket = new EventEmitter<Product>();

  constructor() { 
  

  }

  ngOnInit() {
  }

   onAddToBasket() {
     this.addToBasket.emit(this.data);
    }

}
