import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StepComponent } from './step/step.component';
import { Step2Component } from './step2/step2.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    Step2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
