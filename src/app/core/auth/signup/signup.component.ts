import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/core/auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService) { }

  onSignup(signupForm: NgForm) {
    let email = signupForm.value.email;
    let password = signupForm.value.password;
    this.authService.signupUser(email, password)
      .catch((result) => {
        if (result)
          window.alert(result.message);
      });
  }
}