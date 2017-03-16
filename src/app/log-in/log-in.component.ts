import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
// import { GuardAuthService } from '../services/guardAuthentication';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private router: Router , private auth:AuthService) {
    this.myForm = this.fb.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onlogIn(): void {
    this.auth.onLogin(this.myForm.value)
  // console.log(this.myForm.value);
    // this.router.navigate(['/home']);
  }
  ngOnInit(): any {

this.auth.skipIfLoggedIn();
  }
}
