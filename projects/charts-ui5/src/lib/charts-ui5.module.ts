import { NgModule } from '@angular/core';
import { ChartsUi5Component } from './charts-ui5.component';
import { ChartsModule as NG2Module } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';



@NgModule({
  declarations: [
    ChartsUi5Component,
    BarchartComponent
  ],
  imports: [
    NG2Module
  ],
  exports: [
    ChartsUi5Component,
    BarchartComponent
  ]
})
export class ChartsUi5Module { }
