import { Pizza } from "app/data/models/pizza.model";
import { Promotion } from "app/data/models/promotion.model";
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";

export class Pizzeria {

    constructor(
        public name: String = "",
        public imagePath: String = "",
        public telephones: { number: String, type: string }[] = [],
        public pizze: {name: String, pizza: Pizza, cost: number}[] = [],
        public promotions: Promotion[] = [],
        public paymentModes: String[] = []) { }

    cost(pizze: Pizza[], date: Date): {cost: number, bonus: String}[] { 
        return [{cost: 0, bonus: ""}]; 
    }

    public equals(pizzeria: Pizzeria): boolean {
        if (!pizzeria) return false;
        return this.name.toUpperCase() === pizzeria.name.toUpperCase();
    }

    static getFormGroup(pizzeria: Pizzeria): FormGroup {
        if (!pizzeria) pizzeria = new Pizzeria();
        // var pizzeFormArray: FormArray = new FormArray([]);
        // for (let pizza of pizzeria.pizze)
            // pizzeFormArray.push(Pizza.getFormGroup(pizza));

        return new FormGroup({
            'name': new FormControl(Pizzeria.name, Validators.required),
            'imagePath': new FormControl(pizzeria.imagePath, Validators.required),
            // 'ingredients': pizzeFormArray
        });
    }

    static fromFormGroup(pizzeriaForm: FormGroup): Pizzeria {
        return new Pizzeria(
            pizzeriaForm.value['name'],
            pizzeriaForm.value['imagePath'],
            pizzeriaForm.value['telephones'],            
            pizzeriaForm.value['pizze'],            
            pizzeriaForm.value['promotions'],
            pizzeriaForm.value['paymentModes']
        );
    }

}