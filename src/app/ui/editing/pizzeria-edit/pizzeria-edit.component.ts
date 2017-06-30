import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { DataService } from "app/data/data.service";
import { Pizzeria } from "app/data/models/pizzeria.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Phone } from "app/data/models/phone.model";
import { Pizza } from "app/data/models/pizza.model";

@Component({
  selector: 'app-pizzeria-edit',
  templateUrl: './pizzeria-edit.component.html',
  styleUrls: ['./pizzeria-edit.component.css']
})
export class PizzeriaEditComponent implements OnInit {
  editMode: boolean;
  phonesFormArray: FormArray;
  pizzeFormArray: FormArray;
  @ViewChild("pizzeriaForm") pizzeriaForm: FormGroup;
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
    this.phonesFormArray = <FormArray>this.pizzeriaForm.get('phones');
    this.pizzeFormArray = <FormArray>this.pizzeriaForm.get('pizzeConDett');
  }

  private initForm() {
    this.pizzeriaForm = Pizzeria.getFormGroup(this.pizzeria);
  }

  onSubmit(pizzeriaForm: NgForm) {
    this.dataService.insertOrUpdatePizzeria(Pizzeria.clone(pizzeriaForm.value));
  }

  onReset() {
    console.log(this.pizzeriaForm);
    this.pizzeriaForm.reset();
  }

  onAddPhone() {
    (<FormArray>this.pizzeriaForm.get('phones')).push(Phone.getFormGroup());
  }

  onDeletePhone(index: number) {
    (<FormArray>this.pizzeriaForm.get('phones')).removeAt(index);
  }

  onAddPizza() {
    (<FormArray>this.pizzeriaForm.get('pizze')).push(Pizza.getFormGroup());
  }

  onDeletePizza(index: number) {
    (<FormArray>this.pizzeriaForm.get('pizze')).removeAt(index);
  }
}