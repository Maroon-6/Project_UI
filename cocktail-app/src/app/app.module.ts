import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsComponent,
    CocktailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
