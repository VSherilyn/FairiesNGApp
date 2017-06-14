import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component'

export const routes = [
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomepageComponent
  ]
})

export class HomepageModule {
  public static routes = routes;
}