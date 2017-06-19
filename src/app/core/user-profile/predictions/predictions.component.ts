import { Component, ElementRef, ViewChild } from '@angular/core';

import { PredictionsService } from '../../../common/services/predictions.service'

@Component({
  selector: 'predictions',
  styleUrls: ['./predictions.component.scss'],
  templateUrl: './predictions.component.html'
})

export class PredictionsComponent {

  @ViewChild('predictionAuthorInput') authorInput: ElementRef;
  @ViewChild('predictionContentInput') contentInput: ElementRef;

  public visibleModal: boolean;

  public newPrediction: {
    author?: string,
    content?: string
  } = {};

  public toggleModal(visible: boolean, event) {
    this.visibleModal = visible;
    event.stopPropagation();
  }

  constructor(public predictionsService: PredictionsService) {
  }

  public createPrediction(event: Event) {
    event.preventDefault();
    this.newPrediction.author = this.authorInput.nativeElement.value.toString();
    this.newPrediction.content = this.contentInput.nativeElement.value.toString();

    this.predictionsService.createPrediction(this.newPrediction);
  }
}