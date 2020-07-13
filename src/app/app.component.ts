import {Component, ViewChild} from '@angular/core';
import {USDComponent} from './usd/usd.component';
import {YenComponent} from './yen/yen.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild(USDComponent)
    usdComponent: USDComponent

    @ViewChild(YenComponent)
    yenComponent: YenComponent;

    handleUsdEvent(value) {
        this.yenComponent.convertToUsd(value);
    }

    handleYenEvent(value) {
        this.usdComponent.convertToYen(value);
    }
}
