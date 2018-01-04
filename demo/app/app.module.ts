import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DebugerModule } from '../../src/app/app';
import { EventModule } from 'meepo-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DebugerModule,
    EventModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

