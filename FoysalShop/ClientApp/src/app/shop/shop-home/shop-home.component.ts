import { Component, OnInit, OnDestroy, Injectable } from "@angular/core";
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Injectable()
export class MyService {
  getCounter(tick) {
    return timer(0, tick);
  }
}

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
  providers: [MyService]
})

export class ShopHomeComponent implements OnInit, OnDestroy {
  countDown: Subscription;
  counter = 1800;
  tick = 1000;

  constructor(private myService: MyService) { }

  ngOnInit() {
    this.countDown = this.myService
      .getCounter(this.tick)
      .subscribe(() => this.counter--);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

}


@Pipe({
  name: "formatCount"
})
export class FormatCountdownPipe implements PipeTransform {

  transform(value: number): Hero {

    const days: number = Math.floor((value / 3600) / 24);
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    const seconds: number = Math.floor(value - minutes * 60);
    var model = new Hero(('00' + days).slice((days <= 9 ? 1 : 2)),
      ('00' + hours).slice(-2),
      ('00' + minutes).slice(-2),
      ('00' + seconds).slice(-2));
  
    return model
  }
}

export class Hero {

  constructor(
    public days: string,
    public hours: string,
    public minutes: string,
    public seconds: string
  ) { }

}
