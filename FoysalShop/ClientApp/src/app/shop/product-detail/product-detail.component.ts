import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  //deadline = new Date(Date.parse((new Date()).toString()) + 69 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000);


  constructor() {
    
  }

  games;
  gamesFormatted;

  ngOnInit() {

    //this.initializeClock(this.deadline);
    this.games = ["a", "b", "c", "d", "e"];
    this.gamesFormatted = [];
    var j = -1;

    for (var i = 0; i < this.games.length; i++) {
      if (i % 3 == 0) {
        j++;
        this.gamesFormatted[j] = [];
        this.gamesFormatted[j].push(this.games[i]);
      }
      else {
        this.gamesFormatted[j].push(this.games[i]);
      }
    }
  }

  //t: any;
  //days = 0; hours = 0; minutes = 0; seconds = 0;

  //getTimeRemaining() {
  //  this.t = Date.parse(this.deadline.toString()) - Date.parse((new Date()).toString());
  //  this.seconds = Math.floor((this.t / 1000) % 60);
  //  this.minutes = Math.floor((this.t / 1000 / 60) % 60);
  //  this.hours = Math.floor((this.t / (1000 * 60 * 60)) % 24);
  //  this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
  //  //var obj = new timeClock(t, days, hours, minutes, seconds);
  //  //return obj;
  //}

  //updateClock(endtime: string) {


  //  var daysSpan = document.getElementsByClassName(".days");
  //  var hoursSpan = document.getElementsByClassName(".hours");
  //  var minutesSpan = document.getElementsByClassName(".minutes");
  //  var secondsSpan = document.getElementsByClassName(".seconds");

  //  this.getTimeRemaining();

  //  //daysSpan.item.bind(t.days);
  //  //hoursSpan.item.bind(('0' + t.hours).slice(-2));
  //  //minutesSpan.item.bind(('0' + t.minutes).slice(-2));
  //  secondsSpan.item.bind(('0' + this.seconds).slice(-2))
  //  //console.log(t.seconds);
  //  var timeinterval = setInterval(this.updateClock, 1000);

  //  if (this.t.total <= 0) {
  //    clearInterval(timeinterval);
  //  }
  //}

  //initializeClock(endtime) {
  //  this.updateClock(endtime);
  //}

}

export class timeClock {
  constructor(public total: number, public days: number, public hours: number, public minutes: number, public seconds: number) {

  }
}
