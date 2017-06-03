import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditingComponent } from "app/ui/editing/editing/editing.component";
import { PizzeriaEditComponent } from "app/ui/editing/pizzeria-edit/pizzeria-edit.component";
import { PizzeriaDetailComponent } from "app/ui/editing/pizzeria-detail/pizzeria-detail.component";
import { DataService } from "app/data/data.service";

const routes: Routes = [
  {
    path: '', component: EditingComponent, resolve: {pizzerie: DataService},
    children: [
      { path: 'new', component: PizzeriaEditComponent },
      { path: ':pizzeriaId', component: PizzeriaDetailComponent },
      { path: ':pizzeriaId/edit', component: PizzeriaEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditingRoutingModule { }
