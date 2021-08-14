import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturednewsComponent } from './featurednews/featurednews.component';
import { MostpopularComponent } from './mostpopular/mostpopular.component';
import { NationalComponent } from './national/national.component';
import { InternationalComponent } from './international/international.component';
import { CovidComponent } from './covid/covid.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticsComponent } from './politics/politics.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturednewsComponent,
    MostpopularComponent,
    NationalComponent,
    InternationalComponent,
    CovidComponent,
    SportsComponent,
    PoliticsComponent,
    EntertainmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
