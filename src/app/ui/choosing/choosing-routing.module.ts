import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosingComponent } from "app/ui/choosing/choosing/choosing.component";

const routes: Routes = [
    {path: '', component: ChoosingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoosingRoutingModule { }
