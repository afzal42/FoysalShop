import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
/** cart component*/
export class CartComponent implements OnInit, OnDestroy {
  /** cart ctor */

  cartList: Array<Cart> = new Array<Cart>();
  
  constructor() {
    //var span = document.querySelector('.cart-img-product');

    //span.addEventListener('click', function (e) {
    //  const index: number = this.cartList.indexOf(e);
    //  if (index !== -1) {
    //    this.cartList.splice(index, 1);
    //  }
    //});
  }


  ngOnInit() {

    for (var i = 1; i < 10; i++) {
      var obj = new Cart(i, "Item " + i, i.toString(), false, 1, (i * 3), (i * 3));
      console.log(obj);
      this.cartList.push(obj);
    }
  }

  ngOnDestroy() {

  }

  cartTotal() {
    var stotal = 0;
    for (var i = 0; i < this.cartList.length; i++) {
      stotal += this.cartList[i].total;
    }
    return stotal;
  }

  removeItem(cart) {
    const index: number = this.cartList.indexOf(cart);
    if (index !== -1) {
      this.cartList.splice(index, 1);
    }
  }

  addProductQty(cart) {
    console.log(cart);
    cart.qty += 1;
    cart.total = cart.price * cart.qty;
  }

  minusProductQty(cart) {
    console.log(cart);
    cart.qty -= 1;
    cart.total = cart.price * cart.qty;
  }


}

export class Cart {
  constructor(public id: number, public name: string, public path: string, public isFav: boolean, public qty: number, public price: number, public total: number) {

  }
}
