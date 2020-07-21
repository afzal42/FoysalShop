
import { Component, OnInit, OnDestroy, Injectable } from "@angular/core";
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { Options, LabelType } from 'ng5-slider';

@Injectable()
export class MyService {
  getCounter(tick) {
    return timer(0, tick);
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MyService]
})

export class ProductComponent implements OnInit, OnDestroy {
  countDown: Subscription;
  counter = 1800;
  tick = 1000;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '৳' + value;
        case LabelType.High:
          return '৳' + value;
        default:
          return '৳' + value;
      }
    }
  };

  productList: Array<Product> = new Array<Product>();

  constructor(private myService: MyService) {
  }

  ngOnInit() {

    for (var i = 0; i < 10; i++) {
      var obj = new Product(i, "Item " + i, i.toString(), false);
      this.productList.push(obj);
    }
    this.countDown = this.myService
      .getCounter(this.tick)
      .subscribe(() => this.counter--);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  addToFav(Product) {
    console.log(Product);
    Product.isFav = !Product.isFav;
  }

  valueChange(value: any, value2: any): void {
    console.log(value);
    console.log(value2);
  }

  loadProductList() {
    console.log(this.options);
  }
}

export class Product {
  constructor(public id: number, public name: string, public path: string, public isFav: boolean) {

  }
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const days: number = Math.floor((value / 3600) / 24);
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return ('00' + days).slice((days <= 9 ? 1 : 2)) + ' days ' + ('00' + hours).slice(-2) + ' hrs ' + ('00' + minutes).slice(-2) + ' min ' + ('00' + Math.floor(value - minutes * 60)).slice(-2) + ' sec';
  }
}
