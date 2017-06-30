import { Ingredient } from "app/data/models/ingredient.model";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

export class Pizza {

    constructor(
        public ingredients: Set<Ingredient> = new Set()) { }

    static getFormGroup(pizza: Pizza = new Pizza()): FormGroup {
        var ingredientsFormArray: FormArray = new FormArray([]);
        for (let ingredient of Array.from(pizza.ingredients))
            ingredientsFormArray.push(Ingredient.getFormGroup(ingredient));
 
        return new FormGroup({
            'ingredients': ingredientsFormArray
        });
    }

    static fromFormGroup(pizzaForm: FormGroup): Pizza {
        return new Pizza(
            pizzaForm.value['ingredients']
        );
    }
}