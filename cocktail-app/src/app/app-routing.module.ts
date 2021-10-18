import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: CocktailDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cocktails', component: CocktailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }