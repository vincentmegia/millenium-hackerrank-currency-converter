import {Component, Input, ViewChild} from '@angular/core';
import {YenComponent} from '../yen/yen.component';
import {DataService} from '../app.sersvice';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
  yenDisplayText: number;
  usdToYen = 113;
  input: number;

  constructor(private dataService: DataService) { }

  onUsdInput() {
    console.log(this.input);
    this.dataService.publish(this.input);
  }

  convertToYen(newUsd) {
    this.yenDisplayText = newUsd * this.usdToYen;
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
