import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { YenComponent } from './yen.component';
import { By } from '@angular/platform-browser';
import {DataService} from '../app.sersvice';

describe('PlaintextComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YenComponent
      ],
      imports: [FormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should convert Yen to USD', async(() => {
    let fixture = TestBed.createComponent(YenComponent);
    fixture.detectChanges();
    let u = fixture.componentInstance;
    let a = Math.random();
    console.log(a);
    u.convertToUsd(a);
    expect(u.usdDisplayText).toEqual(a * 0.0088);
  }));

  it('should return US Dollars', async(() => {
    let fixture = TestBed.createComponent(YenComponent);
    fixture.detectChanges();
    let u = fixture.componentInstance;
    let a = Math.random();
    u.convertToUsd(a);
    let res = u.getUsdDisplayText()
    expect(res).toEqual(a * 0.0088);
  }));
});
