import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MuseumsComponent } from './museums/museums.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FilterPipe } from './filter.pipe';
import { MuseumQuarterComponent } from './museum-quarter/museum-quarter.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumsComponent,
    MuseumDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe,
    MuseumQuarterComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
