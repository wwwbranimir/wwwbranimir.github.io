import { WfLoadAction } from './../../store/actions/wf.actions';
import { GlobalState } from './../../store/states/global.state';

import { SearchParams } from 'src/app/models/search-params.model';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherDetailViewFactory } from 'src/app/factories/weather-detail-view-factory';
import { Store } from '@ngrx/store';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  public constructor(
    private readonly resolver: ComponentFactoryResolver,
    public readonly store: Store<GlobalState>
  ) {}

  createComponent(searchParams: SearchParams): void {
    const viewFactory = new WeatherDetailViewFactory(
      searchParams,
      this.container,
      this.resolver
    );
    this.componentRef = viewFactory.createComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  submitForm(form: NgForm): boolean {
    if (!form.valid) {
      return false;
    }
    const searchParams: SearchParams = form.value;

    this.createComponent(searchParams);
    return true;
  }

  private loadWeatherConditions(searchParams: SearchParams) {
    this.store.dispatch(
      new WfLoadAction({
        cityName: searchParams.cityName,
        period: searchParams.period,
      } as SearchParams)
    );
  }
}
