import { SearchParams } from 'src/app/models/search-params.model';
import { WfHourlyComponent } from './../components/wf-hourly/wf-hourly.component';
import { WfDailyComponent } from './../components/wf-daily/wf-daily.component';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

export class WeatherDetailViewFactory {
  componentRef: ComponentRef<WfDailyComponent | WfHourlyComponent>;

  public constructor(
    private searchParams: SearchParams,
    private container,
    private resolver: ComponentFactoryResolver
  ) {}

  public createComponent(): ComponentRef<WfDailyComponent | WfHourlyComponent> {
    this.container.clear();

    if (!this.searchParams) {
      return null;
    }

    const factory: ComponentFactory<WfDailyComponent | WfHourlyComponent> = this.getFactory();
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.searchParams = this.searchParams;

    return this.componentRef;
  }

  private getFactory(): ComponentFactory<WfDailyComponent | WfHourlyComponent> {
    return this.searchParams.mode === 'daily'
      ? this.resolver.resolveComponentFactory(WfDailyComponent)
      : this.resolver.resolveComponentFactory(WfHourlyComponent);
  }
}
