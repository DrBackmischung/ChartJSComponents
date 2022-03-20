import { NgModule } from '@angular/core';
import { DemoLibComponent } from './demo-lib.component';
import { TextComponent } from './text/text.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DemoLibComponent,
    TextComponent,
    BarchartComponent
  ],
  imports: [
    ChartsModule
  ],
  exports: [
    DemoLibComponent,
    TextComponent,
    BarchartComponent
  ]
})
export class DemoLibModule { }
