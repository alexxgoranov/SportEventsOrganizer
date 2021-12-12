import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../content-pages-style.scss']
})
export class SignUpComponent implements OnInit {
  loading = false;
  registerForm: FormGroup;
  submitted: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl({ value: null, disabled: false }, [Validators.required, Validators.email]),
      name: new FormControl({ value: null, disabled: false }, [Validators.required]),
      phoneNumber: new FormControl({ value: null, disabled: false }),
      password: new FormControl({ value: null, disabled: false }),
      passwordConfirmation: new FormControl({ value: null, disabled: false }, [Validators.required]),
      // TO DO RECAPTCHA!
    }, {
      // validators: TO DO!
      updateOn: 'change'
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.loading && !this.registerForm.invalid) {
      const data = this.registerForm.getRawValue();
      this.registerForm.markAllAsTouched();
      this.loading = true;
      this.authService.signUp(data).subscribe(response => {
        this.loading = false;
        console.log(response);
      });
    }



  }
}
