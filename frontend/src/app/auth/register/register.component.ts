import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { emailDomains } from 'src/app/shared/constants';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    /* username: ['', [Validators.required, Validators.minLength(4)]], */
    email: ['', [Validators.required, appEmailValidator(emailDomains)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'repeatPassword')]
    })
  })

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  registerHandler(): void {
    const value = this.form.value;
    this.authService.register(value.email!, value.pass?.password!);
  }
}
