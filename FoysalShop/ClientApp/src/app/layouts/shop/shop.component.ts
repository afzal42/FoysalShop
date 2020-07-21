import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
/** shop component*/
export class ShopComponent {
  /** shop ctor */
  productList = [{id:1,name:'sdfsfsfd'}];
  constructor() {

  }
}
