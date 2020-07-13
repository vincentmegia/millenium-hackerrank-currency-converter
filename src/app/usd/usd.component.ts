import { Component, EventEmitter, Output } from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
    yenDisplayText: number;
    @Output()
    usdEventEmitter = new EventEmitter<number>();

    convertToYen(value) {
        this.yenDisplayText = value * 113;
    }

    onUsdInput($event: any) {
        //this.$usdToYenObservable.next(this.yenDisplayText  * 113);
      this.usdEventEmitter.emit(this.yenDisplayText  * 113);
    }

    getYenDisplayText() {
        return this.yenDisplayText;
    }
}
