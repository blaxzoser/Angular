import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppServeComponent } from './app-serve/app-serve.component';
import { AppWarningComponent } from './app-warning/app-warning.component';


@NgModule({
  declarations: [
    AppComponent,
    AppServeComponent,
    AppWarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
