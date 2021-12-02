import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherDetailViewFactory } from 'src/app/factories/weather-detail-view-factory';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  isSubmitted = false;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(searchParams: any) : void {
    const viewFactory = new WeatherDetailViewFactory(searchParams, this.container, this.resolver);
    this.componentRef = viewFactory.createComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  submitForm(form: NgForm): boolean {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    }
    this.createComponent(form.value);
    return true;
  }
}
