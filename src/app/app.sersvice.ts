import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {
  $yenToUsdObservable: Subject<any>;
  $usdToYenObservable: Subject<any>;

  constructor() {
    this.$yenToUsdObservable = new Subject<any>();
    this.$usdToYenObservable = new Subject<any>();
  }
}
