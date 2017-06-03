import { Component, Input } from '@angular/core';
import { Pizzeria } from "app/data/models/pizzeria.model";

@Component({
  selector: 'app-pizzeria-item',
  templateUrl: './pizzeria-item.component.html',
  styleUrls: ['./pizzeria-item.component.css']
})
export class PizzeriaItemComponent {
  @Input() pizzeria: Pizzeria;
  @Input() index: number;
}