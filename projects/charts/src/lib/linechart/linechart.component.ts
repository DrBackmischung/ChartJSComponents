import { Component, OnInit, Input } from '@angular/core';

interface props {
  style?: any;
  data: any;
  labels: any;
  hasLegend?: boolean;
  showFilling?: boolean;
  showLine?: boolean;
  options?: any;
  plugins?: any;
}

@Component({
  selector: 'drb-linechart',
  templateUrl: './linechart.component.html',
})
export class LinechartComponent implements OnInit {

  @Input() style: any;
  @Input() data: any;
  @Input() labels: any;
  @Input() hasLegend: boolean = true;
  @Input() showFilling: boolean = false;
  @Input() showLine: boolean = true;
  @Input() options: any;
  @Input() plugins: any;

  protected getProps(): props {
    const {
      style,
      data,
      labels,
      hasLegend,
      showFilling,
      showLine,
      options,
      plugins
    } = this;
    return {
      style,
      data,
      labels,
      hasLegend,
      showFilling,
      showLine,
      options,
      plugins
    }
  }

  public newData : any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.data.map((dataset: any) => {
      console.log(dataset);
      const { data, measure, color } = dataset;
      const newDataset = {
        data: data,
        label: measure,
        borderColor: color,
        backgroundColor: color,
        hoverBorderColor: color,
        pointHoverBorderColor: 'grey',
        pointBorderColor: 'grey',
        pointBackgroundColor: color,
        pointHoverBackgroundColor: 'grey',
        fill: this.showFilling,
        showLine: this.showLine
      };
      console.log("new: "+newDataset);
      this.newData.push(newDataset);
      console.log("new dataset: "+this.newData);
    })
    console.log(this.newData);
  }

}
