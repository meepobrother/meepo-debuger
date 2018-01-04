import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DebugerModule } from '../../src/app/app';
// import {WorkerAppModule} from '@angular/platform-webworker';
import { EventModule } from 'meepo-event';
import { StoreModule } from 'meepo-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DebugerModule,
    EventModule.forRoot(),
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

