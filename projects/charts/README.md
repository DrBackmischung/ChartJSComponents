# Charts

Install this library by using `npm install @drbackmischung/charts`.

To use the charts you have to import the ChartsModule in your app.module.ts.

## BarChart

```html
<drb-barchart
    [style]="style" 
    [data]="data"
    [labels]="labels"
    [options]="options"
    [hasLegend]="hasLegend"
></drb-barchart>
```
Style: CSS Style for the surrounding `<div>`

Data: Data to be displayed in the Chart

Labels: Labels for the different bars

Options: Additional configuration

HasLegend: Boolean to turn the legent off

Example:

```javascript
  public style: any = {width: "50%", display: "block"}
  public data: ChartNgData[] = [
    { data: [65, 59, 80, 81, 141, 55, 40], measure: 'Sales Product A', color: 'red'},
    { data: [36, 21, 56, 0, 20, 150, 4], measure: 'Sales Product B', color: 'green' },
  ];
  public labels : ChartNgLabel[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public options: ChartNgOptions = {
    responsive: true,
  };
  public hasLegend : boolean = true;
```

## LineChart

```html
<drb-linechart
    [style]="style"
    [data]="data"
    [labels]="labels"
    [options]="options"
    [hasLegend]="hasLegend"
    [showFilling]="showFilling"
    [showLine]="showLine"
></drb-linechart>
```
Style: CSS Style for the surrounding `<div>`

Data: Data to be displayed in the Chart

Labels: Labels for the different bars

Options: Additional configuration

HasLegend: Boolean to turn the legent off

ShowFilling: Boolean to fill the insides of the lines

ShowLine: Boolean to turn on the lines

Example:

```javascript
  public style: any = {width: "50%", display: "block"}
  public data: ChartNgData[] = [
    { data: [65, 59, 80, 81, 141, 55, 40], measure: 'Sales Product A', color: 'red'},
    { data: [36, 21, 56, 0, 20, 150, 4], measure: 'Sales Product B', color: 'green' },
  ];
  public labels : ChartNgLabel[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public options: ChartNgOptions = {
    responsive: true,
  };
  public hasLegend : boolean = true;
  public showFilling: boolean = false;
  public showLine: boolean = true;
```