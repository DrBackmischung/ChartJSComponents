import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-demo-lib',
  template: `
    <h1>
      Test Library :)
    </h1>
    <p>
      Component is loaded!
    </p>
  `,
  styles: [
  ]
})
export class DemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
