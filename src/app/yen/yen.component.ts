import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../app.sersvice';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent implements OnInit {
  usdDisplayText: number;
  yenToUsd: number = 0.0088;
  constructor(private dataService: DataService) { }

  convertToUsd(newYen) {
  }

  getUsdDisplayText() {
      return 0;
  }

  ngOnInit(): void {
    debugger;
    this.dataService.$values.pipe(x => {
      debugger;
      this.usdDisplayText = x * this.yenToUsd;
    });
  }
}
