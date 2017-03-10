import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-sub-domain',
  templateUrl: './sub-domain.component.html',
  styleUrls: ['./sub-domain.component.css']
})
export class SubDomainComponent implements OnInit {
  myForm1: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { }
  submit() {
    this.auth.onSubDomain(this.myForm1.value);
  }
  ngOnInit() {
    this.myForm1 = this.fb.group({
      subDomain: ['', Validators.compose([Validators.required])]
    })
  }

}
