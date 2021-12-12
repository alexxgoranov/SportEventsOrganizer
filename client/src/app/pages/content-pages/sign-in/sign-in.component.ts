import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../content-pages-style.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  constructor(private router: Router,
              private authService: AuthService ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(
        { value: null, disabled: false },
        [Validators.required]
      ),
      password: new FormControl(
        { value: null, disabled: false },
        [Validators.required],
      ),
      // recaptchaReactive: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    // this.router.navigate(['./events']);
    console.log(this.loginForm.invalid);

    if (!this.loading && !this.loginForm.invalid) {
      console.log('Heree');

      const data = this.loginForm.getRawValue();
      this.loginForm.markAllAsTouched();
      const loginBindModel = data;
      this.loading = true;
      this.authService.signIn(data).subscribe(response => {
        this.loading = false;
        console.log(response);
      });
    }


  }

}
