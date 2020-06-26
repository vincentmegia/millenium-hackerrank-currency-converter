import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../app.sersvice';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent implements OnInit {
  usdDisplayText: number;
  input: any;

  constructor(private dataService: DataService) {
  }

  convertToUsd(value) {
    //return this.usdDisplayText = value * 113;
    return this.usdDisplayText = value * 0.0088;
  }
  getUsdDisplayText() {
      return this.usdDisplayText;
  }

  onYenInput($event: any) {
    this.dataService.$yenToUsdObservable.next(this.usdDisplayText * 0.0088);
  }

  ngOnInit(): void {
    //for receiving usd values
    this.dataService.$usdToYenObservable.subscribe(value => {
      //this.convertToUsd(value);
      this.usdDisplayText = value;
    });
  }
}
