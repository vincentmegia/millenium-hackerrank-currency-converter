import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  $values: Observable<number>;

  constructor() {
    this.$values = new Observable<number>();
  }
  publish(value)  {
    this.$values = new Observable<number>(subscriber => {
      subscriber.next(value);
    });
  }
}
