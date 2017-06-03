import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FirebaseResolver } from "app/core/firebase.resolver";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', resolve: { firebaseApp: FirebaseResolver } },
  { path: 'choosing', loadChildren: 'app/ui/choosing/choosing.module#ChoosingModule' },
  { path: 'editing', loadChildren: 'app/ui/editing/editing.module#EditingModule' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }