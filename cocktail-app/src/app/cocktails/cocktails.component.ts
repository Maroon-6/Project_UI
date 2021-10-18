import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { COCKTAILS } from '../mock-cocktails';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  
  cocktails = COCKTAILS;
  selectedCocktail?: Cocktail;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }
}