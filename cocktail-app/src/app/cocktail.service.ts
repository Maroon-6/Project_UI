import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cocktail } from './cocktail';
import { COCKTAILS } from './mock-cocktails';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private messageService: MessageService) { }

  getCocktails(): Observable<Cocktail[]> {
    const cocktails = of(COCKTAILS);
    this.messageService.add('CocktailService: fetched cocktails');
    return cocktails;
  }
}