import { WfLoadAction } from './../../store/actions/wf.actions';
import { GlobalState } from './../../store/states/global.state';

import { SearchParams } from 'src/app/models/search-params.model';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherDetailViewFactory } from 'src/app/factories/weather-detail-view-factory';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent implements AfterViewInit {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  public constructor(
    private readonly resolver: ComponentFactoryResolver,
    public readonly store: Store<GlobalState>,
    private readonly route: ActivatedRoute
  ) {}

  public ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchParams: SearchParams = {
        period: params.mode,
        cityName: params.city,
      };
      this.loadWeatherConditions(searchParams);
    });
  }

  createComponent(searchParams: SearchParams): void {
    const viewFactory = new WeatherDetailViewFactory(
      searchParams,
      this.container,
      this.resolver
    );
    this.componentRef = viewFactory.createComponent();
  }

  ngOnDestroy(): void {
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

  private loadWeatherConditions(searchParams: SearchParams): void {
    this.store.dispatch(
      new WfLoadAction({
        cityName: searchParams.cityName,
        period: searchParams.period,
      } as SearchParams)
    );
  }
}
