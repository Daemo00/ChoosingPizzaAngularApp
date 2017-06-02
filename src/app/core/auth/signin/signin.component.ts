import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService) { }

  onSignin(signuForm: NgForm){
    const email = signuForm.value.email;
    const password = signuForm.value.password;
    this.authService.signinUser(email, password)
    .catch((result) => {
        if (result)
          window.alert(result.message);
      });;   
  }
}