import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttptestComponent } from './components/httptest/httptest.component';
import { HttpClientModule } from '@angular/common/http';
import { HtComponent } from './components/ht/ht.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HttptestComponent,
    HtComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DatePipe
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
