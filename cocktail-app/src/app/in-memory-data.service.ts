import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cocktails = [
      { id: 1, name: 'Queen Mary' },
      { id: 2, name: 'Blackthorn' },
      { id: 3, name: 'Martini' },
      { id: 4, name: 'The Last Word' },
      { id: 5, name: 'Salty Dog' },
      { id: 6, name: 'Mickey Slim' },
      { id: 7, name: 'Cloud Special' },
      { id: 8, name: 'Gibson' },
      { id: 9, name: 'White Lady' },
      { id: 10, name: 'Old Etonian' }
];
    return {cocktails};
  }

  genId(cocktails: Cocktail[]): number {
    return cocktails.length > 0 ? Math.max(...cocktails.map(cocktail => cocktail.id)) + 1 : 1;
  }
}