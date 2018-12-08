import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MuseumsComponent } from './museums/museums.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FilterPipe } from './filter.pipe';
import { MuseumQuarterComponent } from './museum-quarter/museum-quarter.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumsComponent,
    MuseumDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe,
    MuseumQuarterComponent,
    AboutComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-ux8l0BfsRn5_HTmjg7HvIKFckREssCA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
