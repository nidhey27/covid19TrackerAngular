import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GlobalComponent } from './components/global/global.component';
import { CountryComponent } from './components/country/country.component';
import { DashcardsComponent } from './components/dashcards/dashcards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GlobalComponent,
    CountryComponent,
    DashcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
