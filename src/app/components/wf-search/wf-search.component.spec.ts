import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSearchComponent } from './wf-search.component';

describe('WfSearchComponent', () => {
  let component: WfSearchComponent;
  let fixture: ComponentFixture<WfSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
