import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import {NgForm} from "@angular/forms";
// import {CocktailsServiceService} from "./cocktails-service.service";


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  toggleCocktails: boolean;
  recipeName: string = '';
  cocktailsService: CocktailService;
  cocktailInfo: Cocktail[];


  constructor( cocktailsService: CocktailService) {
    this.toggleCocktails = false;
    //this.recipeName = null;
    this.cocktailsService = cocktailsService;
    this.cocktailInfo = new Array<Cocktail>();
  }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.toggleCocktails = !this.toggleCocktails;
  }

  setCocktailInfo(theCocktails: Cocktail[]): void {
    console.log("Cocktails = \n" +JSON.stringify(theCocktails, null, 2));
    this.cocktailInfo = theCocktails;
  }

  onLookup(e: Event): void {
    this.recipeName = (<HTMLInputElement> e.target).value;
    if(this.recipeName.length>5) {
      this.cocktailsService.getCocktails()
        .subscribe((data)=> this.setCocktailInfo(data));
    }
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cocktailsService.addCocktail({ name } as Cocktail)
      .subscribe(cocktail => {
        this.cocktailInfo.push(cocktail);
      });
  }

  delete(cocktail: Cocktail): void {
    this.cocktailInfo = this.cocktailInfo.filter(h => h !== cocktail);
    this.cocktailsService.deleteCocktail(cocktail.id).subscribe();
  }

}



