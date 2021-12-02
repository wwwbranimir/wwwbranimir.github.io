import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StorageModule } from './store/storage.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WfSearchComponent } from './components/wf-search/wf-search.component';
import { WfDailyComponent } from './components/wf-daily/wf-daily.component';
import { WfHourlyComponent } from './components/wf-hourly/wf-hourly.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WfSearchComponent,
    WfDailyComponent,
    WfHourlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
