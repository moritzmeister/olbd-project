import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MuseumsComponent } from './museums/museums.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MuseumQuarterComponent} from './museum-quarter/museum-quarter.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MuseumsComponent },
  { path: 'detail/:name', component: MuseumDetailComponent },
  { path: 'quarter/:name', component: MuseumQuarterComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
