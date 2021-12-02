import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfHourlyComponent } from './wf-hourly.component';

describe('WfHourlyComponent', () => {
  let component: WfHourlyComponent;
  let fixture: ComponentFixture<WfHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfHourlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
