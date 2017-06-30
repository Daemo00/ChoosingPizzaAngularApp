import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pizzeria } from "app/data/models/pizzeria.model";
import { DataService } from "app/data/data.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-pizzeria-list',
  templateUrl: './pizzeria-list.component.html',
  styleUrls: ['./pizzeria-list.component.css']
})
export class PizzeriaListComponent implements OnInit, OnDestroy {
  pizzerieListSubscription: Subscription;

  pizzerie: Pizzeria[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.pizzerie = this.dataService.getPizzerie();
    this.pizzerieListSubscription = this.dataService.pizzerieChanges.subscribe(
      (newPizzerieList: Pizzeria[]) => {
        this.pizzerie = newPizzerieList;
        console.log("Subscription called, the new pizzerie are");
        console.log(this.pizzerie);
      }
    );
  }

  ngOnDestroy(): void {
    this.pizzerieListSubscription.unsubscribe();
  }
}