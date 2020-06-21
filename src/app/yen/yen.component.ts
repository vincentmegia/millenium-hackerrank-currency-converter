import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent {
  usdDisplayText: number;
  constructor() { }

  convertToUsd(newYen) {
  }

  getUsdDisplayText() {
      return 0;
  }
}
