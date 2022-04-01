import { Component, OnInit, Input } from '@angular/core';

interface props {
  style?: any;
  data: any;
  labels: any;
  hasLegend?: boolean;
  options?: any;
  plugins?: any;
}

@Component({
  selector: 'drb-barchart',
  templateUrl: './barchart.component.html'
})
export class BarchartComponent implements OnInit {

  @Input() style: any;
  @Input() data: any;
  @Input() labels: any;
  @Input() hasLegend: boolean = true;
  @Input() options: any;
  @Input() plugins: any;

  protected getProps(): props {
    const {
      style,
      data,
      labels,
      hasLegend,
      options,
      plugins
    } = this;
    return {
      style,
      data,
      labels,
      hasLegend,
      options,
      plugins
    }
  }

  public newData : any = [];
  public newOptions : any = [];

  constructor() { }

  ngOnInit(): void {
    
    this.data.map((dataset: any) => {
      const { data, measure, color } = dataset;
      const newDataset = {
        data: data,
        label: measure,
        backgroundColor: color,
        hoverBackgroundColor: color,
        pointBackgroundColor: color,
      };
      this.newData.push(newDataset);
    })

    const { responsive, xAxisBeginAtZero, yAxisBeginAtZero } = this.options;
    this.newOptions = {
      responsive: responsive,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: yAxisBeginAtZero
            }
        }],
        xAxes: [{
            ticks: {
                beginAtZero: xAxisBeginAtZero
            }
        }]
      }
    }
  }

}
