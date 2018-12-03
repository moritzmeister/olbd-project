import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MuseumsComponent } from './museums/museums.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'search', component: MuseumsComponent },
  { path: 'detail/:name', component: MuseumDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
