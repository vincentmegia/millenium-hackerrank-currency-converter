import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
  yenDisplayText: number;
  constructor() { }

  convertToYen(newUsd) {
  }

  getYenDisplayText() {
    return 0;
  }
}
