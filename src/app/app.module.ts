import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { FilingStatusComponent } from './filing-status/filing-status.component';


@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    FilingStatusComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
