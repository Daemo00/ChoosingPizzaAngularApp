import { Pizza } from "app/data/models/pizza.model";

export class Promotion {
    constructor(public name: String) { }

    cost(pizze: Pizza[], date: Date): {cost: number, bonus: String} { 
        return {cost: 0, bonus: ""}; 
    }
}