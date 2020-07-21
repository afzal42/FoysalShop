import { AfterViewInit, Component } from '@angular/core';

@Component({
  template: '',
})
export abstract class UpgradableComponent implements AfterViewInit {
  
  public ngAfterViewInit() {
    var componentHandler: any;
    componentHandler.upgradeDom();
  }
}
