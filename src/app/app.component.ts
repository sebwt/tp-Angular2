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

}

