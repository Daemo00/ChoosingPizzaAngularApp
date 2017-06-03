import { Ingredient } from "app/data/models/ingredient.model";

export class Pizza {

    constructor(
        public ingredients: Set<{ ingredient: Ingredient, amount: number }>) { }
}