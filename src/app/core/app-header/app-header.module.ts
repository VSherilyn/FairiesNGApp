import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppHeaderComponent } from './app-header.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppHeaderComponent,
    NavBarComponent
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule {
}