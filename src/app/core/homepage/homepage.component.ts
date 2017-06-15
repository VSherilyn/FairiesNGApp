import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  styleUrls: ['./homepage.component.scss'],
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {
  public visibleModal: boolean;

  public toggleModal(visible: boolean) {
    this.visibleModal = visible;
  }
}