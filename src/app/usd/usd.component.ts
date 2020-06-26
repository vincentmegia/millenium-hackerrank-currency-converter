import {Component, Input, ViewChild} from '@angular/core';
import {YenComponent} from '../yen/yen.component';
import {DataService} from '../app.sersvice';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
  yenDisplayText: number;

  constructor(private dataService: DataService) {
    //for listening values from yen to be converted to usd
    this.dataService.$yenToUsdObservable.subscribe(value => {
      this.yenDisplayText = value;
    });
  }

  convertToYen(value) {
    //this.yenDisplayText = value * 0.0088;
    this.yenDisplayText = value * 113;
  }

  onUsdInput($event: any) {
    this.dataService.$usdToYenObservable.next(this.yenDisplayText  * 113);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
