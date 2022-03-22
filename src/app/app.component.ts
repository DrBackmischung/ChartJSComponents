import { Component } from '@angular/core';
import { ChartNgData, ChartNgLabel, ChartNgOptions } from 'dist/charts/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public options: ChartNgOptions = {
    responsive: true,
  };
  public labels : ChartNgLabel[] = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public style: any = {width: "50%", display: "block"}
  public hasLegend : boolean = true;

  public showFilling: boolean = false;
  public showLine: boolean = true;

  public data: ChartNgData[] = [
    { data: [65, 59, 80, 81, 141, 55, 40], measure: 'Series A', color: 'red'},
    { data: [28, 48, 40, 19, 86, 27, 90], measure: 'Series B', color: 'yellow' },
    { data: [36, 21, 56, 0, 20, 150, 4], measure: 'Series C', color: 'green' },
  ];

  title = 'Charts Playground :)';
}
