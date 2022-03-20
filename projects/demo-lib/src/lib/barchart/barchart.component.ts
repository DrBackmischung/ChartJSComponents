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
  selector: 'drb-barchart-test',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
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

  constructor() { }

  ngOnInit(): void {
  }

}
