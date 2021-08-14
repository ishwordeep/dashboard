import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { InternationalComponent } from './international/international.component';
import { NationalComponent } from './national/national.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: 'covid', component: CovidComponent },
  { path: 'international', component: InternationalComponent },
  { path: 'national', component: NationalComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'politics', component: PoliticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ InternationalComponent, NationalComponent, SportsComponent, EntertainmentComponent, PoliticsComponent, CovidComponent ]
