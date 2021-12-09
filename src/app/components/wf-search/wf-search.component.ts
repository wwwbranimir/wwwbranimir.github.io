
import { WeatherForecastService } from './../../services/weather-forecast.service';
import { WeatherConditions } from 'src/app/models/weatherconditions.model';

import { SearchParams } from 'src/app/models/search-params.model';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherState } from 'src/app/store/reducers/weather.reducers.ts';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent implements OnInit, OnDestroy {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  weatherConditions: WeatherConditions;
  searchParams: SearchParams;
  sub$: Subscription;
  selectedWeatherCondition: WeatherConditions;

  public constructor(
    private readonly resolver: ComponentFactoryResolver,
    private store: Store<WeatherState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: WeatherForecastService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params): void => {
      this.searchParams = {
        mode: params.mode,
        cityName: params.cityName,
      } as SearchParams;
    });
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
    this.sub$.unsubscribe();
  }

  submitForm(searchParams: SearchParams): boolean {
    if (!searchParams.cityName) {
      return false;
    }
    //TODO: move this to utilities
    this.router.navigate([], {
      queryParams: {
        mode: this.searchParams.mode,
        cityName: this.searchParams.cityName,
      },
      queryParamsHandling: 'merge',
    });

    this.sub$ = this.service
      .getWeatherForecast(this.searchParams)
      .subscribe(wc => {
        this.selectedWeatherCondition = wc;
      });

    return true;
  }


}
