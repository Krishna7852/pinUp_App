import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;
    // error = false;
    // errorMessage = '';
    constructor(private fb: FormBuilder, private router: Router ,private auth:AuthService ) { }


    register() {
      this.auth.onRegisterAdmin(this.myForm.value).subscribe((res: any) => {
        let data = res.json();
        console.log(data)
      });
      console.log(this.myForm.value)
      this.router.navigate(['/sub-domain']);

    }

    ngOnInit(): any {
      this.myForm = this.fb.group({
        username: ['' , Validators.compose([Validators.required])],
        emailAddress: ['', Validators.compose([
          Validators.required,
          this.isEmail
        ])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.compose([
          Validators.required,
          this.isEqualPassword.bind(this)
        ])],
      });
    }

    isEmail(control: FormControl): { [s: string]: boolean } {
      if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        return { noEmail: true };
      }
    }

    isEqualPassword(control: FormControl): { [s: string]: boolean } {

      if (!this.myForm) {
        return { passwordsNotMatch: true };

      }

      if (control.value !== this.myForm.controls['password'].value) {
        // console.log(control.value );
        console.log('working');

        return { passwordsNotMatch: true };
      }
    }
  }
