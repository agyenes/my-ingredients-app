import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('salt', 1000),
    new Ingredient('water', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
