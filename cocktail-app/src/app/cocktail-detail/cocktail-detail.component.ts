import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../cocktail';


@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

  @Input() cocktail?: Cocktail;

  constructor() { }

  ngOnInit(): void {
  }

}
