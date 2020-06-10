import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './components/global/global.component';
import { CountryComponent } from './components/country/country.component';


const routes: Routes = [
  { path : '', component : GlobalComponent},
  { path : 'countrywise', component : CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
