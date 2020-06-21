import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YenComponent } from './yen/yen.component';
import { USDComponent } from './usd/usd.component';
import {DataService} from './app.sersvice';

@NgModule({
  declarations: [
    AppComponent,
    YenComponent,
    USDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
