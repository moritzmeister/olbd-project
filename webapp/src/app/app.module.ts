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
<<<<<<< HEAD
import { MuseumSearchComponent } from './museum-search/museum-search.component';
=======
import { FilterPipe } from './filter.pipe';
>>>>>>> 61275a54c4f38283583bf82917bba785f970b98e

@NgModule({
  declarations: [
    AppComponent,
    MuseumsComponent,
    MuseumDetailComponent,
    MessagesComponent,
    DashboardComponent,
<<<<<<< HEAD
    MuseumSearchComponent
=======
    FilterPipe
>>>>>>> 61275a54c4f38283583bf82917bba785f970b98e
  ],
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
