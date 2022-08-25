import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DizoComponent } from './components/dizo/dizo/dizo.component';
import { HttpClientModule} from '@angular/common/http';
import { FireboultComponent } from './components/fireboult/fireboult/fireboult.component';

@NgModule({
  declarations: [
    AppComponent,
    DizoComponent,
    FireboultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
