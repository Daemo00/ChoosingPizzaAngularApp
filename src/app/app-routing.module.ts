import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'choosing', loadChildren: 'app/ui/choosing/choosing.module#ChoosingModule' },
  { path: 'editing', loadChildren: 'app/ui/editing/editing.module#EditingModule' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }