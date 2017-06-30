import { Pizza } from "app/data/models/pizza.model";
import { Promotion } from "app/data/models/promotion.model";
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Phone } from "app/data/models/phone.model";

export class Pizzeria {

    constructor(
        public name: String = "",
        public imagePath: String = "",
        public phones: Phone[] = [new Phone()],
        public pizzeConDett: PizzaConDett[] = [new PizzaConDett()],
        public promotions: Promotion[] = [],
        public paymentModes: String[] = []) { }

    cost(pizze: Pizza[], date: Date): { cost: number, bonus: String }[] {
        return [{ cost: 0, bonus: "" }];
    }

    public equals(pizzeria: Pizzeria): boolean {
        if (!pizzeria) return false;
        return this.name.toUpperCase() === pizzeria.name.toUpperCase();
    }

    static getFormGroup(pizzeria: Pizzeria): FormGroup {
        if (!pizzeria) pizzeria = new Pizzeria();
        var phonesFormArray: FormArray = new FormArray([]);
        for (let phone of pizzeria.phones)
            phonesFormArray.push(Phone.getFormGroup(phone));
        var pizzeFormArray: FormArray = new FormArray([]);
        for (let pizzaConDett of pizzeria.pizzeConDett)
            pizzeFormArray.push(PizzaConDett.getFormGroup(pizzaConDett));

        return new FormGroup({
            'name': new FormControl(pizzeria.name, Validators.required),
            'imagePath': new FormControl(pizzeria.imagePath, Validators.required),
            'phones': phonesFormArray,
            'pizzeConDett': pizzeFormArray
        });
    }

    static fromFormGroup(pizzeriaForm: FormGroup): Pizzeria {
        return new Pizzeria(
            pizzeriaForm.value['name'],
            pizzeriaForm.value['imagePath'],
            pizzeriaForm.value['phones'],
            pizzeriaForm.value['pizze'],
            pizzeriaForm.value['promotions'],
            pizzeriaForm.value['paymentModes']
        );
    }

    static clone(pizzeria: Pizzeria): Pizzeria {
        return new Pizzeria(
            pizzeria.name,
            pizzeria.imagePath,
            pizzeria.phones,
            pizzeria.pizzeConDett,
            pizzeria.promotions,
            pizzeria.paymentModes);
    }
}

class PizzaConDett {

    constructor(
        private name: string = "margherita",
        private pizza: Pizza = new Pizza(),
        private cost: number = 4) { }

    static getFormGroup(pizzaConDett: PizzaConDett): FormGroup {
        return new FormGroup({
            'name': new FormControl(pizzaConDett.name),
            'pizza': Pizza.getFormGroup(pizzaConDett.pizza),
            'cost': new FormControl(pizzaConDett.cost)
        })
    }

    static fromFormGroup(pizzeriaForm: FormGroup): PizzaConDett {
        return new PizzaConDett(
            pizzeriaForm.value['name'],
            pizzeriaForm.value['pizza'],
            pizzeriaForm.value['cost']
        );
    }
}