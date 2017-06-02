import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "app/core/auth/signup/signup.component";
import { SigninComponent } from "app/core/auth/signin/signin.component";
import { FirebaseResolver } from "app/core/firebase.resolver";

const routes: Routes = [
  { path: 'signup', component: SignupComponent, resolve: { firebaseApp: FirebaseResolver } },
  { path: 'signin', component: SigninComponent, resolve: { firebaseApp: FirebaseResolver } }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
