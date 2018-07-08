import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';

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
