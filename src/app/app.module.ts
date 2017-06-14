import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppHeaderModule } from './core/app-header/app-header.module';
import { HomepageModule } from './core/homepage/homepage.module';

import './common/scss/index.scss';
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    HomepageModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
