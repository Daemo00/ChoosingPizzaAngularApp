import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "app/data/data.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Pizzeria } from "app/data/models/pizzeria.model";

@Component({
  selector: 'app-pizzeria-detail',
  templateUrl: './pizzeria-detail.component.html',
  styleUrls: ['./pizzeria-detail.component.css']
})
export class PizzeriaDetailComponent implements OnInit {
  id: number;
  pizzeria: Pizzeria;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {
  }

 ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("params subscription");
        this.id = +params['pizzeriaId'];
        this.pizzeria = this.dataService.getPizzerie()[this.id];
      }
    );
    // this.recipeBookService.recipeChanges.subscribe(
    //   ()=>{
    //     console.log("recipeChanges subscription");
    //     this.recipe = this.recipeBookService.getRecipes()[this.id];
    //   });
  }
}