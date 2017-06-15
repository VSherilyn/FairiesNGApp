import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonComponentsModule } from '../../common/components/common-components.module';

import { HomepageComponent } from './homepage.component'

export const routes = [
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule
  ],
  declarations: [
    HomepageComponent
  ]
})

export class HomepageModule {
  public static routes = routes;
}