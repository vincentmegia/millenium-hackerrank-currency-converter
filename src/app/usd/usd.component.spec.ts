import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { USDComponent } from './usd.component';
import { By } from '@angular/platform-browser';


describe('CiphertextComponent', () => {

  let fixture: any;
  let comp: any;
  let usd: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        USDComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));


  it('should convert USD to Yen', async(() => {
    let fixture = TestBed.createComponent(USDComponent);
    fixture.detectChanges();
    let ct = fixture.componentInstance;
    let a = Math.random();
    ct.convertToYen(a);
    expect(ct.yenDisplayText).toEqual(a * 113);
  }));

  it('should return JP Yen', async(() => {
    let fixture = TestBed.createComponent(USDComponent);
    fixture.detectChanges();
    let ct = fixture.componentInstance;
    let a = Math.random();
    ct.convertToYen(a);
    let res = ct.getYenDisplayText()
    expect(res).toEqual(a * 113);
  }));
});
