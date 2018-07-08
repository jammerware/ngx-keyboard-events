import { Component, OnInit } from '@angular/core';
import { NgxKeyboardEventsService } from 'ngx-keyboard-events';

@Component({
    selector: 'ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngx';

    constructor(private keyboardEventsService: NgxKeyboardEventsService) { }

    ngOnInit() {
        this.keyboardEventsService.onKeyPressed.subscribe(keyEvent => {
            console.log('key event', keyEvent);
        });
    }
}
