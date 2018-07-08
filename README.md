# NgxKeyboardEvents

This is a simple Angular (2+) module to bring an easy way to listen to keyboard events in a modularized way.

## Getting started

**Install the package**
```bash
npm i ngx-keyboard-events
```

**app.module.ts**
```typescript
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxKeyboardEventsModule, // import the module
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**some.component.ts**
import { Component, OnInit } from '@angular/core';
import { NgxKeyboardEventsService, NgxKeyboardEvent } from 'ngx-keyboard-events';

```typescript
@Component({
    selector: 'ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngx';

    constructor(private keyboardEventsService: NgxKeyboardEventsService) { }

    ngOnInit() {
        this.keyboardEventsService.onKeyPressed.subscribe((keyEvent: NgxKeyboardEvent) => {
            console.log('key event', keyEvent);
        });
    }
}
```