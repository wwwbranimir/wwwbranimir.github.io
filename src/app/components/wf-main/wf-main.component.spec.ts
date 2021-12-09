import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMainComponent } from './wf-main.component';

describe('WfMainComponent', () => {
  let component: WfMainComponent;
  let fixture: ComponentFixture<WfMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
