import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditingComponent } from "app/ui/editing/editing/editing.component";

const routes: Routes = [
  {path: '', component: EditingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditingRoutingModule { }
