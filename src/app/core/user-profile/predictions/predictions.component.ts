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
  public authorFieldError: boolean = false;
  public contentFieldError: boolean = false;
  public openedPredictionText: string;
  public openedPredictionAuthor: string;

  public newPrediction: {
    author?: string,
    content?: string
  } = {};

  public toggleModal(visible: boolean, event) {
    event.stopPropagation();
    this.visibleModal = visible;

    this.authorInput.nativeElement.value = '';
    this.authorFieldError = false;
    this.contentInput.nativeElement.value = '';
    this.contentFieldError = false;
  }

  constructor(public predictionsService: PredictionsService) {
  }

  public createPrediction(event: Event) {
    event.preventDefault();
    if (!this.authorInput.nativeElement.value) {
      this.authorFieldError = true;
      if (!this.contentInput.nativeElement.value) {
        this.contentFieldError = true;
      }
    } else if (!this.contentInput.nativeElement.value) {
      this.contentFieldError = true;
    } else {
      this.newPrediction.author = this.authorInput.nativeElement.value.toString();
      this.newPrediction.content = this.contentInput.nativeElement.value.toString();

      this.predictionsService.createPrediction(this.newPrediction);
      this.toggleModal(false, event);
    }
  }

  public openPrediction(index) {
    this.openedPredictionText = this.predictionsService.predictions[index].content;
    this.openedPredictionAuthor = this.predictionsService.predictions[index].author;
  }
}