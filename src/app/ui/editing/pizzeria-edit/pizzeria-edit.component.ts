import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from "@angular/forms";
import { DataService } from "app/data/data.service";
import { Pizzeria } from "app/data/models/pizzeria.model";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-pizzeria-edit',
  templateUrl: './pizzeria-edit.component.html',
  styleUrls: ['./pizzeria-edit.component.css']
})
export class PizzeriaEditComponent implements OnInit {
  pizzeriaForm: FormGroup;
  name: any;
  editMode: boolean;
  pizzeria: Pizzeria;
  id: number;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['pizzeriaId'];
        this.editMode = this.id != null;
        if (this.editMode) {
          this.pizzeria = this.dataService.getPizzerie()[this.id];
          this.initForm();
        }
      }
    );
    // this.dataService.recipeChanges.subscribe(
    //   ()=>{
    //     this.pizzeria = this.dataService.getPizzerie()[this.id];
    //   });
  }

  private initForm() {
    this.pizzeriaForm =  Pizzeria.getFormGroup(this.pizzeria);
  }

  onSubmit(pizzeriaForm: NgForm) {
    this.dataService.insertOrUpdatePizzeria(Pizzeria.fromFormGroup(pizzeriaForm.control));
  }
}
