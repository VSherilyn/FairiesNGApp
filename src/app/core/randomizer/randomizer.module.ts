import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonComponentsModule } from '../../common/components/common-components.module'

import { RandomizerComponent } from './randomizer.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule
  ],
  declarations: [
    RandomizerComponent
  ]
})

export class RandomizerModule {
}