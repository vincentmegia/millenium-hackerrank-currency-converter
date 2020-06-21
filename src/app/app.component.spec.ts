import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { USDComponent } from './usd/usd.component';
import { YenComponent } from './yen/yen.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        USDComponent,
        YenComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should pass data between components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const yen = fixture.debugElement.query(By.css('textarea#yen')).nativeElement;
    console.log(yen);
    yen.value = '123';
    fixture.detectChanges();
    yen.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usd = fixture.debugElement.query(By.css('textarea#usd')).nativeElement;
      console.log(usd.value);
    });
  });
});
