import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent {
    usdDisplayText: number;
    @Output() yenEventEmitter = new EventEmitter();

    convertToUsd(value) {
        return this.usdDisplayText = value * 0.0088;
    }

    getUsdDisplayText() {
      return this.usdDisplayText;
    }

    onYenInput($event: any) {
      this.yenEventEmitter.emit(this.usdDisplayText * 0.0088);
    }
}
