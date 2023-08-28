import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

//  private recipes: Recipe [ ] = [new Recipe
 //   ('The Traditional Way', 'Change your Entire Concept',
 //   'https://i0.wp.com/besthomediet.com/wp-content/uploads/2021/09/Rivers-Native-Soup.jpg',
 //   [ new Ingredient('Meat',1 ),
 //     new Ingredient('Draw-Soup',6)]),

 // new Recipe
 // ('Wecome Home', 'Home is Home',
 // 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg',
 // [new Ingredient('Native-Soup',2),
//  new Ingredient('Egusi-Soup', 4)])];

private recipes: Recipe[] = [];
constructor(private slService: ShoppingListService){}

 setRecipes(recipes:Recipe[]){
   this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
 }

getRecipes() {
  return this.recipes.slice();
}

getRecipe(index:number){
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[] ){
this.slService.addIngredients(ingredients);
}
addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe) {
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}




