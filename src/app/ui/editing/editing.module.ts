import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditingRoutingModule } from './editing-routing.module';
import { EditingComponent } from './editing/editing.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PizzeriaEditComponent } from './pizzeria-edit/pizzeria-edit.component';
import { PizzeriaDetailComponent } from './pizzeria-detail/pizzeria-detail.component';
import { PizzeriaListComponent } from './pizzeria-list/pizzeria-list.component';
import { PizzeriaItemComponent } from './pizzeria-list/pizzeria-item/pizzeria-item.component';
import { SharedModule } from "app/shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EditingRoutingModule
  ],
  declarations: [
    EditingComponent,
    PizzeriaDetailComponent,
    PizzeriaEditComponent,
    PizzeriaListComponent,
    PizzeriaItemComponent,
  ]
})
export class EditingModule { }
