import { WfState } from './../../store/states/wf.state';
import {
  selectAllWf,
  selectWfEntities,
  selectWfIds,
} from './../../store/selectors/wf.selectors';

import { WeatherForecastService } from './../../services/weather-forecast.service';
import { WeatherConditions } from 'src/app/models/weatherconditions.model';
import { WfLoadAction } from './../../store/actions/wf.actions';

import { SearchParams } from 'src/app/models/search-params.model';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherDetailViewFactory } from 'src/app/factories/weather-detail-view-factory';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wf-search',
  templateUrl: './wf-search.component.html',
  styleUrls: ['./wf-search.component.css'],
})
export class WfSearchComponent implements OnInit {
  @ViewChild('weatherDisplay', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  weatherConditions: WeatherConditions;
  searchParams: SearchParams;

  public constructor(
    private readonly resolver: ComponentFactoryResolver,
    public store: Store<WfState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: WeatherForecastService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params): void => {
      this.searchParams = {
        mode: params.mode,
        cityName: params.cityName
      } as SearchParams;
      this.loadWeatherConditions(this.searchParams);
    });
  }

  createComponent(): void {
    const viewFactory = new WeatherDetailViewFactory(
      this.searchParams,
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
    this.searchParams = form.value;
    //TODO: move this to utilities
    this.router.navigate([], {
      queryParams: {
        mode: this.searchParams.mode,
        cityName: this.searchParams.cityName,
      },
      queryParamsHandling: 'merge',
    });

    this.createComponent();
    return true;
  }

  private loadWeatherConditions(searchParams: SearchParams): void {
    this.store.dispatch(
      new WfLoadAction({
        cityName: this.searchParams.cityName,
        mode: this.searchParams.mode,
      } as SearchParams)
    );

    this.store.pipe(select(selectWfIds)).subscribe(store=> {
      if (store.length > 0) {
        this.store.pipe(select(selectAllWf)).subscribe(w =>{});
      }
    });

  }
}
