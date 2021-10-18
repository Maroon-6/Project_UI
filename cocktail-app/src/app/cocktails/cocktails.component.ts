import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  
  selectedCocktail?: Cocktail;

  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCocktails();
  }

  onSelect(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
    this.messageService.add(`CocktailsComponent: Selected cocktail id=${cocktail.id}`);
  }

  getCocktails(): void {
    this.cocktailService.getCocktails()
        .subscribe(cocktails => this.cocktails = cocktails);
  }
}