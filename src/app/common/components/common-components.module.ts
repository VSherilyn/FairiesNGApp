import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowComponent } from './modal-window/modal-window.component';
import { WhiteSectionComponent } from "./white-section/white-section.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalWindowComponent,
    WhiteSectionComponent
  ],
  exports: [
    ModalWindowComponent,
    WhiteSectionComponent
  ]
})

export class CommonComponentsModule {

}