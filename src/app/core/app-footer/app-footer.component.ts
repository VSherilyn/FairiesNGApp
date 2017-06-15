import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    styleUrls: ['./app-footer.component.scss'],
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent implements OnInit {
    public currentDate = new Date();

    public ngOnInit() {

    }
}