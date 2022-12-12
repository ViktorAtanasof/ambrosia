import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, appEmailValidator(emailDomains)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  loginHandler(): void {
    const value = this.form.value;
    this.authService.login(value.email!, value.password!);
  }
}
