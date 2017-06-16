import { Component, EventEmitter, Input, Output, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-window',
  styleUrls: ['./modal-window.component.scss'],
  templateUrl: './modal-window.component.html'
})

export class ModalWindowComponent {
  @Input() public visible: boolean;
  @Output() public visibilityChange = new EventEmitter<boolean>(false);
  @ViewChild('modal') modal: ElementRef;

  public closeModal() {
    this.visible = false;
    this.visibilityChange.emit(false);
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: any): void {
    if (!this.modal.nativeElement.contains(target)) {
      this.closeModal();
    }
  }
}