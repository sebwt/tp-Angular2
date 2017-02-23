import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(tabs: Array<Product>, asc?:boolean): any {
    if (asc == void 0){
      asc=true;
    }
    let p:Product[]=[];
    p=tabs.sort(function(a,b):number{
      return (a.title.localeCompare(b.title))
    })
    if (asc== false){
      return p.reverse();
    }
    return p;
  }
}