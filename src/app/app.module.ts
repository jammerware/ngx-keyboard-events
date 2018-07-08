import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxKeyboardEventsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
