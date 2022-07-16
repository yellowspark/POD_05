import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  loggedIn = false;
  constructor(
    private authService: AuthService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formGroup = formBuilder.group(
      {
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  login() {
    if (this.formGroup.valid) {
      let userName = this.formGroup.get("userName")?.value;
      let password = this.formGroup.get("password")?.value;

      console.log("LOGGING IN :", { userName, password });

      this.authService.login({ userName, password }).subscribe(
        (result) => {
          console.log("LOGIN Componenent result : ", result);

          this.router.navigate(['/policy']);
        }
      );
    }
  }
}
