import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts.component';
import { ChartsModule as NG2Module } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';



@NgModule({
  declarations: [
    ChartsComponent,
    BarchartComponent,
    LinechartComponent
  ],
  imports: [
    NG2Module
  ],
  exports: [
    ChartsComponent,
    BarchartComponent,
    LinechartComponent
  ]
})
export class ChartsModule { }
