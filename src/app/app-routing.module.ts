import { WfSearchComponent } from './components/wf-search/wf-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'weather-forecast', component: WfSearchComponent },
  { path: '', redirectTo: '/weather-forecast', pathMatch: 'full' },
  { path: '**', redirectTo: '/weather-forecast' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
