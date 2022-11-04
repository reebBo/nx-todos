import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiModule } from '@beccs/ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, NoopAnimationsModule, MatButtonModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
