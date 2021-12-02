import { WfHourlyComponent } from './../components/wf-hourly/wf-hourly.component';
import { WfDailyComponent } from './../components/wf-daily/wf-daily.component';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

export class WeatherDetailViewFactory {
  componentRef: ComponentRef<any>;

  public constructor(
    private searchParams,
    private container,
    private resolver: ComponentFactoryResolver
  ) {}

  public createComponent(): ComponentRef<any> {
    if (!this.searchParams) {
      this.container.clear();
      return null;
    }

    this.container.clear();
    const factory: ComponentFactory<any> = this.getFactory();
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.searchParams = this.searchParams;

    return this.componentRef;
  }
  private getFactory(): ComponentFactory<any> {
    return this.searchParams.period === 'daily'
      ? this.resolver.resolveComponentFactory(WfDailyComponent)
      : this.resolver.resolveComponentFactory(WfHourlyComponent);
  }
}
