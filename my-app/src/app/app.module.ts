import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StepComponent } from './step/step.component';
import { Step2Component } from './step2/step2.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    Step2Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
