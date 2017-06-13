import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppHeaderModule } from './core/app-header/app-header.module';

import './common/scss/index.scss';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
