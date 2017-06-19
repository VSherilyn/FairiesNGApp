import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { CommonComponentsModule } from '../../common/components/common-components.module';

import { UserProfileComponent } from './user-profile.component'
import { PredictionsComponent } from './predictions/predictions.component';

export const routes = [
  { path: '', component: UserProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule,
    FormsModule
  ],
  declarations: [
    UserProfileComponent,
    PredictionsComponent
  ]
})

export class UserProfileModule {
  public static routes = routes;
}