import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /* form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.required, ]
  }) */

  constructor(private fb: FormBuilder) { }

}
