import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfDailyComponent } from './wf-daily.component';

describe('WfDailyComponent', () => {
  let component: WfDailyComponent;
  let fixture: ComponentFixture<WfDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
