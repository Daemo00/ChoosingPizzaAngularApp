import { FormControl } from "@angular/forms";

export class Ingredient {
    constructor(public name = "p.b.") { }

    static getFormGroup(ingredient: Ingredient = new Ingredient()): FormControl {
        return new FormControl({
            'name': ingredient.name
        });
    }

    static fromFormGroup(ingredientFormControl: FormControl): Ingredient {
        return new Ingredient(
            ingredientFormControl.value['name']
        );
    }
}