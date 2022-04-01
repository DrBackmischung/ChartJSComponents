import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsUi5Component } from './charts-ui5.component';

describe('ChartsUi5Component', () => {
  let component: ChartsUi5Component;
  let fixture: ComponentFixture<ChartsUi5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsUi5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsUi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
