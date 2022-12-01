import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { emailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, appEmailValidator(emailDomains)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'repeatPassword')]
    })
  })

  constructor(private fb: FormBuilder) { }

  registerHandler(): void {
    console.log(this.form.value);
  }
}
