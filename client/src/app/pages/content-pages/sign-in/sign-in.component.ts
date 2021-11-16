import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../content-pages-style.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(
        { value: null, disabled: false },
        [Validators.required,
        Validators.email
        ]
      ),
      password: new FormControl(
        { value: null, disabled: false },
        [Validators.required],
      ),
      recaptchaReactive: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.router.navigate(['./events'])

    if (!this.loading && !this.loginForm.invalid) {
      const data = this.loginForm.getRawValue();
      this.loginForm.markAllAsTouched();
      const loginBindModel = data;
      this.loading = true;
    }


  }

}
