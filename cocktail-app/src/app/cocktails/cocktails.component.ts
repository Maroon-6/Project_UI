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
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktailService.getCocktails()
        .subscribe(cocktails => this.cocktails = cocktails);
  }
}