import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsService } from './service/products.service'
import { CustomerService } from './service/customer.service';
import { MyPipePipe } from './my-pipe.pipe';
let titre: string = 'Bienvenue sur Zenika Ecommerce';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductsService, CustomerService, MyPipePipe, { provide: 'titre', useValue: titre },
    { provide: LOCALE_ID, useValue: 'fr-FR' },UpperCasePipe
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
