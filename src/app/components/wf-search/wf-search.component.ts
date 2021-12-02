import { WfDailyComponent } from './../wf-daily/wf-daily.component';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<WfDailyComponent>;

  isSubmitted = false;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(searchParams: any) : void {
    //TODO: move this into separate factory
    if (searchParams.period === 'daily') {
      this.container.clear();
      const factory: ComponentFactory<WfDailyComponent> =
        this.resolver.resolveComponentFactory(WfDailyComponent);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.searchParams = searchParams;
      return;
    }
    this.container.clear();
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
