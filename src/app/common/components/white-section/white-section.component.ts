import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'white-section',
  styleUrls: ['./white-section.component.scss'],
  templateUrl: './white-section.component.html'
})

export class WhiteSectionComponent {
  public innerHeight: any;

  constructor(private router: Router, private http: Http) {
    this.innerHeight = (window.screen.height) + "px";
  }
}